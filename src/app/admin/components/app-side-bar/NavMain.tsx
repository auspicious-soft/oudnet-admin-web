"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export function NavMain({
 items,
}: {
 items: {
  title: string;
  url: string;
  icon?: string | (() => ReactNode);
  isActive?: boolean;
 }[];
}) {
 const pathname = usePathname();

 return (
  <SidebarGroup className="p-0 bg-[#111111] ">
   <SidebarMenu>
    {items.map((item) => {
     const isActive = pathname === item.url;

     return (
      <SidebarMenuItem key={item.title} className= {isActive ? "active" : ""} 
      >
       <SidebarMenuButton asChild tooltip={item.title}>
        <a href={item.url} className={`dm-sans md:px-[12px] px-[18px] py-[10px] h-full hover:!bg-[#EEC584] hover:!text-[#000000] text-[#ABABAB] flex items-center gap-2 ${isActive ? "bg-[#EEC584] !text-[#000000]" : "font-normal"}`}>
         {item.icon && React.createElement(item.icon, { className: "!h-5 !w-5" })}
         <span>{item.title}</span>
        </a>
       </SidebarMenuButton>
      </SidebarMenuItem>
     
     );
    })}
   </SidebarMenu>
  </SidebarGroup>
 );
}


