"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "../components/AuthLayout";

const Page = () => {
  const router = useRouter();
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mobile Number Submitted:", mobile);

    if (!mobile) {
      toast.error("Please enter mobile number");
      return;
    }

    console.log("Mobile Number:", mobile);
    toast.success("Form submitted!");

    setMobile("");
  };

  return (
    <AuthLayout>
      <div
        className="mt-[50px] text-[#FFFFFF] text-4xl font-normal "
        style={{ fontFamily: "Jost, sans-serif" }}
      >
        {" "}
        Forgot Password!{" "}
      </div>
      <div className="mt-[20px] text-center justify-start text-[#ABABAB] text-base font-normal ">
        Please enter your registered Mobile Number.
      </div>

      {/* form  */}
      <div
        className="text-[#797A7C] font-medium mt-[40px]"
        style={{ fontFamily: "Jost, sans-serif" }}
      >
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
        <span className="text-[#797A7C] text-sm font-normal ">
          Remember Password? Try{" "}
        </span>
        <span
          className="text-[#266EFF] text-sm font-normal  underline cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          {" "}
          Logging In{" "}
        </span>
      </div>
    </AuthLayout>
  );
};
export default Page;
