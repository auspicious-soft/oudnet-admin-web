"use client";

import * as React from "react";
// import { Sidebar,SidebarContent,SidebarHeader,} from "@/components/ui/sidebar";
import LogoCard from "./LogoCard";
// import { Sidebar } from "@/components/ui/sidebar";
import { NavMain } from "./NavMain";
// import { AudioTagesIcon, BellNotifactionIcon, CompassIcon, FAQIcon, SecurityIcon, SubscriptionIcon, UsersIcon } from "@/lib/svg";
// import { useRouter } from "next/navigation";
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar";

// Sample data for the sidebar menu
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      // icon: CompassIcon 
    },
    {
      title: "User Management",
      url: "#",
      // icon: UsersIcon,
      // items: [
      //   { title: "Company Lists", url: "/admin/company-lists" },
      //   { title: "User Lists", url: "/admin/user-lists" },
      //   { title: "Blocked Users", url: "/admin/blocked-users" },
      // ],
    },
    {
      title: "Store Management",
      url: "#",
      // icon: SecurityIcon,
      items: [
        { title: "All Collections", url: "/admin/all-collections" },
        { title: "Audio Files", url: "/admin/audio-files" },
      ],
    },
    {
      title: "Product Listing",
      url: "/admin/audio-tags",
      // icon: AudioTagesIcon,
    },
    {
      title: "Orders Overview",
      url: "/admin/subscription",
      // icon: SubscriptionIcon,
    },
    {
      title: "Notifications & Announcements",
      url: "/admin/analytics",
      // icon: SubscriptionIcon,
    },
    {
      title: "Advertisements & Promotions",
      url: "/admin/requests",
      // icon: BellNotifactionIcon,
    },
    {
      title: "Log Out",
      url: "/admin/faqs",
      // icon: FAQIcon,
    },
    
  ],
};


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const router = useRouter()
  return (
    <Sidebar collapsible="icon" {...props} className="bg-[#524e4e] !py-6 !px-4 !border-0 rounded-tr-[20px] rounded-br-[20px]">
      <SidebarHeader className="px-4 pt-1 pb-0 md:p-0">
        <LogoCard />
      </SidebarHeader>
      <hr className="opacity-[0.30] mb-5 md:my-6"></hr>
      <SidebarContent className="px-0 py-0  md:p-0">
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* <div className="flex gap-2 items-center hover:cursor-pointer mt-6 text-white text-base font-normal px-4 py-0 md:p-0"
      onClick={()=> router.push('/admin/subscription-expiring')}>
        <BellNotifactionIcon />
         Subscriptions Expiring Today
      </div> */}
      <hr className="opacity-[0.30] mt-6"></hr>
    </Sidebar>
  );
}
