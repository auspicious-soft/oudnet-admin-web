"use client";
import React from "react";
import Image from "next/image";

const UserProfile = () => {
 return (

//   <div className="flex gap-[10px]">
//    <Image src="/images/RobertJohnson.png" alt="Robert Johnson Image" height={46} width={46} className="" />
//    <div className=" ">
//     <p className="text-[#D1D1D1] text-base font-medium">Robert Johnson</p>
//     <p className="text-[#797A7C] text-sm font-normal">Administrator</p>
//    </div>
//   </div>
<div className="flex gap-2 items-center hidden md:flex">
  <Image src="/images/RobertJohnson.png" alt="Robert Johnson Image" height={46} width={46} className="rounded-full" />
  <div>
    <p className="text-[#D1D1D1] text-base font-medium">Robert Johnson</p>
    <p className="text-[#797A7C] text-sm font-normal">Administrator</p>
  </div>
</div>

 );
};

export default UserProfile;
