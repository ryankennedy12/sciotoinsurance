import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Get allowed origin from environment or use restrictive default
const allowedOrigin = Deno.env.get("SITE_URL") || "";

const corsHeaders = {
  "Access-Control-Allow-Origin": allowedOrigin,
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewLeadPayload {
  type: "INSERT";
  table: string;
  record: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
    coverage_type: string;
    preferred_contact: string;
    created_at: string;
  };
  schema: string;
}

const coverageLabels: Record<string, string> = {
  personal: "Personal Insurance",
  business: "Business Insurance",
  benefits: "Employee Benefits",
  not_sure: "Not Sure / General Inquiry",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: NewLeadPayload = await req.json();
    const lead = payload.record;

    // Get admin email from environment or use a default
    const adminEmail = Deno.env.get("ADMIN_NOTIFICATION_EMAIL");
    
    if (!adminEmail) {
      console.log("No ADMIN_NOTIFICATION_EMAIL configured, skipping notification");
      return new Response(
        JSON.stringify({ message: "No admin email configured" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const coverageType = coverageLabels[lead.coverage_type] || lead.coverage_type;
    const submittedAt = new Date(lead.created_at).toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailResponse = await resend.emails.send({
      from: "Leads Notification <notifications@resend.dev>",
      to: [adminEmail],
      subject: `🔔 New Lead: ${lead.first_name} ${lead.last_name} - ${coverageType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #8B2942; border-bottom: 2px solid #8B2942; padding-bottom: 10px;">
            New Quote Request
          </h1>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #333;">Contact Information</h2>
            <p><strong>Name:</strong> ${lead.first_name} ${lead.last_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></p>
            ${lead.phone ? `<p><strong>Phone:</strong> <a href="tel:${lead.phone}">${lead.phone}</a></p>` : ""}
            <p><strong>Preferred Contact:</strong> ${lead.preferred_contact}</p>
          </div>
          
          <div style="background: #fff8f0; padding: 20px; border-radius: 8px; border-left: 4px solid #C9A962;">
            <h2 style="margin-top: 0; color: #333;">Coverage Type</h2>
            <p style="font-size: 18px; font-weight: bold; color: #8B2942;">${coverageType}</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            <em>Submitted: ${submittedAt}</em>
          </p>
          
          <div style="margin-top: 30px; padding: 20px; background: #8B2942; border-radius: 8px; text-align: center;">
            <a href="${Deno.env.get("SITE_URL") || "https://sciotoinsurancegroup.com"}/admin/leads" 
               style="color: white; text-decoration: none; font-weight: bold; font-size: 16px;">
              View in Admin Dashboard →
            </a>
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center;">
            This is an automated notification from your insurance website.
          </p>
        </div>
      `,
    });

    console.log("Email notification sent:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
