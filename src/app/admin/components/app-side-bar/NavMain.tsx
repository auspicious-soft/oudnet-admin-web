"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import ReusableLoader from "@/components/ui/ReusableLoader";

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
 const router = useRouter();
 const [isLoading, setIsLoading] = useState(false);
 const [targetPath, setTargetPath] = useState<string | null>(null);

 useEffect(() => {
   if (isLoading && targetPath === pathname) {
     setIsLoading(false);
     setTargetPath(null);
   }
 }, [pathname, isLoading, targetPath]);

 useEffect(() => {
   if (isLoading) {
     const timer = setTimeout(() => {
       setIsLoading(false);
     }, 5000); 
     
     return () => clearTimeout(timer);
   }
 }, [isLoading]);

 return (
  <>
    {isLoading && <ReusableLoader />}
    
    <SidebarGroup className="p-0 bg-[#111111] ">
     <SidebarMenu>
      {items.map((item) => {
       const isActive = pathname === item.url || 
                       (pathname.startsWith(item.url) && item.url !== "/admin/dashboard");
       
       const isDashboard = item.url === "/admin/dashboard";
       const isDashboardActive = isDashboard && pathname === "/admin/dashboard";
       
       const isItemActive = isDashboard ? isDashboardActive : isActive;

       return (
        <SidebarMenuItem key={item.title} className={isItemActive ? "active" : ""}>
         <SidebarMenuButton asChild tooltip={item.title}>
          <Link 
            href={item.url} 
            className={`dm-sans md:px-[12px] px-[18px] py-[10px] h-full hover:!bg-[#EEC584] hover:!text-[#000000] text-[#ABABAB] flex items-center gap-2 ${isItemActive ? "bg-[#EEC584] !text-[#000000]" : "font-normal"}`}
            onClick={(e) => {
              e.preventDefault();
              if (pathname !== item.url) {
                setIsLoading(true);
                setTargetPath(item.url);
                router.push(item.url);
              }
            }}
          >
           {item.icon && React.createElement(item.icon, { className: "!h-5 !w-5" })}
           <span>{item.title}</span>
          </Link>
         </SidebarMenuButton>
        </SidebarMenuItem>
       );
      })}
     </SidebarMenu>
    </SidebarGroup>
  </>
 );
}


