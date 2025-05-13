"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CustomTable from "@/app/(auth)/components/Table";
import { useRouter, useSearchParams } from "next/navigation";
import { Pencil } from "lucide-react";
// import StyledPagination from "@/app/(auth)/components/Pagenation";
import { AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { deleteApi, getApi } from "@/utils/api";
import { useSession } from "next-auth/react";

const userStats = [
 { title: "Total Products Listed", count: "1960", icon: "/storeProduct.svg" },
 { title: "Products Sold", count: " 925", icon: "/wallet.svg" },
 { title: "Most Sold Product", count: "Enchanted Oudh", icon: "/bags.svg" },
 { title: "Total Revenue Generated", count: "د.إ 12069.89", icon: "/store.svg" },
];

type AlignType = "left" | "right";

interface Column {
 label: string;
 key: string;
 align?: AlignType;
}

const columns: Column[] = [
 { label: "Sr No.", key: "srno" },
 { label: "Name of product", key: "Purchasedfrom" },
 { label: "Date of listing", key: "Dateofpurchase" },
 { label: "Product rating", key: "rating" },
 { label: "Price", key: "amount" },
 { label: "Action", key: "action", align: "right" },
];

interface Store {
 _id: string;
 storeName: string;
 ownerName: string;
 phoneNumber: string;
 email: string;
}

const SingleStore = () => {
 const router = useRouter();
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
const [products, setProducts] = useState([]);
 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const [singleStoreData, setSingleStoreData] = useState<Store | null>(null)
 const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { data: session, status } = useSession();

const handleClick = () =>{
    router.push('/admin/store/storeManagement/singleProduct');
}

  const hasFetchedRef = useRef(false)

    useEffect(() => {
      if (status !== "authenticated") return; 
      if (!id ) return;
    
      hasFetchedRef.current = true;
    
      const fetchStore = async () => {
        setLoading(true);
        const token = session?.accessToken;
        const role = session?.user?.role;
    
        try {
          const response = await getApi(`/api/admin/stores/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              role: role,
            },
          });
    
          if (response.success) {
            toast.success('Store fetched successfully');
            const data = response?.data?.data
            setSingleStoreData(data);
          } else {
            toast.error('Failed to fetch store');
          }
        } catch (err) {
          console.error('Failed to fetch store:', err);
          toast.error('Failed to load store data');
        } finally {
          setLoading(false);
        }
      };
    
      fetchStore();


      const fetchStoreProducts = async () => {
  try {
    const token = session?.accessToken;
    const role = session?.user?.role;

    const res = await getApi(`/api/admin/stores/${id}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
        role: role,
      },
    });

    if (res.success) {
      const data = res?.data?.data?.products
      console.log("data,",data)
      setProducts(data); // adjust this if nested under `data`
    } else {
      toast.error("Failed to fetch products");
    }
  } catch (error) {
    console.error("Product fetch failed:", error);
    toast.error("Failed to load store products");
  } finally {
    setLoading(false);
  }
};

fetchStoreProducts();


    }, [id, status]);
 


