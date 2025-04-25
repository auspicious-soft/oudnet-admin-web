"use client";
import React from "react";
import OudnetBanner from "./OudnetBanner";
import Logo from "./Logo";

interface AuthLayoutProps {
 children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
 return (
  <>
   <div className={`flex flex-col lg:flex-row `}>
    <div className="hidden lg:block w-full lg:w-1/2 max-h-full h-screen sticky top-0 p-5">
     <OudnetBanner />
    </div>


    <div className="w-full lg:w-[50%] flex justify-center items-center px-[20px] py-[50px] min-h-screen">
     <div className="flex flex-col items-center text-center w-full max-w-[500px]">
      <Logo />
      {children}
      <div />
     </div>
    </div>

   </div>
  </>
 );
}
