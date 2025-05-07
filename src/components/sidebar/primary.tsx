'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Calendar, Command, InboxIcon, LucideProps, Users2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { NavUser } from '@/components/nav-user';

type NavDataItem = {
  title: string;
  url: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  isActive: boolean;
};

const data: NavDataItem[] = [
  {
    title: 'Feed',
    url: '/feed',
    icon: InboxIcon,
    isActive: true,
  },
  {
    title: 'Groups',
    url: '/groups',
    icon: Users2,
    isActive: false,
  },
  {
    title: 'Calendar',
    url: '/calendar',
    icon: Calendar,
    isActive: false,
  },
];

function PrimarySidebar() {
  const router = useRouter();
  const [activeItem, setActiveItem] = React.useState(data[0]);

  // Handle click on menu item
  const handleNavigation = (item: NavDataItem) => {
    setActiveItem(item);
    router.push(item.url);
  };

  return (
    <Sidebar collapsible="none" className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              {data.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={{
                      children: item.title,
                      hidden: false,
                    }}
                    isActive={activeItem?.title === item.title}
                    className="px-2.5 md:px-2"
                    onClick={() => handleNavigation(item)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}

export default PrimarySidebar;
