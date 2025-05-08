"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "../components/AuthLayout";
import { postApi } from "@/utils/api";

const Page = () => {
 const router = useRouter();
 const [phone, setPhone] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone) {
      toast.error("Please enter mobile number");
      return;
    }

    if (phone.length !== 10) {
      toast.error("Mobile number must be 10 digits");
      return;
    }

    try {
      const response = await postApi('/api/forgot-password', { phoneNumber: phone });
      if (response.status === 200) {
        toast.success("OTP sent on registered mobile number!");
        setTimeout(() => {
          router.push("/otp");
        }, 1000);
      } else {
        toast.error( "Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("An error occurred while sending OTP");
    } finally {
      setPhone("");
    }
  };

 return (
  <AuthLayout>
   <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

   <div className="flex flex-col items-center text-center ">
    <div className="mt-[50px] text-[#FFFFFF] text-3xl lg:text-4xl  font-normal font-newyork">Forgot Password!</div>
    <div className="mt-[20px] text-center justify-start text-[#ABABAB]  text-sm md:text-base font-normal ">Please enter your registered Mobile Number.</div>
   </div>

   <div className=" text-[#797A7C]  text-sm font-medium mt-[40px] text-left w-full">Mobile Number</div>

   <input type="tel" name="phone" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="input_color  text-base   w-full  mt-[4px]" />

   <button onClick={handleSubmit} type="submit" className="mt-[20px] w-full rounded-lg px-[20px] py-[13px]  bg-[#EEC584] hover:bg-[#EEC584] text-[#07151F] text-md  font-medium cursor-pointer">
    Verify
   </button>

   <div className="mt-[50px] self-stretch text-center justify-start text-sm font-normal">
    <span className="text-[#797A7C]  ">Remember Password? Try </span>
    <span
     className="text-[#266EFF]   underline cursor-pointer"
     onClick={() => {
      router.push("/");
     }}
    >
     Logging In
    </span>
   </div>
  </AuthLayout>
 );
};
export default Page;
