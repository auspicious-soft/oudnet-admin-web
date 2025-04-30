"use client";
import CustomTable from "@/app/(auth)/components/Table";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import StyledPagination from "@/app/(auth)/components/Pagenation";
import SearchBar from "../components/header-top-bar/searchBar";

type AlignType = "left" | "right";

interface Column {
  label: string;
  key: string;
  align?: AlignType;
}

const columns: Column[] = [
  { label: "Sr No.", key: "srno" },
  { label: "Name of user", key: "nameofuser" },
  { label: "Email address", key: "email" },
  { label: "Date of last purchase", key: "lastpurchase" },
  { label: "Action", key: "action", align: "right" },
];

const data = [
  {
    srno: 1,
    nameofuser: "Isabella Anderson",
    email: "michael.kim@example.com",
    lastpurchase: "March 15, 2023",
    id: "user_1",
  },
  {
    srno: 2,
    nameofuser: "Sarah Williams",
    email: "emma.davis@example.com",
    lastpurchase: "April 22, 2023",
    id: "user_2",
  },
  {
    srno: 3,
    nameofuser: "Emily Brown",
    email: "william.lee@example.com",
    lastpurchase: "May 30, 2023",
    id: "user_3",
  },
  {
    srno: 4,
    nameofuser: "Richard Thompson",
    email: "noah.thompson@example.com",
    lastpurchase: "June 10, 2023",
    id: "user_4",
  },
  {
    srno: 5,
    nameofuser: "Robert Johnson",
    email: "jacob.davis@example.com",
    lastpurchase: "July 5, 2023",
    id: "user_5",
  },
  {
    srno: 6,
    nameofuser: "William Davis",
    email: "william.lee@example.com",
    lastpurchase: "July 5, 2023",
    id: "user_6",
  },
  {
    srno: 7,
    nameofuser: "Michael Jones",
    email: "emma.davis@example.com",
    lastpurchase: "May 30, 2023",
    id: "user_7",
  },
  {
    srno: 8,
    nameofuser: "Isabella Anderson",
    email: "william.lee@example.com",
    lastpurchase: "June 10, 2023",
    id: "user_8",
  },
  {
    srno: 9,
    nameofuser: "Sarah Williams",
    email: "emma.davis@example.com",
    lastpurchase: "July 5, 2023",
    id: "user_9",
  },
  {
    srno: 10,
    nameofuser: "Emily Brown",
    email: "william.lee@example.com",
    lastpurchase: "August 18, 2023",
    id: "user_10",
  },
  {
    srno: 11,
    nameofuser: "Richard Thompson",
    email: "ethan.brown@example.com",
    lastpurchase: "September 12, 2023",
    id: "user_11",
  },
  {
    srno: 12,
    nameofuser: "Robert Johnson",
    email: "emma.davis@example.com",
    lastpurchase: "March 15, 2023",
    id: "user_12",
  },
  {
    srno: 13,
    nameofuser: "Sarah Williams",
    email: "ethan.brown@example.com",
    lastpurchase: "April 22, 2023",
    id: "user_13",
  },
  {
    srno: 14,
    nameofuser: "Sarah Williams",
    email: "ethan.brown@example.com",
    lastpurchase: "August 18, 2023",
    id: "user_14",
  },
  {
    srno: 15,
    nameofuser: "Sarah Williams",
    email: "emma.davis@example.com",
    lastpurchase: "June 10, 2023",
    id: "user_15",
  },
];

const Page = () => {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    if (!query) {
      setFilteredData(data);
      return;
    }
    const filtered = data.filter(
      (item) =>
        item.nameofuser.toLowerCase().includes(lowerCaseQuery) ||
        item.email.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  };

  const handleViewClick = (userId: string) => {
    router.push(`/admin/user/singleUser?id=${userId}`);
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

  return (
    <>
      <div className="flex justify-end gap-[10px]">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div>
        <CustomTable columns={columns} data={tableData} />
      </div>

      <div className="w-full flex justify-end mt-[20px]">
        <div className="flex justify-end">
          <StyledPagination />
        </div>
      </div>
    </>
  );
};

export default Page;