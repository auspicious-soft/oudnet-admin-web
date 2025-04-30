// import Modal from '@/app/(auth)/components/Modal';
import StyledPagination from '@/app/(auth)/components/Pagenation';
import ProductGrid from '@/app/(auth)/components/Products';
import React from 'react'

const products = [
    {
        image: "/products.svg",
        name: "Enchanted Oud",
        price: "د.إ 91.99",
        rating: 4.5,
        reviews: 120,
    },
    {
        image: "/productTwo.svg",
        name: "Enchanted Oud",
        price: "د.إ 91.99",
        rating: 4.5,
        reviews: 120,
    },
    {
      image: "/productThree.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/productFour.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/productThree.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/productFive.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/productSix.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/productTwo.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/productSeven.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/productSix.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    
  ];

 const Page = () => {
    
  return (
    <>
    <ProductGrid products={products} showRating={true} />;

      <div className="w-full flex justify-end mt-[20px]">
         <div className="flex justify-end">
           <StyledPagination />
         </div>
       </div>
    </>
  )
}
export default Page;


