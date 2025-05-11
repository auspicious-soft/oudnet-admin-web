// 'use client';

// // import Modal from '@/app/(auth)/components/Modal';
// import ProductGrid from '@/app/(auth)/components/Products';
// import { getApi } from '@/utils/api';
// import { useSession } from 'next-auth/react';
// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';

// const products = [
//     {
//         id: "1",
//         image: "/products.svg",
//         name: "Enchanted Oud",
//         price: "د.إ 91.99",
//         rating: 4.5,
//         reviews: 120,
//     },
//     {
//         id: "2",
//         image: "/products.svg",
//         name: "Enchanted Oud",
//         price: "د.إ 91.99",
//         rating: 4.5,
//         reviews: 120,
//     },
//     {
//       id: "3",
//       image: "/products.svg",
//       name: "Enchanted Oud",
//       price: "د.إ 91.99",
//       rating: 4.5,
//       reviews: 120,
//     },
//     {
//       id: "4",
//       image: "/products.svg",
//       name: "Enchanted Oud",
//       price: "د.إ 91.99",
//       rating: 4.5,
//       reviews: 120,
//     },
//     {
//       id: "5",
//       image: "/products.svg",
//       name: "Enchanted Oud",
//       price: "د.إ 91.99",
//       rating: 4.5,
//       reviews: 120,
//     },
//     {
//       id: "6",
//       image: "/products.svg",
//       name: "Enchanted Oud",
//       price: "د.إ 91.99",
//       rating: 4.5,
//       reviews: 120,
//     },
//     {
//       id: "7",
//       image: "/products.svg",
//       name: "Enchanted Oud",
//       price: "د.إ 91.99",
//       rating: 4.5,
//       reviews: 120,
//     },
//     {
//       id: "8",
//       image: "/products.svg",
//       name: "Enchanted Oud",
//       price: "د.إ 91.99",
//       rating: 4.5,
//       reviews: 120,
//     },
//     {
//       id: "9",
//       image: "/products.svg",
//       name: "Enchanted Oud",
//       price: "د.إ 91.99",
//       rating: 4.5,
//       reviews: 120,
//     },
//     {
//       id: "10",
//       image: "/products.svg",
//       name: "Enchanted Oud",
//       price: "د.إ 91.99",
//       rating: 4.5,
//       reviews: 120,
//     },
    
//   ];

//  const Page = () => {
//     const searchParams = useSearchParams();
//   const userId = searchParams.get('id');
//   const [newProducts, setNewProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//     const { data: session, status } = useSession();
  
  
//   useEffect(() => {
//         if (status !== "authenticated") return; 

//     if (!userId) return;

//     const fetchProducts = async () => {
//         setLoading(true);
//       const token = session?.accessToken;
//       const role = session?.user?.role;
  
//       try {
//         const response = await getApi(`/api/admin/user/${userId}/products`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             role: role,
//           },
//         });
//         if (response.success) {
//           // setNewProducts(response.data.products);
//           console.log(response)
//         } else {
//           toast.error('Failed to fetch products');
//         }
//       } catch (error) {
//         console.error('Error fetching user products:', error);
//         toast.error('Error loading products');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [userId]);

//   return (
//     <>
//     <ProductGrid products={products} showRating={false} />
//     </>
//   )
// }
// export default Page;


import React, { Suspense } from 'react';
import ProductsClient from './ProductsClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsClient />
    </Suspense>
  );
}
