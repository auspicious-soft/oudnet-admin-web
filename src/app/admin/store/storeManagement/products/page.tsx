"use client";

import React, { useEffect, useState } from "react";
import StyledPagination from "@/app/(auth)/components/Pagenation";
import { getApi } from "@/utils/api";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import ReusableLoader from "@/components/ui/ReusableLoader";
import StoreProductGrid from "@/app/(auth)/components/StoreProducts";

const productss = [
    {
      id: "1",
        image: "/products.svg",
        name: "Enchanted Oud",
        price: "د.إ 91.99",
        rating: 4.5,
        reviews: 120,
    },
    {
      id: "2",
        image: "/productTwo.svg",
        name: "Enchanted Oud",
        price: "د.إ 91.99",
        rating: 4.5,
        reviews: 120,
    },
    {
      id: "3",
      image: "/productThree.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: "4",
      image: "/productFour.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: "5",
      image: "/productThree.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: "6",
      image: "/productFive.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: "7",
      image: "/productSix.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: "8",
      image: "/productTwo.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: "9",
      image: "/productSeven.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: "10",
      image: "/productSix.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    
  ];

 const Page = () => {
      const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();


  
  const fetchProducts = async () => {
    try {
      setLoading(true);
       const token = session?.accessToken;
      const role = session?.user?.role;

      if (!token || !role) {
        console.warn("Token or role is missing from session");
        return;
      }
      const res = await getApi("/api/admin/store-products", {
        headers: {
          Authorization: `Bearer ${token}`,
          role:role,
        },
      }); 
      if (res?.success) {
        const formatted = res?.data?.data?.products.map((p: any) => ({
          id: p._id,
          image: "/products.svg",
          name: p.name,
          price: `د.إ ${p.priceDetails?.[0]?.price?.toFixed(2) || "0.00"}`,
          rating: p.rating || "NA",
          reviews:p.reviews || "NA", 
        }));

        setProducts(formatted);
      } else {
        toast.error("Failed to fetch products");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if(loading){
    return <ReusableLoader/>
  }
  return (
    <>
    <StoreProductGrid products={products} showRating={true} />

      <div className="w-full flex justify-end mt-[20px]">
         <div className="flex justify-end">
           {/* <StyledPagination /> */}
         </div>
       </div>
    </>
  )
}
export default Page;


