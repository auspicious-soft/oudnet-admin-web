"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CustomTable from "@/app/(auth)/components/Table";
import { useRouter } from "next/navigation";
// import StyledPagination from "@/app/(auth)/components/Pagenation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getApi } from "@/utils/api";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import ReusableLoader from "@/components/ui/ReusableLoader";
import StyledPagination from "@/app/(auth)/components/Pagenation";

const userStats = [
  { title: "Products purchased", count: "19", icon: "/storeProduct.svg" },
  {
    title: "Amount spent so far",
    count: <>2102.50 د.إ</>,
    icon: "/wallet.svg",
  },
  { title: "Phone number", count: "5", icon: "/bags.svg" },
  { title: "Favourite Store", count: "Scented Treasures", icon: "/store.svg" },
];

type AlignType = "left" | "right";

interface Column {
  label: string;
  key: string;
  align?: AlignType;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const columns: Column[] = [
  { label: "Sr No.", key: "srno" },
  { label: "Purchased from", key: "Purchasedfrom" },
  { label: "Date of purchase", key: "Dateofpurchase" },
  { label: "Amount", key: "amount" },
  { label: "Action", key: "action", align: "right" },
];

const data = [
  {
    srno: 1,
    Purchasedfrom: "Oud Emporium",
    Dateofpurchase: "March 15, 2023",
    amount: "د.إ 45.67",
  },
  {
    srno: 2,
    Purchasedfrom: "The Fragrant Oasis",
    Dateofpurchase: "April 22, 2023",
    amount: "د.إ 82.34",
  },
  {
    srno: 3,
    Purchasedfrom: "Scented Treasures",
    Dateofpurchase: "May 30, 2023",
    amount: "د.إ 120.89",
  },
  {
    srno: 4,
    Purchasedfrom: "Oud Emporium",
    Dateofpurchase: "March 15, 2023",
    amount: "د.إ 45.67",
  },
  {
    srno: 5,
    Purchasedfrom: "The Fragrant Oasis",
    Dateofpurchase: "April 22, 2023",
    amount: "82.34",
  },
  {
    srno: 6,
    Purchasedfrom: "Scented Treasures",
    Dateofpurchase: "May 30, 2023",
    amount: "د.إ 120.89",
  },
  {
    srno: 7,
    Purchasedfrom: "Oud Haven",
    Dateofpurchase: "June 10, 2023",
    amount: "د.إ 210.50",
  },
  {
    srno: 8,
    Purchasedfrom: "Essence of Oud",
    Dateofpurchase: "July 5, 2023",
    amount: "د.إ 12.99",
  },
  {
    srno: 9,
    Purchasedfrom: "Oud Boutique",
    Dateofpurchase: "August 18, 2023",
    amount: "د.إ 6.78",
  },
  {
    srno: 10,
    Purchasedfrom: "Mystic Oud Shop",
    Dateofpurchase: "September 12, 2023",
    amount: "د.إ 155.00",
  },
];

const SingleUserRender = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [navigating, setNavigating] = useState(false);
  const [error, setError] = useState(null);
  const { data: session, status } = useSession();
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5; // or 10, depending on your design


  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (status !== "authenticated") return;
    if (!id) return;

    hasFetchedRef.current = true;

    const fetchUser = async () => {
      setLoading(true);
      const token = session?.accessToken;
      const role = session?.user?.role;

      try {
        const response = await getApi(`/api/admin/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            role: role,
          },
        });

        if (response.success) {
          toast.success("User fetched successfully");
          const data = response?.data?.data;
          setUserData(data);
        } else {
          toast.error("Failed to fetch user");
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
        toast.error("Failed to load user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, status]);

  console.log("User ID:", id);

  if (loading || navigating) {
    return <ReusableLoader />;
  }
  const viewProduct = () => {
    setNavigating(true);
    router.push(`/admin/user/singleUser/products?id=${id}`);
  };

  const handleNavigate = () => {
    setNavigating(true);
  router.push(`/admin/user/singleUser/products`);
};

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const paginatedData = data.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

const tableData = paginatedData.map((item) => ({
  ...item,
  action: (
    <Image
      src="/view.svg"
      alt="view"
      width={28}
      height={28}
      className="ml-auto block cursor-pointer"
      onClick={handleNavigate}
    />
  ),
}));

  return (
    <>
      <div className="flex justify-end">
        <div
          onClick={viewProduct}
          className="px-[16px] py-[8px] bg-[#EEC584] rounded-[30px] inline-flex justify-center items-center cursor-pointer"
        >
          <div className="justify-start text-black text-sm font-normal">
            View uploaded products
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
        {/* Image */}
       <div className="w-full h-full">
  <Image
    src="/UserImage.svg"
    height={330}
    width={330}
    alt="User"
    className="rounded-[20px] object-cover w-full h-auto max-w-[250px] md:max-w-full mx-auto"
  />
</div>

        <div className="grid grid-rows-[auto_auto] gap-y-[40px]">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 break-words">
  {/* First Name */}
  <div className="flex flex-col gap-2">
    <span className="text-[#797A7C] text-sm font-normal">First name</span>
    <span className="text-[#D1D1D1] text-base md:text-lg xl:text-xl font-medium">
      {userData?.firstName}
    </span>
  </div>

  {/* Last Name */}
  <div className="flex flex-col gap-2">
    <span className="text-[#797A7C] text-sm font-normal">Last name</span>
    <span className="text-[#D1D1D1] text-base md:text-lg xl:text-xl font-medium">
      {userData?.lastName}
    </span>
  </div>

  {/* Phone Number */}
  <div className="flex flex-col gap-2">
    <span className="text-[#797A7C] text-sm font-normal">Phone number</span>
    <span className="text-[#D1D1D1] text-base md:text-lg xl:text-xl font-medium">
      {userData?.phoneNumber}
    </span>
  </div>

  {/* Email Address */}
  <div className="flex flex-col gap-2">
    <span className="text-[#797A7C] text-sm font-normal">Email address</span>
    <span className="text-[#D1D1D1] text-base md:text-lg xl:text-xl font-medium break-all">
      {userData?.email}
    </span>
  </div>
</div>


          {/* Bottom - Cards */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-5">
            {userStats.map((stat, i) => (
              <div
                key={i}
                className="flex gap-[10px] items-center p-[10px] rounded-[10px] outline-1 outline-offset-[-1px] outline-[#333333] break-words"
              >
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  width={36}
                  height={36}
                />
                <div className="flex flex-col gap-[4px]">
                  <div className="text-[#797A7C] md:text-base text-sm font-normal">
                    {stat.title}
                  </div>
                  <div className="text-[#D1D1D1] xl:text-xl lg:text-md text-md font-medium">
                    {stat.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* table */}
      <div className="mt-[40px]">
        <CustomTable title="Recent Orders" columns={columns} data={tableData} />
      </div>

      <div className="w-full flex justify-end mt-[20px]">
        <div className="flex justify-end">
          <StyledPagination
    currentPage={currentPage}
    totalItems={data.length}
    itemsPerPage={itemsPerPage}
    onPageChange={(page) => setCurrentPage(page)}
  />
          </div>
      </div>
    </>
  );
};

export default SingleUserRender;
