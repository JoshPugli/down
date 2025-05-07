'use client';

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { SIDEBAR_REGISTRY } from '@/lib/sidebar-registry';
import { Sidebar } from '@/components/ui/sidebar';

// Default content when no matching sidebar is found
const DefaultSidebarContent = () => (
  <div className="p-4">
    <p className="text-sm text-muted-foreground">Select a section</p>
  </div>
);

// Loading indicator
const LoadingSidebarContent = () => (
  <div className="p-4">
    {/* <div className="animate-pulse h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="space-y-3">
      <div className="animate-pulse h-3 bg-gray-200 rounded"></div>
    </div> */}
  </div>
);

export default function SecondarySidebar() {
  const pathname = usePathname();
  const [SidebarContentComponent, setSidebarContentComponent] =
    useState<React.ComponentType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    // Find which section we're in by checking the pathname
    const section = Object.keys(SIDEBAR_REGISTRY).find((key) => pathname.startsWith(`/${key}`));

    if (!section) {
      setSidebarContentComponent(null);
      setIsLoading(false);
      return;
    }

    // Dynamic import based on the current section
    const importSidebar = async () => {
      try {
        const mod = await import(`@/app/${section}/sidebar`);
        setSidebarContentComponent(() => mod.default);
      } catch (error) {
        console.error(`Failed to load sidebar for ${section}:`, error);
        setSidebarContentComponent(null);
      } finally {
        setIsLoading(false);
      }
    };

    importSidebar();
  }, [pathname]);

  // Now we wrap the dynamic content in the proper Sidebar container
  return (
    <Sidebar collapsible="none" className="hidden flex-1 md:flex">
      {isLoading ? (
        <LoadingSidebarContent />
      ) : SidebarContentComponent ? (
        <SidebarContentComponent />
      ) : (
        <DefaultSidebarContent />
      )}
    </Sidebar>
  );
}
