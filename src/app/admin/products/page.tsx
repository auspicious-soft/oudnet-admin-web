"use client";
import CustomTable from "@/app/(auth)/components/Table";
import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";
import SearchBar from "../components/header-top-bar/searchBar";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import StyledPagination from "@/app/(auth)/components/Pagenation";

type AlignType = "left" | "right";

interface Column {
 label: string;
 key: string;
 align?: AlignType;
}

const columns: Column[] = [
 { label: "Sr No.", key: "srno" },
 { label: "Name of Product", key: "nameofproduct" },
 { label: "Name of Seller", key: "nameofseller" },
 { label: "Product Rating", key: "rating" },
 { label: "Price", key: "price" },
 { label: "Action", key: "action", align: "right" },
];

const data = [
 {
  srno: 1,
  nameofproduct: "The Cozy Nook",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_1",
 },
 {
  srno: 2,
  nameofproduct: "Whimsical Treasures",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_2",
 },
 {
  srno: 3,
  nameofproduct: "Charming Finds",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_3",
 },
 {
  srno: 4,
  nameofproduct: "The Rustic Corner",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_4",
 },
 {
  srno: 5,
  nameofproduct: "Timeless Curiosities",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_5",
 },
 {
  srno: 6,
  nameofproduct: "The Vintage Vault",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_6",
 },
 {
  srno: 7,
  nameofproduct: "Artisan Alley",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_7",
 },
 {
  srno: 8,
  nameofproduct: "The Cozy Nook",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_8",
 },
 {
  srno: 9,
  nameofproduct: "Whimsical Treasures",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_9",
 },
 {
  srno: 10,
  nameofproduct: "Charming Finds",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_10",
 },
 {
  srno: 11,
  nameofproduct: "The Cozy Nook",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_11",
 },
 {
  srno: 12,
  nameofproduct: "The Cozy Nook",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_12",
 },
 {
  srno: 13,
  nameofproduct: "The Cozy Nook",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_13",
 },
 {
  srno: 14,
  nameofproduct: "The Cozy Nook",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_14",
 },
 {
  srno: 15,
  nameofproduct: "The Cozy Nook",
  nameofseller: "Dummy User",
  rating: "4.5 stars",
  price: "732",
  id: "user_15",
},
];

const Page = () => {
  
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const router = useRouter();
  
const handleSearch = useCallback  ((query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  if (!query) {
    setFilteredData(data);
  } else {
    const filtered = data.filter((item) =>
      item.nameofproduct.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  }
  setCurrentPage(1);
}, []);


const handleViewClick = (userId: string) => {
router.push(`/admin/products/singleProduct`);
};


 const tableData = filteredData.map((item) => ({
    ...item,
    action: (
      <Image
        src="/view.svg"
        alt="view"
        width={28}
        height={28}
        className="ml-auto block cursor-pointer"
        onClick={() => handleViewClick(item.id)}
      />
    ),
  }));

 const paginatedProducts = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
 return (
  <>
   <div className="flex justify-end gap-[10px]">
    <SearchBar onSearch={handleSearch}   />

  
   </div>

   <div>
    <CustomTable columns={columns} data={paginatedProducts} />
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





