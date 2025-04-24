"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "./(auth)/components/AuthLayout";

const Page = () => {
 const router = useRouter();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [showPassword, setShowPassword] = useState(false); // add this state

 const handleSubmit = () => {
  if (!email) {
   toast.error("Please enter email");
   return;
  }

  if (!email.includes("@")) {
   toast.error("Please enter a valid email");
   return;
  }

  if (!password) {
   toast.error("Please enter password");
   return;
  }

  // ✅ Log to console
  console.log("Email:", email);
  console.log("Password:", password);

  // Proceed with form logic
  toast.success("Form submitted!");

  // ✅ Reset the input fields
  setEmail("");
  setPassword("");
 };

 return (
  <AuthLayout>
   <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

   <div className="flex flex-col items-center text-center ">
    <div className="mt-[50px] text-[#FFFFFF] text-3xl lg:text-4xl font-normal font-newyork" >
     Welcome Back!
    </div>
    <div className="mt-[20px] text-center justify-start text-[#ABABAB] text-sm md:text-base  font-normal ">Please enter your credentials to log in to your account.</div>
   </div>

   <div className=" text-[#797A7C] text-sm font-medium mt-[40px] text-left w-full" >
    Email Address
   </div>

   <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input_color  text-base   w-full  mt-[4px]" />

   <div className="mt-[11px] text-[#797A7C] text-sm font-medium text-left w-full" >
    Password
   </div>

   <div className="flex items-center border border-[#7C7C7C40] rounded-xl  w-full mt-[4px]  gap-3 relative">
    <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input_color  text-base   w-full "  />
    <Image
     src={showPassword ? "/showPassword.svg" : "/hidePassword.svg"}
     alt="Toggle visibility"
     width={24}
     height={24}
     className="h-[44px] xl:h-[52px] w-[52px] cursor-pointer absolute right-0 top-0 px-4 xl:px-3.5 py-3 object-contain"
     onClick={() => setShowPassword((prev) => !prev)} // toggle on click
    />
   </div>


   <div className="mt-[4px]  text-right w-full  text-[#797A7C] text-sm  font-normal   cursor-pointer"  onClick={() => router.push("/forgot-password")}>
    Forgot password?
   </div>

   <button onClick={handleSubmit} type="submit" className="mt-[20px] w-full rounded-lg px-[20px] py-[13px]  bg-[#EEC584] hover:bg-[#EEC584] text-[#07151F] text-md  font-medium cursor-pointer" >
    Login
   </button>

  </AuthLayout>
 );
};
export default Page;
