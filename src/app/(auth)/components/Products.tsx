"use client";
import Image from "next/image";

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
 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-[17px]">
   {products.map((product, index) => (
    <div key={index} className="max-w-fit">
     <div className="relative">
      <Image src={product.image} alt={`${product.name} Image`} width={245} height={245} className="object-cover rounded-[20px]" />
      <button  className="absolute cursor-pointer top-2.5 right-2.5">
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
 );
}










