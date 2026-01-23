import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // Helper to check admin role - uses setTimeout to avoid Supabase auth deadlock
    const checkAdminRole = async (userId: string): Promise<boolean> => {
      return new Promise((resolve) => {
        setTimeout(async () => {
          try {
            const { data, error } = await supabase
              .from("user_roles")
              .select("role")
              .eq("user_id", userId)
              .eq("role", "admin")
              .maybeSingle();
            
            if (error) {
              console.error("Error checking admin role:", error);
              resolve(false);
            } else {
              resolve(!!data);
            }
          } catch (error) {
            console.error("Error checking admin role:", error);
            resolve(false);
          }
        }, 0);
      });
    };

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!isMounted) return;
        
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          const adminStatus = await checkAdminRole(session.user.id);
          if (isMounted) {
            setIsAdmin(adminStatus);
          }
        } else {
          setIsAdmin(false);
        }
        
        if (isMounted) {
          setIsLoading(false);
        }
      }
    );

    // Check for existing session on mount
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!isMounted) return;
      
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        const adminStatus = await checkAdminRole(session.user.id);
        if (isMounted) {
          setIsAdmin(adminStatus);
        }
      }
      
      if (isMounted) {
        setIsLoading(false);
      }
    }).catch((error) => {
      console.error("Error getting session:", error);
      if (isMounted) {
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error: error as Error | null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, session, isLoading, isAdmin, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
