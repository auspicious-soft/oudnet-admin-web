import Image from 'next/image';
import React from 'react'

export const Logo = () => {
  return (
    <>
    
     <Image
      src="/logo.svg"
      alt="Login Image"
      width={137}
      height={52}
      className=""
    />

    </>
 )
}
export default Logo;