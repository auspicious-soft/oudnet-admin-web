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
        <div className=" w-full lg:w-[50%]  2xl:w-[50%] h-[100%] relative object-contain p-5">
          <OudnetBanner />
        </div>
        <div className=" w-full lg:w-[55%] 2xl:w-[60%]  py-[30px] px-[20px] md:py-[35px] md:px-[80px] 2xl:px-[128px] flex justify-center items-center ">
          <div className=" ">
            <div className="flex flex-col items-center text-center">
              <Logo />
              {children}
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
