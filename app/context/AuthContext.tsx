
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase";

export const AuthContext = createContext<{ session: Session | null, user: User | null, signOut: () => void }>({ session: null, user: null, signOut: () => {} });

export const SupabaseAuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setSession(null);
    }

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ session, user, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useSupabaseAuth = () => {
    return useContext(AuthContext);
}
