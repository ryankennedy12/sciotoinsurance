import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Shield, UserPlus, LogIn } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, isLoading: authLoading, isAdmin, signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Already authenticated as admin - redirect
  useEffect(() => {
    if (!authLoading && user && isAdmin) {
      navigate("/admin", { replace: true });
    }
  }, [authLoading, user, isAdmin, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Missing credentials", description: "Please enter both email and password.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    const { error } = await signIn(email, password);
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
      setIsSubmitting(false);
      return;
    }
    navigate("/admin");
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Missing credentials", description: "Please enter both email and password.", variant: "destructive" });
      return;
    }
    if (password !== confirmPassword) {
      toast({ title: "Passwords don't match", description: "Please make sure your passwords match.", variant: "destructive" });
      return;
    }
    if (password.length < 6) {
      toast({ title: "Password too short", description: "Password must be at least 6 characters.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    // Check if email is on the approved list
    const { data: isApproved, error: checkError } = await supabase.rpc("is_approved_admin_email", { email_to_check: email });
    if (checkError || !isApproved) {
      toast({ title: "Not authorized", description: "This email is not authorized to create an admin account.", variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    // Sign up the user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin + "/admin" },
    });

    if (error) {
      toast({ title: "Signup failed", description: error.message, variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    if (data.user) {
      // Sign in first so we have an authenticated session
      const { error: signInError } = await signIn(email, password);
      if (signInError) {
        toast({ title: "Account created but sign-in failed", description: "Please try signing in manually.", variant: "destructive" });
        setIsSubmitting(false);
        return;
      }

      // Grant admin role via security definer function
      const { error: roleError } = await supabase.rpc("assign_admin_role_self");

      if (roleError) {
        toast({ title: "Role assignment failed", description: "Account created but couldn't assign admin role. Contact support.", variant: "destructive" });
        setIsSubmitting(false);
        return;
      }

      toast({ title: "Admin account created!", description: "Welcome to the admin portal." });
      navigate("/admin");
    }

    setIsSubmitting(false);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-display">Admin Portal</CardTitle>
          <CardDescription>Sign in or create your admin account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="login" className="flex items-center gap-2">
                <LogIn className="w-4 h-4" /> Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="flex items-center gap-2">
                <UserPlus className="w-4 h-4" /> Create Account
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@example.com" required autoComplete="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required autoComplete="current-password" />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg mb-4">
                  <p className="text-xs text-muted-foreground">
                    Only pre-approved email addresses can create an admin account.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@yourcompany.com" required autoComplete="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required autoComplete="new-password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" required autoComplete="new-password" />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Creating account..." : "Create Admin Account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to website
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
