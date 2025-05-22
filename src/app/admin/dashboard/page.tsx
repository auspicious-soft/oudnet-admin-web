"use client";
import Image from "next/image";
import React, { useEffect, useState }  from "react";
import WeeklyStatChart from "../components/weekly-stat-chart/WeeklyStatChart";
import CustomTable from "@/app/(auth)/components/Table";
import StyledPagination from "@/app/(auth)/components/Pagenation";

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


type AlignType = "left" | "right"; 

interface Column {
  label: string;
  key: string;
  align?: AlignType;
}

const columns: Column[] = [
  { label: "Sr No.", key: "srno" },
  { label: "Name of Store", key: "nameofuser" },
  { label: "Number of Products Sold (Today)", key: "ProductsSoldToday" },
  { label: "Number of Products Sold (This Week)", key: "ProductsSoldThisWeek" },
  { label: "Revenue (Today)", key: "revenueToday", align: "right" },
  { label: "Action", key: "action", align: "right" },
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
   {
    srno: 8,
    nameofuser: "Robert Johnson",
    ProductsSoldToday: 23,
    ProductsSoldThisWeek: 789, 
    revenueToday: "12.99 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 9,
    nameofuser: "William Davis",
    ProductsSoldToday: 99,
    ProductsSoldThisWeek: 123, 
    revenueToday: "6.78 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 10,
    nameofuser: "Michael Jones",
    ProductsSoldToday: 34,
    ProductsSoldThisWeek: 456, 
    revenueToday: "155.00 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
   {
    srno: 11,
    nameofuser: "Robert Johnson",
    ProductsSoldToday: 23,
    ProductsSoldThisWeek: 789, 
    revenueToday: "12.99 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 12,
    nameofuser: "William Davis",
    ProductsSoldToday: 99,
    ProductsSoldThisWeek: 123, 
    revenueToday: "6.78 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 13,
    nameofuser: "Michael Jones",
    ProductsSoldToday: 34,
    ProductsSoldThisWeek: 456, 
    revenueToday: "155.00 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
   {
    srno: 14,
    nameofuser: "Robert Johnson",
    ProductsSoldToday: 23,
    ProductsSoldThisWeek: 789, 
    revenueToday: "12.99 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 15,
    nameofuser: "William Davis",
    ProductsSoldToday: 99,
    ProductsSoldThisWeek: 123, 
    revenueToday: "6.78 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 16,
    nameofuser: "Michael Jones",
    ProductsSoldToday: 34,
    ProductsSoldThisWeek: 456, 
    revenueToday: "155.00 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 17,
    nameofuser: "Michael Jones",
    ProductsSoldToday: 34,
    ProductsSoldThisWeek: 456, 
    revenueToday: "155.00 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 18,
    nameofuser: "Michael Jones",
    ProductsSoldToday: 34,
    ProductsSoldThisWeek: 456, 
    revenueToday: "155.00 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
  {
    srno: 19,
    nameofuser: "Michael Jones",
    ProductsSoldToday: 34,
    ProductsSoldThisWeek: 456, 
    revenueToday: "155.00 د.إ",
    action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
  },
];



const Page = () => {
  const [filteredData, setFilteredData] = useState(data);
   const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

     const tableData = filteredData.map((item) => ({
    ...item
  }));

   const paginatedProducts = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
  setCurrentPage(1);
}, [filteredData]);
 return (
  <>
   {/* top  */}

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[42px]">
    {userStats.map((stat, i) => (
     <div key={i} className="flex gap-4 items-center">
  <Image src={stat.icon} alt={stat.title} width={50} height={50} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
  <div className="flex flex-col gap-[4px]">
    <div className="text-[#797A7C] text-sm sm:text-base font-normal">{stat.title}</div>
    <div className="text-[#D1D1D1] text-xl sm:text-2xl xl:text-4xl font-medium">{stat.count}</div>
  </div>
</div>
    ))}
   </div>

<div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 mt-10">
    {/* Left  */}
  <div className="bg-[#212121] p-4 sm:p-6 lg:p-[30px] rounded-xl">
      <WeeklyStatChart 
        selectedYear={2023} 
        data={[]} 
        onYearChange={(year: number) => console.log("Year changed to:", year)} 
      />
    </div>

    {/* Right  */}
  <div className="bg-[#212121] p-4 sm:p-6 rounded-xl">
     <h2 className="text-neutral-300 text-lg sm:text-xl font-medium mb-6">
      Top Performing Stores
    </h2>

      <div className="flex flex-col gap-4">
      {topStores.map((store, i) => (
        <div key={i} className="flex items-center gap-3 sm:gap-4">
  <Image 
  src={store.logo} 
  alt={store.name} 
  width={70} 
  height={50} 
   className="w-[70px] sm:w-[84px] h-auto"
    />
          <div className="flex flex-col">
                <div className="text-[#D1D1D1] text-base sm:text-lg font-medium">{store.name}</div>

     <div className="text-[#797A7C] text-xs sm:text-sm">{store.sales}</div>
  </div>
</div>

      ))}
     </div>
    </div>
   </div>


   {/* table  */}
<div>
      <CustomTable title="Orders" columns={columns} data={paginatedProducts} />
    </div>

  <div className="w-full flex justify-end mt-[20px]">
  <div className="flex justify-end">
    <StyledPagination
                  currentPage={currentPage}
                  totalItems={data.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={setCurrentPage}
                />
  </div>
</div>
  </>
 );
};
export default Page;
