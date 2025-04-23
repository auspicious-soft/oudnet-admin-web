"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Jost } from "next/font/google";
import OudnetBanner from "../components/OudnetBanner";
import Logo from "../components/Logo";


const jost = Jost({
 subsets: ["latin"],
 weight: ["400", "500", "600", "700"],
});

const Page = () => {
 const router = useRouter();
 const [mobile, setMobile] = useState(""); 

 const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Mobile Number Submitted:", mobile);

    if(!mobile){
        toast.error("Please enter mobile number");
        return;
    }

    console.log("Mobile Number:", mobile);
    toast.success("Form submitted!");

    setMobile("");
  };



 return (
  <>
   <ToastContainer />

   <div className={`${jost.className} flex flex-col lg:flex-row min-h-screen`}>
    {/* left */}
    <div className=" w-full lg:w-[45%]  2xl:w-[40%] h-auto  lg:mn-h-full relative object-contain">
     <OudnetBanner />
    </div>

    {/* Right Form Section */}
    <div className="border border-purple-600 w-full lg:w-[55%] 2xl:w-[60%]  py-[30px] px-[121px]  flex justify-center items-center ">
     <div className=" ">
      <div className="border border-orange-600 flex flex-col items-center text-center">
       <Logo />

       <div className="mt-[50px] text-[#FFFFFF] text-4xl font-normal " style={{ fontFamily: "Jost, sans-serif" }}>
        {" "}
        Forgot Password!{" "}
       </div>
       <div className="mt-[20px] text-center justify-start text-[#ABABAB] text-base font-normal ">Please enter your registered Mobile Number.</div>
      </div>

      {/* form  */}
      <div className="text-[#797A7C] font-medium mt-[40px]" style={{ fontFamily: "Jost, sans-serif" }}>
  Mobile Number
</div>

<div className="relative w-full mt-[4px]">
  <input
    type="tel"
    name="mobile"
    placeholder="Mobile Number"
    value={mobile}
    onChange={(e) => setMobile(e.target.value)}
    className="text-[#797A7C] bg-[#212121] text-base rounded-lg py-[18px] px-[20px] w-full"
  />
</div>

<div className="relative mt-[20px] w-full min-h-[60px]">
  <button
    onClick={(e) => {
      handleSubmit(e);
      router.push("/otp");
    }}
    type="submit"
    className="w-full rounded-lg px-[94px] py-[18px] md:py-4 bg-[#EEC584] hover:bg-[#EEC584] text-[#07151F] text-center text-sm 2xl:text-xl xl:text-lg md:text-md font-semibold cursor-pointer"
    style={{ fontFamily: "Jost, sans-serif" }}
  >
    Verify
  </button>
</div>

      <div className="mt-[50px] self-stretch text-center justify-start">
        <span className="text-[#797A7C] text-sm font-normal ">Remember Password? Try </span>
        <span className="text-[#266EFF] text-sm font-normal  underline cursor-pointer" 
        onClick={() => {router.push("/"); }} > Logging In </span>
        </div>

     </div>
    </div>
   </div>
  </>
 );
};
export default Page;
