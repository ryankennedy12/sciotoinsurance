export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      lead_activity: {
        Row: {
          activity_type: string
          created_at: string
          id: string
          lead_id: string
          new_status: string | null
          note: string | null
          old_status: string | null
          user_id: string | null
        }
        Insert: {
          activity_type: string
          created_at?: string
          id?: string
          lead_id: string
          new_status?: string | null
          note?: string | null
          old_status?: string | null
          user_id?: string | null
        }
        Update: {
          activity_type?: string
          created_at?: string
          id?: string
          lead_id?: string
          new_status?: string | null
          note?: string | null
          old_status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_activity_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          additional_info: string | null
          benefits_employee_count: string | null
          benefits_interests: string[] | null
          benefits_situation: string | null
          best_time: string | null
          business_coverage_interests: string[] | null
          business_type: string | null
          coverage_type: Database["public"]["Enums"]["coverage_type"]
          created_at: string
          email: string
          employee_count: string | null
          first_name: string
          has_current_coverage: boolean | null
          id: string
          is_read: boolean | null
          last_name: string
          notes: string | null
          personal_coverage_interests: string[] | null
          phone: string | null
          preferred_contact: Database["public"]["Enums"]["contact_method"]
          reply_status: string | null
          request_type: Database["public"]["Enums"]["request_type"] | null
          status: Database["public"]["Enums"]["lead_status"]
          switch_reason: string | null
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          benefits_employee_count?: string | null
          benefits_interests?: string[] | null
          benefits_situation?: string | null
          best_time?: string | null
          business_coverage_interests?: string[] | null
          business_type?: string | null
          coverage_type: Database["public"]["Enums"]["coverage_type"]
          created_at?: string
          email: string
          employee_count?: string | null
          first_name: string
          has_current_coverage?: boolean | null
          id?: string
          is_read?: boolean | null
          last_name: string
          notes?: string | null
          personal_coverage_interests?: string[] | null
          phone?: string | null
          preferred_contact?: Database["public"]["Enums"]["contact_method"]
          reply_status?: string | null
          request_type?: Database["public"]["Enums"]["request_type"] | null
          status?: Database["public"]["Enums"]["lead_status"]
          switch_reason?: string | null
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          benefits_employee_count?: string | null
          benefits_interests?: string[] | null
          benefits_situation?: string | null
          best_time?: string | null
          business_coverage_interests?: string[] | null
          business_type?: string | null
          coverage_type?: Database["public"]["Enums"]["coverage_type"]
          created_at?: string
          email?: string
          employee_count?: string | null
          first_name?: string
          has_current_coverage?: boolean | null
          id?: string
          is_read?: boolean | null
          last_name?: string
          notes?: string | null
          personal_coverage_interests?: string[] | null
          phone?: string | null
          preferred_contact?: Database["public"]["Enums"]["contact_method"]
          reply_status?: string | null
          request_type?: Database["public"]["Enums"]["request_type"] | null
          status?: Database["public"]["Enums"]["lead_status"]
          switch_reason?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_exists: { Args: never; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      contact_method: "email" | "phone" | "text"
      coverage_type: "personal" | "business" | "benefits" | "not_sure"
      lead_status: "new" | "contacted" | "quoted" | "won" | "lost"
      request_type:
        | "quote"
        | "service_claim"
        | "service_change"
        | "service_cert"
        | "service_idcard"
        | "service_review"
        | "service_payment"
        | "contact_general"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      contact_method: ["email", "phone", "text"],
      coverage_type: ["personal", "business", "benefits", "not_sure"],
      lead_status: ["new", "contacted", "quoted", "won", "lost"],
      request_type: [
        "quote",
        "service_claim",
        "service_change",
        "service_cert",
        "service_idcard",
        "service_review",
        "service_payment",
        "contact_general",
      ],
    },
  },
} as const
