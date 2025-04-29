import Image from "next/image";
import React from "react";

const Page = () => {
 return (
  <>
   {/* <Image src="/singleProduct.svg" alt="Product" height={330} width={330} /> */}

   <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]  gap-[21px]  p-4">
    {/* Left */}
    <div className="space-y-5  max-w-fit">
     <div>
      <Image src="/singleProduct.svg" alt="Product" height={330} width={330} className="object-cover" />
     </div>

     <div className="flex space-x-[10px]">
      <Image src="/singleProduct.svg" alt="Product" height={73} width={73} className="object-cover" />
      <Image src="/singleProduct.svg" alt="Product" height={73} width={73} className="object-cover" />
      <Image src="/singleProduct.svg" alt="Product" height={73} width={73} className="object-cover" />
     </div>
    </div>

    {/* Right */}
    <div className=" top-0 right-0">
     <div className="inline-flex justify-start items-start gap-2.5">
      <div className="px-4 py-2 rounded-[30px]  outline-1 outline-offset-[-1px] outline-red-600 flex justify-center items-center gap-2.5">
       <div className="justify-start text-red-600 text-sm font-normal ">Delete Product</div>
      </div>
     </div>
    </div>

    <div>
     <h1 className="text-2xl font-semibold">Jannat E Zuhur</h1>
     <p className="text-sm text-muted-foreground mt-2">A single ember awakens centuries of tradition, as the first wisp of smoke...</p>
    </div>
   </div>

   {/* Price + Frame ID */}
   {/* <div>
      <p className="text-2xl font-semibold text-orange-400">91.99 د.إ</p>
      <p className="text-blue-500 bg-blue-100 rounded-md inline-block px-2 py-1 mt-1 text-sm">⏐⏐ Frame 1261153470</p>
     </div> */}

   {/* Description Accordion */}
   {/* <div>
      <details className="bg-muted/10 rounded-md px-4 py-2">
       <summary className="cursor-pointer text-sm font-medium">Description</summary>
       <p className="text-sm mt-2 text-muted-foreground leading-relaxed">
        Scent profile: Uplifting rose and bergamot...
        <br />
        <br />
        What's included? 1 jar containing 40g...
        <br />
        <br />
        Cultivate calm in any space...
        <br />
        <br />
        What makes Dukhni Muattar special?...
       </p>
      </details>
     </div> */}

   {/* Shipping & Returns */}
   {/* <div>
      <details className="bg-muted/10 rounded-md px-4 py-2">
       <summary className="cursor-pointer text-sm font-medium">Shipping & Returns</summary>
       <p className="text-sm mt-2 text-muted-foreground">Estimated Delivery</p>
      </details>
     </div> */}
  </>
 );
};
export default Page;
