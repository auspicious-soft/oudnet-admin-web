"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
// import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

interface Product {
 image: string;
 name: string;
 price: string | number;
 rating?: number;
 reviews?: number;
}

interface ProductGridProps {
 products: Product[];
 showRating?: boolean;
}

export default function ProductGrid({ products, showRating = true }: ProductGridProps) {
 const [isDialogOpen, setIsDialogOpen] = useState(false);

//  function handleDeleteAccount(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
//   console.log("Account deletion confirmed");
//   setIsDialogOpen(false);
//  }
function handleDeleteAccount(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault(); // if needed
    console.log("Account deletion confirmed");
    setIsDialogOpen(false);
  }

 return (
  <>
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8  gap-[17px]">
    {products.map((product, index) => (
     <div key={index} className="max-w-fit">
      <div className="relative">
       <Image src={product.image} alt={`${product.name} Image`} width={245} height={245} className="object-cover rounded-[20px]" />

       <button onClick={() => setIsDialogOpen(true)} className="absolute cursor-pointer top-2.5 right-2.5">
        <Image src="/delete.svg" alt="Delete" width={36} height={36} />
       </button>
      </div>

      <div>
       <div className="mt-[10px] justify-center text-[#D1D1D1] text-base font-medium">{product.name}</div>
       <div className="flex justify-between">
        <div className="justify-center text-[#D1D1D1] text-base font-medium">{product.price}</div>

        {showRating && (
         <div className="flex justify-center items-center gap-1">
          <Image src="/star.svg" alt="star" height={8} width={8} />
          <div className="justify-center text-[#9A9A9A] text-[10px] font-normal">
           {product.rating} ({product.reviews} Reviews)
          </div>
         </div>
        )}
       </div>
      </div>
     </div>
    ))}
   </div>

   {/* modal  */}

   <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <AlertDialogContent className="bg-[#333333] border-none max-w-fit w-full sm:w-auto p-6 rounded-[30px] text-white">
     <AlertDialogHeader className="text-center items-center">
      <AlertDialogTitle className="text-2xl sm:text-xl font-normal font-newyork text-white">Delete Product</AlertDialogTitle>
      <AlertDialogDescription className="mt-1 text-sm sm:text-xs text-[#ABABAB]">Are you sure you want to delete this product?</AlertDialogDescription>
     </AlertDialogHeader>

     <AlertDialogFooter className="flex flex-col sm:flex-row gap-[10px] sm:gap-[6px] justify-center items-center mt-6 w-full">

      <Button variant="outline" className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[18px] bg-[#212121] hover:bg-[#212121] text-[#D1D1D1] hover:text-[#D1D1D1] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 cursor-pointer" onClick={() => setIsDialogOpen(false)}>
      Cancel
      </Button>

      <Button variant="destructive" className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[15px] bg-[#FF0000] text-[#D1D1D1] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 cursor-pointer" onClick={handleDeleteAccount}>
      Delete
      </Button>

     </AlertDialogFooter>

    </AlertDialogContent>
   </AlertDialog>
  </>
 );
}
