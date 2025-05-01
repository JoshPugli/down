'use client';

import {
  IconCamera,
  IconCommand,
  IconCalendar,
  IconFileAi,
  IconFileDescription,
  IconUsers,
  IconUserPlus,
  IconMail,
  IconSettings,
  IconConfetti,
} from '@tabler/icons-react';
import * as React from 'react';

import { GroupSwitcher } from '@/components/group-switcher';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { NavSecondary } from '@/components/nav-secondary';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';

const data = {
  groups: [
    {
      name: 'The Lads',
      logo: IconCamera,
    },
    {
      name: 'Placeholder 1',
      logo: IconFileAi,
    },
    {
      name: 'Evil Corp.',
      logo: IconCommand,
    },
  ],
  navMain: [
    {
      title: 'Hangouts',
      url: '#',
      icon: IconConfetti,
    },

    {
      title: 'Calendar',
      url: '#',
      icon: IconCalendar,
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings,
    },
    {
      title: 'Inbox',
      url: '#',
      icon: IconMail,
    },
  ],
  navGroup: [
    {
      title: 'Members',
      url: '#',
      icon: IconUsers,
    },
    {
      title: 'Invite members',
      url: '#',
      icon: IconUserPlus,
    },
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: IconCamera,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: IconFileDescription,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: IconFileAi,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <GroupSwitcher teams={data.groups} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMain items={data.navGroup} label="Group" />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
