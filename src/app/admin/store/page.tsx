"use client";
import CustomTable from "@/app/(auth)/components/Table";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/header-top-bar/searchBar";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { getApi } from "@/utils/api";
import { useSession } from "next-auth/react";
// import StyledPagination from "@/app/(auth)/components/Pagenation";

type AlignType = "left" | "right";

interface Column {
 label: string;
 key: string;
 align?: AlignType;
}

const columns: Column[] = [
 { label: "Sr No.", key: "srno" },
 { label: "Name of Store", key: "nameofstore" },
 { label: "Store rating", key: "rating" },
 { label: "Products listed", key: "Productslisted" },
 { label: "Products sold", key: "Productssold" },
 { label: "Action", key: "action", align: "right" },
];

const data = [
 {
  srno: 1,
  nameofstore: "The Cozy Nook",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_1",
 },
 {
  srno: 2,
  nameofstore: "Whimsical Treasures",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_2",
 },
 {
  srno: 3,
  nameofstore: "Charming Finds",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_3",
 },
 {
  srno: 4,
  nameofstore: "The Rustic Corner",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_4",
 },
 {
  srno: 5,
  nameofstore: "Timeless Curiosities",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_5",
 },
 {
  srno: 6,
  nameofstore: "The Vintage Vault",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_6",
 },
 {
  srno: 7,
  nameofstore: "Artisan Alley",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_7",
 },
 {
  srno: 8,
  nameofstore: "The Cozy Nook",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_8",
 },
 {
  srno: 9,
  nameofstore: "Whimsical Treasures",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_9",
 },
 {
  srno: 10,
  nameofstore: "Charming Finds",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_10",
 },
 {
  srno: 11,
  nameofstore: "The Cozy Nook",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_11",
 },
 {
  srno: 12,
  nameofstore: "The Cozy Nook",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_12",
 },
 {
  srno: 13,
  nameofstore: "The Cozy Nook",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_13",
 },
 {
  srno: 14,
  nameofstore: "The Cozy Nook",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_14",
 },
 {
  srno: 15,
  nameofstore: "The Cozy Nook",
  rating: "4.5 stars",
  Productslisted: "732",
  Productssold: "732",
  id: "user_15",
 },
];

const Page = () => {
 const [storeData, setStoreData] = useState<any[]>([]);
 const [filteredData, setFilteredData] = useState<any[]>([]);
 const [page, setPage] = useState(1);
 const [totalStores, setTotalStores] = useState(0);
 const { data: session, status } = useSession();

 useEffect(() => {
  if (status !== "authenticated") return;

  const token = session?.accessToken;
  const role = session?.user?.role;

  const fetchStores = async () => {
   try {
    const res = await getApi(`/api/admin/stores`, {
     headers: {
      Authorization: `Bearer ${token}`,
      role: role,
     },
    });
    const apiData = res.data;
      setStoreData(apiData.stores);
      setFilteredData(apiData.stores);
      setTotalStores(apiData.total);
   } catch (err) {
    console.error("Failed to fetch stores", err);
   }
  };

  fetchStores();
 }, []);

 const handleSearch = (query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  if (!query) {
   setFilteredData(data);
   return;
  }
  const filtered = data.filter((item) => item.nameofstore.toLowerCase().includes(lowerCaseQuery));
  setFilteredData(filtered);
 };

 const handleViewClick = (userId: string) => {
  router.push(`/admin/store/storeManagement`);
 };

 const tableData = filteredData.map((item) => ({
  ...item,
  action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" onClick={() => handleViewClick(item.id)} />,
 }));
 const router = useRouter();

 const handleClick = () => {
  router.push("/admin/store/addStore");
 };
 return (
  <>
   <div className="flex justify-end gap-[10px]">
    <SearchBar onSearch={handleSearch} />

    <button onClick={handleClick} className="!px-4 !py-0 bg-[#EEC584] !rounded-[30px] h-10 flex justify-center items-center gap-2.5 cursor-pointer">
     <Plus size={16} />
     {/* <div className="justify-start text-black text-sm font-normal  ">Add New Store</div> */}
     <div className="cursor-pointer justify-start text-black text-sm font-normal">Add New Store</div>
    </button>
   </div>

   <div>
    <CustomTable columns={columns} data={tableData} />
   </div>

   <div className="w-full flex justify-end mt-[20px]">
    <div className="flex justify-end">{/* <StyledPagination /> */}</div>
   </div>
  </>
 );
};

export default Page;
