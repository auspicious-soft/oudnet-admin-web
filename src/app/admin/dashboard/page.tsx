"use client";
import Image from "next/image";
import React  from "react";
import WeeklyStatChart from "../components/weekly-stat-chart/WeeklyStatChart";

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
   <div className="col-span-2 bg-[#212121] p-[30px] rounded-xl border border-purple-800">
    <h2 className="justify-start text-[#D1D1D1] text-xl font-medium">Orders</h2>

    <div className="overflow-x-auto mt-[25px]">
     <table className="w-full text-left">
      <thead className="text-xs font-normal text-[#797A7C] border-b-[2px] border-dashed border-[#797A7C]">
       <tr>
        <th className="">Sr No.</th>
        <th className="px-4 py-3 ">Name of Store</th>
        <th className="px-4 ">Products Sold (Today)</th>
        <th className="px-4 ">Products Sold (This Week)</th>
        <th className="px-4 text-right">Revenue (Today)</th>
        <th className="px-4 text-right">Action</th>
       </tr>
      </thead>

      <tbody className=" text-[#D1D1D1]">
       {[
        { name: "Isabella Anderson", today: 42, week: 245, revenue: "د.إ 45.67" },
        { name: "Sarah Williams", today: 17, week: 678, revenue: "82.94 د.إ" },
        { name: "Emily Brown", today: 88, week: 912, revenue: "120.89 د.إ" },
        { name: "Richard Thompson", today: 56, week: 345, revenue: "210.50 د.إ" },
        { name: "Robert Johnson", today: 23, week: 789, revenue: "12.89 د.إ" },
        { name: "William Davis", today: 99, week: 123, revenue: "6.78 د.إ" },
        { name: "Michael Jones", today: 34, week: 456, revenue: "155.00 د.إ" },
       ].map((order, index) => (
        <tr key={index} className="hover:bg-[#2a2a2a]  my-[10px]">
         <td className=" ">{index + 1}</td>
         <td className="py-3 px-4">{order.name}</td>
         <td className="py-3 px-4">{order.today}</td>
         <td className="py-3 px-4">{order.week}</td>
         <td className="py-3 px-4 text-right">{order.revenue} </td>
         <td className="py-3 px-4">
          <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block" />
         </td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </div>
  </>
 );
};
export default Page;
