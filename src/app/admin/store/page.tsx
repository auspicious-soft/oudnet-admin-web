"use client";
import CustomTable from "@/app/(auth)/components/Table";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/header-top-bar/searchBar";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { getApi } from "@/utils/api";
import ReusableLoader from "@/components/ui/ReusableLoader";
import { useTransition } from "react";
import StyledPagination from "@/app/(auth)/components/Pagenation";


type AlignType = "left" | "right";

interface Column {
  label: string;
  key: string;
  align?: AlignType;
}

const columns: Column[] = [
  { label: "Sr No.", key: "srno" },
  { label: "Name of Store", key: "storeName" },
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

type StoreItem = {
  _id: string;
  storeName: string;
  rating: string;
  Productslisted: string;
  Productssold: string;
};

const Page = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [storeData, setStoreData] = useState<StoreItem[]>([]);
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [navigating, setNavigating] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const router = useRouter();

const handleSearch = (query: string) => {
  setPage(1);
  setSearchQuery(query);
};

  const handleViewClick = (id: string) => {
    setNavigating(true);
    router.push(`/admin/store/storeManagement?id=${id}`);
  };

  useEffect(() => {
    if (status != "authenticated") return;

    const fetchStores = async () => {
      setLoading(true);
      try {
        const token = session?.accessToken;
        const role = session?.user?.role;

        if (!token || !role) {
          console.warn("Token or role is missing from session");
          return;
        }

         const response = await getApi(`/api/admin/stores`, {
        headers: {
          Authorization: `Bearer ${token}`,
          role,
        },
        params: {
          page,
          limit,
          description: searchQuery,
        },
      });
        const fetchedStores = response.data?.data?.stores || [];
        const total =  response?.data?.data.total;
        const resLimit = response?.data?.data?.limit;
        const resPage  = response?.data?.data?.page;
        setStoreData(fetchedStores);
         setTotalCount(total);
         setLimit(resLimit);
          setPage(resPage);
      } catch (error) {
        console.error("Failed to fetch stores:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, [session, status, page, limit, searchQuery]);

    const tableData = storeData.map((item: any, index: number) => ({
    srno: (page - 1) * limit + index + 1,
    ...item,
    rating: item.rating || "NA",
    Productslisted: item.Productslisted || "NA",
    Productssold: item.Productssold || "NA",
    action: (
      <Image
        src="/view.svg"
        alt="view"
        width={28}
        height={28}
        className="ml-auto block cursor-pointer"
        onClick={() => handleViewClick(item._id)}
      />
    ),
  }));

    const totalPages = Math.ceil(totalCount / limit);


  const handleClick = () => {
    startTransition(() => {
      router.push("/admin/store/addStore");
    });
  };

  if (loading || navigating || isPending) {
    return <ReusableLoader />;
  }
  return (
    <>
      <div className="flex justify-end gap-[10px]">
        <SearchBar onSearch={handleSearch} search={searchQuery} />

        <button
          onClick={handleClick}
          className="!px-4 !py-0 bg-[#EEC584] !rounded-[30px] h-10 flex justify-center items-center gap-2.5 cursor-pointer"
        >
          <Plus size={16} />
          {/* <div className="justify-start text-black text-sm font-normal  ">Add New Store</div> */}
          <div className="cursor-pointer justify-start text-black text-sm font-normal">
            Add New Store
          </div>
        </button>
      </div>

      <div>
        <CustomTable columns={columns} data={tableData} />
      </div>

      <div className="w-full flex justify-end mt-[20px]">
        <div className="flex justify-end">
          <StyledPagination currentPage={page} totalItems={totalPages} onPageChange={setPage} itemsPerPage={limit}
 />
          </div>
      </div>
    </>
  );
};

export default Page;
