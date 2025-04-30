"use client";
import * as React from "react";
import LogoCard from "./LogoCard";
import { NavMain } from "./NavMain";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { HomeIcon, List, Logout, Notifications, Orders, Promotions, Store, UserIcon } from "@/lib/svg";
import { usePathname } from "next/navigation";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: HomeIcon,
    },

    {
      title: "User Management",
      url: "/admin/user",
      icon: UserIcon,
    },
    {
      title: "Store Management",
      url: "/admin/store",
      icon: Store,
    },
    {
      title: "Product Listing",
      url: "#",
      icon: List,
    },
    {
      title: "Orders Overview",
      url: "#",
      icon: Orders,
    },
    {
      title: "Notifications & Announcements",
      url: "#",
      icon: Notifications,
    },
    {
      title: "Advertisements & Promotions",
      url: "#",
      icon: Promotions,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const isLogoutActive = pathname === "/logout";

  // State to track active icon
  // const [activeIcon, setActiveIcon] = React.useState<string | null>(null);

  // Function to handle icon click
  // const handleIconClick = (iconName: string) => {
  //   setActiveIcon(activeIcon === iconName ? null : iconName);
  // };

  // Function to determine the SVG color
  // const getIconColor = (iconName: string) => {
  //   return activeIcon === iconName ? "black" : "#ABABAB"; // Default to gray, change to black when active
  // };

  return (
    <Sidebar collapsible="icon" {...props} className="py-5 bg-black rounded-tr-[20px]">
      <SidebarHeader className="px-4 pt-1 pb-0 md:p-0 bg-[#111111] py-10">
        <LogoCard />
      </SidebarHeader>

      <SidebarContent className="p-0 m-0 py-10">
        <NavMain items={data.navMain} />
      </SidebarContent>

      <div className="">
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="Logout">
            <button
              // onClick={handleLogout}
              className={`dm-sans px-[12px] py-[10px] h-full hover:!bg-[#EEC584] hover:!text-[#000000] text-[#ABABAB] flex items-center gap-2 ${isLogoutActive ? "bg-[#EEC584] !text-[#000000]" : "font-normal"} w-full`}
            >
              <Logout />
              <span>Logout</span>
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </div>
    </Sidebar>
  );
}