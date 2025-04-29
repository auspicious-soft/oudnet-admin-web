// import Modal from '@/app/(auth)/components/Modal';
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
        image: "/products.svg",
        name: "Enchanted Oud",
        price: "د.إ 91.99",
        rating: 4.5,
        reviews: 120,
    },
    {
      image: "/products.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/products.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/products.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/products.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/products.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/products.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/products.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/products.svg",
      name: "Enchanted Oud",
      price: "د.إ 91.99",
      rating: 4.5,
      reviews: 120,
    },
    
  ];

 const Page = () => {
    
  return (
    <>
    <ProductGrid products={products} showRating={false} />;
    {/* <Modal/> */}
    </>
  )
}
export default Page;


