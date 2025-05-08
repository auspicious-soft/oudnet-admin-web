"use client";
import CustomTable from "@/app/(auth)/components/Table";
// import Image from "next/image";
import React, { useState } from "react";
import SearchBar from "../components/header-top-bar/searchBar";
import { useRouter } from "next/navigation";
// import { Plus } from "lucide-react";
// import StyledPagination from "@/app/(auth)/components/Pagenation";

type AlignType = "left" | "right";

interface Column {
 label: string;
 key: string;
 align?: AlignType;
}

const columns: Column[] = [
 { label: "Order Id.", key: "orderId" },
 { label: "Customer Name", key: "customerName" },
 { label: "Purchased From", key: "purchasedFrom" },
 { label: "Date Of Purchase", key: "dateOfPurchase" },
 { label: "Total Amount", key: "totalAmount" },
 { label: "Quantity", key: "quantity" },
];

const data = [
 {
  orderId: 1001,
  purchasedFrom: "The Cozy Nook",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_1",
  quantity: "1",
 },
 {
  orderId:  1002,
  purchasedFrom: "Whimsical Treasures",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_2",
  quantity: "2",
 },
 {
  orderId:  1003,
  purchasedFrom: "Charming Finds",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_3",
  quantity: "2",
 },
 {
  orderId:  1004,
  purchasedFrom: "The Rustic Corner",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_4",
  quantity: "2",
 },
 {
  orderId: 1005,
  purchasedFrom: "Timeless Curiosities",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_5",
  quantity: "2",
 },
 {
  orderId:  1006,
  purchasedFrom: "The Vintage Vault",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_6",
  quantity: "2",
 },
 {
  orderId: 1007,
  purchasedFrom: "Artisan Alley",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_7",
  quantity: "2",
 },
 {
  orderId:  1008,
  purchasedFrom: "The Cozy Nook",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_8",
  quantity: "2",
 },
 {
  orderId: 1009,
  purchasedFrom: "Whimsical Treasures",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_9",
  quantity: "2",
 },
 {
  orderId: 1010,
  purchasedFrom: "Charming Finds",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_10",
  quantity: "2",
 },
 {
  orderId: 1011,
  purchasedFrom: "The Cozy Nook",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_11",
  quantity: "2",
 },
 {
  orderId: 1012,
  purchasedFrom: "The Cozy Nook",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_12",
  quantity: "2",
 },
 {
  orderId: 1013,
  purchasedFrom: "The Cozy Nook",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_13",
  quantity: "2",
 },
 {
  orderId: 1014,
  purchasedFrom: "The Cozy Nook",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_14",
  quantity: "2",
 },
 {
  orderId: 1015,
  purchasedFrom: "The Cozy Nook",
  customerName: "Dummy User",
  dateOfPurchase: "March 15, 2023",
  totalAmount: "732",
  id: "user_15",
  quantity: "2",
 },
];

const Page = () => {

const [filteredData, setFilteredData] = useState(data); // State for filtered data
const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    if (!query) {
      setFilteredData(data);
      return;
    }
    const filtered = data.filter((item) =>
      item.purchasedFrom.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  };



const handleViewClick = (userId: string) => {
console.log("clicked Action")
};


 const tableData = filteredData.map((item) => ({
    ...item
  }));
  const router = useRouter();


 return (
  <>
   <div className="flex justify-end gap-[10px]">
    <SearchBar onSearch={handleSearch}  />

  
   </div>

   <div>
    <CustomTable columns={columns} data={tableData} />
   </div>

  
   <div className="w-full flex justify-end mt-[20px]">
  <div className="flex justify-end">
    {/* <StyledPagination /> */}
  </div>
</div>

  </>
 );
};

export default Page;





