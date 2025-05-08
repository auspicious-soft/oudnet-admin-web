"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "../components/AuthLayout";
import { toast, ToastContainer } from "react-toastify";
import { patchApi } from "@/utils/api";

const Page = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [verifiedOtp, setVerifiedOtp] = useState<string | null>(null);
  useEffect(() => {
    const storedOtp = sessionStorage.getItem("verified_otp");
    const expirationTime = sessionStorage.getItem("otp_expiration");
    
    if (!storedOtp || !expirationTime) {
      toast.error("Please verify your OTP first");
      router.push("/otp");
      return;
    }
    
    // Check if OTP has expired
    const hasExpired = Date.now() > parseInt(expirationTime);
    
    if (hasExpired) {
      // Clear expired OTP
      sessionStorage.removeItem("verified_otp");
      sessionStorage.removeItem("otp_expiration");
      
      toast.error("OTP has expired. Please request a new one.");
      router.push("/otp");
      return;
    }
    
    // OTP is valid, set it in state
    setVerifiedOtp(storedOtp);
    
    // Set up expiration timer to clear OTP after remaining time
    const remainingTime = parseInt(expirationTime) - Date.now();
    const expirationTimer = setTimeout(() => {
      sessionStorage.removeItem("verified_otp");
      sessionStorage.removeItem("otp_expiration");
      
      toast.error("OTP has expired. Please request a new one.");
      router.push("/otp");
    }, remainingTime);
    
    // Clean up timer on component unmount
    return () => clearTimeout(expirationTimer);
  }, [router]);


  console.log(verifiedOtp,"verifiedOTp")
  const handleSubmit = async () => {
    if (!password || !confirmPassword) {
      toast.error("Please enter both password and confirm password.");
      return;
    }
  
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
  
    if (!verifiedOtp) {
        toast.error("OTP not found. Please verify OTP again.");
        router.push("/otp");
        return;
      }
  
    try {
      const response = await patchApi("/api/new-password-otp-verified", { password,  otp: verifiedOtp  });
  
      if (response.status === 200) {
        toast.success("Password updated successfully!");
        sessionStorage.removeItem("verified_otp");
        sessionStorage.removeItem("otp_expiration");
        
        toast.success("Password updated successfully!");
        
        setTimeout(() => {
          router.push("/");
        }, 1000);
        
        setPassword("");
        setConfirmPassword("");
      } else {
        toast.error( "Failed to reset password.");
      }
    } catch (error) {
      toast.error(
        "An unexpected error occurred."
      );
      console.error("Password Reset Error:", error);
    }
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

    <div className="flex flex-col items-center text-center ">
      <div className="mt-[50px] text-[#FFFFFF] text-3xl lg:text-4xl font-normal font-newyork">
        Reset Password!
      </div>
      <div className="mt-[20px] text-center justify-start text-[#ABABAB] text-sm md:text-base font-normal">
        Create a new password at least 8 digits long.
      </div>
    </div>

    <div className="mt-[11px] text-[#797A7C] text-sm font-medium text-left w-full">
      Password
    </div>

    <div className="flex items-center border border-[#7C7C7C40] rounded-xl w-full mt-[4px] gap-3 relative">
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input_color text-base w-full"
      />
      <Image
        src={showPassword ? "/showPassword.svg" : "/hidePassword.svg"}
        alt="Toggle visibility"
        width={24}
        height={24}
        className="h-[44px] xl:h-[52px] w-[52px] cursor-pointer absolute right-0 top-0 px-4 xl:px-3.5 py-3 object-contain"
        onClick={() => setShowPassword((prev) => !prev)}
      />
    </div>

    <div className="mt-[11px] text-[#797A7C] text-sm font-medium text-left w-full">
      Confirm Password
    </div>

    <div className="flex items-center border border-[#7C7C7C40] rounded-xl w-full mt-[4px] gap-3 relative">
      <input
        type={showConfirmPassword ? "text" : "password"}
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="input_color text-base w-full"
      />
      <Image
        src={showConfirmPassword ? "/showPassword.svg" : "/hidePassword.svg"}
        alt="Toggle visibility"
        width={24}
        height={24}
        className="h-[44px] xl:h-[52px] w-[52px] cursor-pointer absolute right-0 top-0 px-4 xl:px-3.5 py-3 object-contain"
        onClick={() => setShowConfirmPassword((prev) => !prev)}
      />
    </div>

   

    <button
      type="button"
      onClick={handleSubmit}
      className="mt-[20px] w-full rounded-lg px-[20px] py-[13px] bg-[#EEC584] hover:bg-[#EEC584] text-[#07151F] text-md font-medium cursor-pointer"
    >
      Update Password
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
