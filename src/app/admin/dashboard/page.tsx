"use client";
import Image from "next/image";
import React  from "react";
import WeeklyStatChart from "../components/weekly-stat-chart/WeeklyStatChart";
import CustomTable from "@/app/(auth)/components/Table";

const userStats = [
 { title: "Total Users", count: "25,587", icon: "/users.svg" },
 { title: "Official Stores", count: "702", icon: "/store.svg" },
 { title: "Store Products", count: "38,824", icon: "/storeProduct.svg" },
 { title: "Orders This Week", count: "5,782", icon: "/bags.svg" },
];

const topStores = [
 { name: "Oud Factory", sales: "520 products sold this week", logo: "/oudFactory.svg" },
 { name: "Oud Factory", sales: "520 products sold this week", logo: "/oudFactory.svg" },
 { name: "Oud Factory", sales: "520 products sold this week", logo: "/oudFactory.svg" },
 { name: "Oud Factory", sales: "520 products sold this week", logo: "/oudFactory.svg" },
];


const columns = [
  { label: "Sr No.", key: "srno" },
  { label: "Name of user", key: "nameofuser" },
  { label: "Number of Products Sold (Today)", key: "ProductsSoldToday" },
  { label: "Number of Products Sold (This Week)", key: "ProductsSoldThisWeek" },
  { label: "Revenue (Today)", key: "revenueToday", align: "right" as "right" },
  { label: "Action", key: "action", align: "right" as "right" },
];

const data = [
  {
    srno: 1,
    nameofuser: "Isabella Anderson", 
    ProductsSoldToday: 42, 
    ProductsSoldThisWeek: 245 , 
    revenueToday: "د.إ 45.67",         
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 2,
    nameofuser: "Sarah Williams",
    ProductsSoldToday: 17,
    ProductsSoldThisWeek: 678, 
    revenueToday: "82.94 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 3,
    nameofuser: "Emily Brown",
    ProductsSoldToday: 88,
    ProductsSoldThisWeek: 912, 
    revenueToday: "120.89 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 4,
    nameofuser: "Richard Thompson",
    ProductsSoldToday: 56,
    ProductsSoldThisWeek: 345, 
    revenueToday: "210.50 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 5,
    nameofuser: "Robert Johnson",
    ProductsSoldToday: 23,
    ProductsSoldThisWeek: 789, 
    revenueToday: "12.99 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 6,
    nameofuser: "William Davis",
    ProductsSoldToday: 99,
    ProductsSoldThisWeek: 123, 
    revenueToday: "6.78 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 7,
    nameofuser: "Michael Jones",
    ProductsSoldToday: 34,
    ProductsSoldThisWeek: 456, 
    revenueToday: "155.00 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
];


const Page = () => {
 return (
  <>
   {/* top  */}

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[42px]">
    {userStats.map((stat, i) => (
     <div key={i} className="flex gap-[21px] items-center ">
      <Image src={stat.icon} alt={stat.title} width={60} height={60} />
      <div className="flex flex-col gap-[4px]">
       <div className="text-[#797A7C] xl:text-base text-sm font-normal ">{stat.title}</div>
       <div className="text-[#D1D1D1] xl:text-4xl text-2xl font-medium">{stat.count}</div>
      </div>
     </div>
    ))}
   </div>

   <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-0  my-[40px]">
    {/* Left  */}
    <div className="col-span-2 bg-[#212121] lg:p-[30px] p-[10px] rounded-xl ">
      <WeeklyStatChart 
        selectedYear={2023} 
        data={[]} 
        onYearChange={(year: number) => console.log("Year changed to:", year)} 
      />
    </div>

    {/* Right  */}
    <div className="bg-[#212121] p-6 rounded-xl mt-[40px] lg:mt-0">
     <div className="justify-start text-neutral-300 text-xl font-medium ">Top Performing Stores</div>

     <div className="flex flex-col gap-[10px] mt-[30px]">
      {topStores.map((store, i) => (
       <div key={i} className="flex items-center gap-[10px] rounded-lg  ">
        <Image src={store.logo} alt={store.name} width={84} height={60} />
        <div className="flex flex-col gap-1 py-[10px]">
         <div className="text-[#D1D1D1] xl:text-xl text-lg font-medium">{store.name}</div>
         <div className="text-[#797A7C] text-xs font-normal">{store.sales}</div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>


   {/* table  */}
<div>
      <CustomTable title="Orders" columns={columns} data={data} />
    </div>


  </>
 );
};
export default Page;
