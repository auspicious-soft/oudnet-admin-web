import Image from "next/image";
import React from "react";


const userStats = [
  { title: "Products purchased", count: "19", icon: "/storeProduct.svg" },
  { title: "Amount spent so far", count: " 2102.50 د.إ ", icon: "/store.svg" },
  { title: "Phone number", count: "5", icon: "/bags.svg" }, 
  { title: "Favourite Store", count: "Scented Treasures", icon: "/bags.svg" },
 ];


const Page = () => {
 return (
  <>

   <div className="flex justify-end">
    <div className="px-[16px] py-[8px] bg-[#EEC584] rounded-[30px] inline-flex justify-center items-center">
     <div className="justify-start text-black text-sm font-normal">View uploaded products</div>
    </div>
   </div>



   <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 bg-black p-6 rounded-xl">
  {/* Image */}
  <div className="w-full h-full">
    <Image
      src="/UserImage.svg" 
      height={330}
      width={330}
      alt="User"
      className="rounded-[20px] object-cover w-full h-full"
    />
  </div>

  <div className="grid grid-rows-[auto_auto] gap-y-[40px] ">
    <div className="grid grid-cols-2 gap-y-[30px] ">
      {/* First Name */}
      <div className="flex flex-col gap-[8px]">
        <span className="justify-center text-[#797A7C] text-sm font-normal ">First name</span>
        <span className="justify-start text-[#D1D1D1] text-xl font-medium ">Richard</span>
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-[8px]">
        <span className="justify-center text-[#797A7C] text-sm font-normal">Last name</span>
        <span className="justify-start text-[#D1D1D1] text-xl font-medium">Thompson</span>
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-[8px]">
        <span className="justify-center text-[#797A7C] text-sm font-normal">Phone number</span>
        <span className="justify-start text-[#D1D1D1] text-xl font-medium">+1 254 458 6985</span>
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-[8px]">
        <span className="justify-center text-[#797A7C] text-sm font-normal">Email address</span>
        <span className="justify-start text-[#D1D1D1] text-xl font-medium">noah.thompson@example.com</span>
      </div>
    </div>

    {/* Bottom - Cards */}
    <div className="grid grid-cols-2 gap-6">
      {/* Card 1 */}
        {userStats.map((stat, i) => (
         <div key={i} className="flex gap-[21px] items-center ">
          <Image src={stat.icon} alt={stat.title} width={60} height={60} />
          <div className="flex flex-col gap-[4px]">
           <div className="text-[#797A7C] text-base  font-normal ">{stat.title}</div>
           <div className="text-[#D1D1D1]  text-xl font-medium">{stat.count}</div>
          </div>
         </div>
        ))}

      {/* Card 2 */}
      {/* <div className="border border-neutral-700 rounded-xl p-4 flex items-center gap-4">
        <img src="/amount-spent-icon.svg" alt="Amount" className="w-8 h-8" />
        <div>
          <div className="text-neutral-400 text-sm">Amount spent so far</div>
          <div className="text-white font-semibold text-lg">د.إ 2102.50</div>
        </div>
      </div> */}

      {/* Card 3 */}
      {/* <div className="border border-neutral-700 rounded-xl p-4 flex items-center gap-4">
        <img src="/products-listed-icon.svg" alt="Listed" className="w-8 h-8" />
        <div>
          <div className="text-neutral-400 text-sm">Products Listed</div>
          <div className="text-white font-semibold text-lg">5</div>
        </div>
      </div> */}

      {/* Card 4 */}
      {/* <div className="border border-neutral-700 rounded-xl p-4 flex items-center gap-4">
        <img src="/favourite-store-icon.svg" alt="Store" className="w-8 h-8" />
        <div>
          <div className="text-neutral-400 text-sm">Favourite Store</div>
          <div className="text-white font-semibold text-lg">Scented Treasures</div>
        </div>
      </div> */}
    </div>
  </div>
</div>

  </>
 );
};

export default Page;
