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
   <div className={`flex flex-col lg:flex-row h-screen`}>
    
    {/* <div className="hidden lg:block w-full lg:w-[50%] 2xl:w-[50%] h-full relative object-contain p-5">
     <OudnetBanner />
    </div> */}

<div className="hidden lg:block   w-full lg:w-1/2 h-full  relative p-5">
  <OudnetBanner />
</div>

 
    {/* <div className=" w-full lg:w-[50%] 2xl:w-[50%] flex justify-center items-center ">
            <div className="flex flex-col items-center text-center w-[90%] px-10">
              <Logo />
              {children}
              <div />
            </div>
        </div> */}

    <div className="py-[10px] w-full lg:w-[50%] 2xl:w-auto 2xl:mx-auto flex justify-center items-center">
     <div className="flex flex-col items-center text-center w-[90%] lg:px-10 md:px-20 ">
      <Logo />
      {children}
      <div />
     </div>
    </div>
   </div>
  </>
 );
}
