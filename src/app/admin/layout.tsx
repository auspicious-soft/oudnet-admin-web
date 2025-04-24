import type { Metadata } from "next";
import "../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-side-bar/AppSidebar";
import TopBar from "./components/header-top-bar/TopBar";
// import Link from "next/link";
// import { redirect } from "next/navigation";



export const metadata: Metadata = {
 title: "Meditation",
 description: "",
};

export default async function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
   

    
   
  
 return (
//   <html lang="en">
//    <body >
<div>
    <SidebarProvider>
     <AppSidebar />
     <div className="flex flex-1 p-4 md:p-8 flex-col w-full md:w-[calc(100%-256px)] gap-8">
      <TopBar />
      <div className="flex w-full flex-col gap-4">{children}</div>
     </div>
    </SidebarProvider>
    </div>
//    </body>
//   </html>
 );

 
}
