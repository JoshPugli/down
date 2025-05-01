'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { SessionProvider as SessionProviderBase } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProviderBase>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </SessionProviderBase>
  );
}
