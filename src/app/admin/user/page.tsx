"use client";
import CustomTable from "@/app/(auth)/components/Table";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StyledPagination from "@/app/(auth)/components/Pagenation";
import SearchBar from "../components/header-top-bar/searchBar";
import { getApi } from "@/utils/api";
import { useSession } from 'next-auth/react';

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

const Page = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "authenticated") return; 
  
    const fetchUsers = async () => {
      try {
        const token = session?.accessToken;
        const role = session?.user?.role;
  
        if (!token || !role) {
          console.warn("Token or role is missing from session");
          return;
        }
  
        const response = await getApi(`/api/admin/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
            role: role,
          },
        });
  
        const fetchedUsers = response.data?.data?.users || [];
        setUsers(fetchedUsers);
        setTotalUsers(response.data?.data?.total || 0);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
  
    fetchUsers();
  }, [session, status, page, search]);

  const handleSearch = (query: string) => {
    setSearch(query);
    setPage(1); 
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleViewClick = (userId: string) => {
    router.push(`/admin/user/singleUser?id=${userId}`);
  };

  const tableData = users.map((user: any, index: number) => ({
    srno: (page - 1) * limit + index + 1,
    nameofuser: user.firstName + " " + user.lastName,
    email: user.email,
    lastpurchase: user.lastPurchaseDate || "N/A", 
    action: (
      <Image
        src="/view.svg"
        alt="view"
        width={28}
        height={28}
        className="ml-auto block cursor-pointer"
        onClick={() => handleViewClick(user._id)}
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
        <StyledPagination
          currentPage={page}
          totalItems={totalUsers}
          itemsPerPage={limit}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Page;
