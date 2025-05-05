'use client';

import React, { useState } from 'react';

import { ThemeProvider } from '@/components/theme-provider';
import { SessionProvider as SessionProviderBase } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from './_trpc/client';
import { httpBatchLink } from '@trpc/client';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}
let browserQueryClient: QueryClient | undefined = undefined;
function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function TRPCProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProviderBase>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TRPCProvider>{children}</TRPCProvider>
      </ThemeProvider>
    </SessionProviderBase>
  );
}
