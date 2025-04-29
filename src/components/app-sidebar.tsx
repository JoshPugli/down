"use client"

import {
  IconCamera,
  IconCommand,
  IconCalendar,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconUsers
} from "@tabler/icons-react"
import * as React from "react"

import { GroupSwitcher } from "@/components/group-switcher"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from "@/components/ui/sidebar"

const data = {
  groups: [
    {
      name: "The Lads",
      logo: IconCamera,
    },
    {
      name: "Placeholder 1",
      logo: IconFileAi,
    },
    {
      name: "Evil Corp.",
      logo: IconCommand,
    },
  ],
  navMain: [
    {
      title: "Events",
      url: "#",
      icon: IconDashboard,
    },

    {
      title: "Calendar",
      url: "#",
      icon: IconCalendar,
    },
    {
      title: "Group",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <GroupSwitcher teams={data.groups} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
