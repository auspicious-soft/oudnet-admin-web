import Image from 'next/image';
import React from 'react'

export const OudnetBanner = () => {
  return (
    <>
      <Image
          src="/images/OudnetImage.png"
          alt="Login Image"
          width={690}
          height={984}
          // fill 
          className="w-[100%] h-full object-contain  rounded-3xl"
        />
       
    </>
  )
}
export default OudnetBanner;
