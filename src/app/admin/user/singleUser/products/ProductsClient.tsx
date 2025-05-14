"use client";

import ProductGrid from "@/app/(auth)/components/Products";
import { getApi } from "@/utils/api";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const products = [
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
    image: "/products.svg",
    name: "Enchanted Oud",
    price: "د.إ 91.99",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "3",
    image: "/products.svg",
    name: "Enchanted Oud",
    price: "د.إ 91.99",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "4",
    image: "/products.svg",
    name: "Enchanted Oud",
    price: "د.إ 91.99",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "5",
    image: "/products.svg",
    name: "Enchanted Oud",
    price: "د.إ 91.99",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "6",
    image: "/products.svg",
    name: "Enchanted Oud",
    price: "د.إ 91.99",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "7",
    image: "/products.svg",
    name: "Enchanted Oud",
    price: "د.إ 91.99",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "8",
    image: "/products.svg",
    name: "Enchanted Oud",
    price: "د.إ 91.99",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "9",
    image: "/products.svg",
    name: "Enchanted Oud",
    price: "د.إ 91.99",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "10",
    image: "/products.svg",
    name: "Enchanted Oud",
    price: "د.إ 91.99",
    rating: 4.5,
    reviews: 120,
  },
];

const ProductsClient = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");
  const [newProducts, setNewProducts] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [navigating, setNavigating] = useState(false);

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "authenticated" || !userId) return;
    setLoading(true);
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await getApi(`/api/admin/user/${userId}/products`, {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
            role: session?.user?.role,
          },
        });

        if (response.success) {
          setNewProducts(response.data.products);
        } else {
          toast.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching user products:", error);
        toast.error("Error loading products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [userId, status]);

  return <ProductGrid products={products} showRating={false} />;
};

export default ProductsClient;
