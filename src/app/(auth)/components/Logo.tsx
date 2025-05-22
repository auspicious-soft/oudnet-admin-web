import Image from "next/image";
import React from "react";
import loginicon from "../../../../public/homeLogo.svg"
export const Logo = () => {
  return (
    <>
      <Image
        src={loginicon}
        alt="Login Image"
        width={137}
        height={52}
        className=""
      />
    </>
  );
};
export default Logo;
