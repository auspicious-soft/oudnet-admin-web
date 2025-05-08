"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import AuthLayout from "../components/AuthLayout";
import { postApi } from "@/utils/api";

const Page = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(""); 

  const handleVerify = async () => {
    if (otp.length < 6) {
      toast.error("Please enter the complete OTP");
      return;
    }
  
    try {
      const response = await postApi("/api/verify-otp", { otp });
  
      if (response.status === 200) {
        toast.success( "Token verified successfully");
        const expirationTime = Date.now() + 5 * 60 * 1000; // Current time + 5 minutes in milliseconds
      
        // Store both the OTP and its expiration time
        sessionStorage.setItem("verified_otp", otp);
        sessionStorage.setItem("otp_expiration", expirationTime.toString());
        
        setTimeout(() => {
          router.push("/reset-password");
        }, 1000);
      } else {
        toast.error( "Failed to verify OTP");
      }
    } catch (error) {
      toast.error(
         "Invalid token"
      );
      console.error("OTP Verification Error:", error);
    }
  
    setOtp("");
  };

  return (
    <AuthLayout>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex flex-col items-center text-center">
        <div className="mt-[50px] text-[#FFFFFF] text-3xl lg:text-4xl font-normal font-newyork">
          Enter OTP!
        </div>
        <div className="mt-[20px] text-center justify-start text-[#ABABAB] text-sm md:text-base font-normal">
          Please enter the OTP sent on your registered mobile number.
        </div>
      </div>

      <InputOTP maxLength={6} value={otp} onChange={setOtp}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <button
        onClick={handleVerify}
        type="button"
        className="mt-[20px] w-full rounded-lg px-[20px] py-[13px] bg-[#EEC584] hover:bg-[#EEC584] text-[#07151F] text-md font-medium cursor-pointer"
      >
        Verify
      </button>

      <div className="mt-[50px] self-stretch text-center justify-start text-sm font-normal">
        <span className="text-[#797A7C]">Remember Password? Try </span>
        <span
          className="text-[#266EFF] underline cursor-pointer"
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
