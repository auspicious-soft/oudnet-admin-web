"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
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
      <div className="flex flex-col items-center text-center">
        <div
          className="mt-[50px] text-[#FFFFFF] text-4xl font-normal "
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          Welcome Back!
        </div>
        <div className="mt-[20px] text-center justify-start text-[#ABABAB] text-base font-normal ">
          Please enter your credentials to log in to your account.
        </div>
      </div>
      <div
        className=" text-[#797A7C]  font-medium mt-[40px] text-left w-full"
        style={{ fontFamily: "Jost, sans-serif" }}
      >
        Email Address
      </div>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-[#797A7C] bg-[#212121]  text-base rounded-lg py-[18px] px-[20px] w-full  "
      />

      <div
        className="mt-[11px] text-[#797A7C]  font-medium text-left w-full"
        style={{ fontFamily: "Jost, sans-serif" }}
      >
        Password
      </div>

      <div className="flex items-center border border-[#7C7C7C40] rounded-xl  w-full mt-[4px]  gap-3 relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-[#797A7C] bg-[#212121] text-base rounded-lg py-[18px] px-[20px] w-full"
          style={{ fontFamily: "Jost, sans-serif" }}
        />
        <Image
          src={showPassword ? "/showPassword.svg" : "/hidePassword.svg"}
          alt="Toggle visibility"
          width={24}
          height={24}
          className="h-[44px] xl:h-[52px] w-[52px] cursor-pointer absolute right-0 top-0 px-4 xl:px-3.5 py-3 object-contain"
          onClick={() => setShowPassword((prev) => !prev)} // toggle on click
        />
      </div>

      <div
        className="mt-[4px]  text-right w-full  text-[#797A7C] text-sm 2xl:text-lg xl:text-md md:text-sm  font-normal   cursor-pointer"
        style={{ fontFamily: "Jost, sans-serif" }}
        onClick={() => router.push("/forgot-password")}
      >
        Forgot password?
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full rounded-lg px-[94px] py-[18px] md:py-4 bg-[#EEC584] hover:bg-[#EEC584] text-[#07151F] text-sm 2xl:text-xl xl:text-lg md:text-md  font-semibold cursor-pointer"
        style={{ fontFamily: "Jost, sans-serif" }}
      >
        Login
      </button>
    </AuthLayout>
  );
};
export default Page;
