import type { Metadata } from "next";
import "../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-side-bar/AppSidebar";
import TopBar from "./components/header-top-bar/TopBar";
import UserProfile from "./components/header-top-bar/UserProfile";

export const metadata: Metadata = {
 title: "Oudnet",
 description: "",
};

export default async function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <div>
   <SidebarProvider>
    <AppSidebar />

    <div className="flex flex-1  p-4 md:p-5 flex-col w-full md:w-[calc(100%-300px)] gap-8 ">
        <div className="flex justify-between">
     <TopBar />
     <UserProfile />
     </div>
     <div className="flex w-full flex-col gap-4">{children}</div>
    </div>
   </SidebarProvider>
  </div>
 );
}
