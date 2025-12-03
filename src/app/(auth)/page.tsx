'use client';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase'; // Imports the client we created in Step 5
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    // Listen for Supabase auth state changes (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        // If the user logs in successfully, redirect them to the dashboard
        if (session) {
            router.push('/dashboard');
        }
      }
    );

    // Cleanup the listener when the component unmounts
    return () => {
      subscription.unsubscribe();
    };

  }, [router]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] p-4">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Welcome to OPERATE
        </h1>
        <Auth
          supabaseClient={supabase}
          view="sign_in"
          appearance={{ theme: ThemeSupa }}
          theme="default"
          providers={['google']}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Email Address',
                password_label: 'Password',
              },
              sign_up: {
                email_label: 'Email Address',
                password_label: 'Create a Password',
              },
            },
          }}
        />
      </div>
    </div>
  );
}