'use client';

import {
  Breadcrumb,
  // BreadcrumbItem,
  // BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { Sidebar, SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import PrimarySidebar from './primary';
import SecondarySidebar from './secondary';

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  // don’t render sidebar on login
  if (path === '/login') return <>{children}</>;

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '350px',
        } as React.CSSProperties
      }
    >
      <Sidebar collapsible="icon" className="overflow-hidden *:data-[sidebar=sidebar]:flex-row">
        <PrimarySidebar />
        <SecondarySidebar />
      </Sidebar>
      <SidebarInset>
        <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4 h-[var(--jdp-content-header-height)]">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {/* <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Inbox</BreadcrumbPage>
            </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="h-[calc(100vh-var(--jdp-content-header-height))]">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
