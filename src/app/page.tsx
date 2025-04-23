"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Jost } from "next/font/google";
import OudnetBanner from "./(auth)/components/OudnetBanner";
import Logo from "./(auth)/components/Logo";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // add this state
  const [showDropdown, setShowDropdown] = useState(false);

  // Sample dropdown items (you can replace these)
  const suggestions = [
    "example@gmail.com",
    "user@domain.com",
    "admin@site.com",
  ];

  const handleSelect = (value: string) => {
    setEmail(value);
    setShowDropdown(false);
  };

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
  <>
    <ToastContainer />

<div
  className={`${jost.className} flex flex-col lg:flex-row min-h-screen`}
>
  {/* left */}
  <div className=" w-full lg:w-[45%]  2xl:w-[40%] h-auto  lg:mn-h-full relative object-contain">
    <OudnetBanner />
  </div>


  {/* Right Form Section */}
  <div className=" w-full lg:w-[55%] 2xl:w-[60%]  py-[30px] px-[20px] md:py-[35px] md:px-[80px] 2xl:px-[128px] flex justify-center items-center ">
 

    <div className=" ">
      <div className="flex flex-col items-center text-center">

    <Logo />

      <div className="mt-[50px] text-[#FFFFFF] text-4xl font-normal " style={{ fontFamily: "Jost, sans-serif" }}>  Welcome Back! </div>
      <div className="mt-[20px] text-center justify-start text-[#ABABAB] text-base font-normal ">Please enter your credentials to log in to your account.</div>
      </div>

     
{/* form  */}

      {/* Email */}
      <div className=" text-[#797A7C]  font-medium mt-[40px]"
       style={{ fontFamily: "Jost, sans-serif" }}>
        Email Address
      </div>

      <div className="relative">
        <div className="flex items-center  rounded-lg  w-full mt-[4px]   ">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-[#797A7C] bg-[#212121]  text-base rounded-lg py-[18px] px-[20px] w-full  "
            />
           {/* style={{ fontFamily: "Jost, sans-serif" }} */}
        
        </div>

        {showDropdown && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            {suggestions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item)}
                className="px-5 py-3 text-sm text-[#1C1B35] hover:bg-gray-100 cursor-pointer"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Password */}

      <div className="mt-[11px] text-[#797A7C]  font-medium "
       style={{ fontFamily: "Jost, sans-serif" }}>
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

      <div className="mt-[4px]  text-right  text-[#797A7C] text-sm 2xl:text-lg xl:text-md md:text-sm  font-normal   cursor-pointer"
       style={{ fontFamily: "Jost, sans-serif" }} 
       onClick={ () => router.push("/forgot-password")} >
        Forgot  password?
      </div> 

      <div className="relative mt-[20px] w-full min-h-[60px]">
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full rounded-lg absolute right-0 left-0 top-1/2 -translate-y-1/2 px-[94px] py-[18px] md:py-4 bg-[#EEC584] hover:bg-[#EEC584] text-[#07151F] text-sm 2xl:text-xl xl:text-lg md:text-md  font-semibold cursor-pointer"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          Login
        </button>
      </div>

 
    </div>
  </div>
</div>
  </>
 );
}
export default Page;