const formattedProducts = products?.map((product: any, index: number) => ({
  srno: index + 1,
  Purchasedfrom: product.name,
  Dateofpurchase: new Date(product.createdAt).toLocaleDateString("en-GB"), // or use "en-US" for MM/DD/YYYY
  rating: product.rating || "N/A", // Update if you start including ratings
  amount: `د.إ ${product.priceDetails?.[0]?.price?.toFixed(2) || "0.00"}`, // using first price
  action: (
    <Image
      src="/view.svg"
      alt="view"
      width={28}
      height={28}
      className="ml-auto block cursor-pointer"
      onClick={() =>
        router.push(
          `/admin/store/storeManagement/singleProduct?productId=${product._id}&id=${id}`
        )
      }
    />
  ),
}));


 const handleDeleteStore = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  event.preventDefault();
  if (!id || status !== "authenticated") return;

  try {
    const token = session?.accessToken;
    const role = session?.user?.role;

    const res = await deleteApi(`/api/admin/stores/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        role: role,
      },
    });

    if (res.success) {
      toast.success("Store deleted successfully");
      router.push(`/admin/store`);
    } else {
      toast.error("Failed to delete store");
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong");
  } finally {
    setIsDialogOpen(false);
  }
};


 return (
  <>
   <div className="flex justify-end gap-[10px]">

    <div className="flex justify-end gap-[10px]">
     <button className="!px-4 !py-0 bg-[#EEC584] !rounded-[30px] h-10 flex justify-center items-center gap-2.5 cursor-pointer">
      <Pencil size={16} />
      <div onClick={() => router.push(`/admin/store/storeManagement/editStore?id=${id}`)} className="justify-start text-black text-sm font-normal">Edit Store</div>
     </button>

     <button
      onClick={() => setIsDialogOpen(true)}
      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full outline-1 outline-offset-[-1px] outline-red-600 inline-flex justify-center items-center gap-2 sm:gap-2.5 cursor-pointer transition-colors hover:bg-red-50"
     >
      <div className="text-red-600 text-xs sm:text-sm font-normal">Delete Store</div>
     </button>

     {/* alert dialog */}
     <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogContent className="bg-[#333333] border-none max-w-fit w-full sm:w-auto p-6 rounded-[30px] text-white">
       <AlertDialogHeader className="text-center items-center">
        <AlertDialogTitle className="text-2xl sm:text-xl font-normal font-newyork text-white">Delete Store</AlertDialogTitle>
        <AlertDialogDescription className="mt-1 text-sm sm:text-xs text-[#ABABAB]">Are you sure you want to delete this store?</AlertDialogDescription>
       </AlertDialogHeader>

       <AlertDialogFooter className="flex flex-col sm:flex-row gap-[10px] sm:gap-[6px] justify-center items-center mt-6 w-full">
        <Button variant="outline" className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[18px] bg-[#212121] hover:bg-[#212121] text-[#D1D1D1] hover:text-[#D1D1D1] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 cursor-pointer" onClick={() => setIsDialogOpen(false)}>
         Cancel
        </Button>

        <Button variant="destructive" className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[15px] bg-[#FF0000] text-[#D1D1D1] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 cursor-pointer" onClick={handleDeleteStore}>
         Delete
        </Button>
       </AlertDialogFooter>
      </AlertDialogContent>
     </AlertDialog>
    </div>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-[270px_1fr] gap-6  ">
    {/* Image */}
    <div className="w-full h-full">
     <Image src="/oudFactoryCom.svg" height={330} width={330} alt="User" className="rounded-[20px] border border-zinc-800 object-cover w-full h-full" />
    </div>

    <div className="grid grid-rows-[auto_auto] gap-y-[40px] ">
     <div className="grid grid-cols-2 gap-y-[30px] break-words">
      {/* First Name */}
      <div className="flex flex-col gap-[8px]">
       <span className="justify-center text-[#797A7C] text-sm font-normal ">Name of store</span>
       <span className="justify-start text-[#D1D1D1] xl:text-xl lg:text-md text-md font-medium  ">{singleStoreData && singleStoreData.storeName}</span>
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-[8px]">
       <span className="justify-center text-[#797A7C] text-sm font-normal">Store Owner</span>
       <span className="justify-start text-[#D1D1D1] xl:text-xl lg:text-md text-md font-medium ">{singleStoreData && singleStoreData.ownerName}</span>
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-[8px]">
       <span className="justify-center text-[#797A7C] text-sm font-normal">Phone number</span>
       <span className="justify-start text-[#D1D1D1] xl:text-xl lg:text-md text-md font-medium ">{singleStoreData && singleStoreData.phoneNumber}</span>
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-[8px]">
       <span className="justify-center text-[#797A7C] text-sm font-normal">Email address</span>
       <span className="justify-start text-[#D1D1D1] xl:text-xl lg:text-md text-md font-medium ">{singleStoreData && singleStoreData.email}</span>
      </div>
     </div>

     {/* Bottom - Cards */}
     <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-5 ">
      {userStats.map((stat, i) => (
       <div key={i} className="flex gap-[10px] items-center  p-[10px] rounded-[10px]  outline-1 outline-offset-[-1px] outline-[#333333] break-words ">
        <Image src={stat.icon} alt={stat.title} width={36} height={36} />
        <div className="flex flex-col gap-[4px]">
         <div className="text-[#797A7C] md:text-base text-sm  font-normal ">{stat.title}</div>
         <div className="text-[#D1D1D1]  xl:text-xl lg:text-md text-md font-medium">{stat.count}</div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>

   {/* table  */}
   <div className="mt-[40px]">
    <CustomTable
     title="Products Listed"
     columns={columns}
     data={formattedProducts}
     action={
      <button onClick={() => router.push("/admin/store/storeManagement/products")} className="!px-4 !py-0 bg-[#EEC584] !rounded-[30px] h-10 flex justify-center items-center gap-2.5 cursor-pointer">
       <div className="justify-start text-black text-sm font-normal">View all products</div>
      </button>
     }
    />
   </div>

   <div className="w-full flex justify-end mt-[20px]">
    <div className="flex justify-end">
     {/* <StyledPagination /> */}
    </div>
   </div>
  </>
 );
};

export default SingleStore;
