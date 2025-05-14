"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import ReusableLoader from "@/components/ui/ReusableLoader";

export interface Promotion {
   _id?: string; 
 image: string;
 title: string;
 store: string ;
}

interface PromotionGridProps {
 promotions: Promotion[];
 onEdit?: (promo: Promotion) => void;
  onDelete?: (id: string) => void;
}

export default function PromotionGrid({ promotions,  onEdit, onDelete  }: PromotionGridProps) {
 const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDeletePromotion = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setLoading(true);
    if (selectedId && onDelete) {
      await onDelete(selectedId);
    }
    setIsDialogOpen(false);
    setSelectedId(null);
    setLoading(false);
  };

  if (loading) {
    return <ReusableLoader/>;
  }

 return (
  <>
     <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {promotions.map((promotion, index) => (
          <div
            key={index}
            className="max-w-fit cursor-pointer"
            onClick={() => onEdit?.(promotion)}
          >
            <div className="relative">
              <Image
                src={promotion.image}
                alt={`${promotion.title} Image`}
                width={432}
                height={167}
                className="w-[432px] h-[167px] object-cover rounded-[20px]"
              />
              <button
                className="absolute top-2.5 right-2.5"
                onClick={(e) => {
                  e.stopPropagation();
                   setSelectedId(promotion._id || null);
                  setIsDialogOpen(true);
                }}
              >
                <Image src="/delete.svg" alt="Delete" width={36} height={36} />
              </button>
            </div>
            <div className="mt-2 text-[#D1D1D1] text-base font-medium">
              {promotion.title}
            </div>
          </div>
        ))}
      </div>

   {/* modal  */}

   <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <AlertDialogContent className="bg-[#333333] border-none max-w-fit w-full sm:w-auto p-6 rounded-[30px] text-white">
     <AlertDialogHeader className="text-center items-center">
      <AlertDialogTitle className="text-2xl sm:text-xl font-normal font-newyork text-white">Delete Promotion</AlertDialogTitle>
      <AlertDialogDescription className="mt-1 text-sm sm:text-xs text-[#ABABAB]">Are you sure you want to delete this Prmotion?</AlertDialogDescription>
     </AlertDialogHeader>

     <AlertDialogFooter className="flex flex-col sm:flex-row gap-[10px] sm:gap-[6px] justify-center items-center mt-6 w-full">

      <Button variant="outline" className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[18px] bg-[#212121] hover:bg-[#212121] text-[#D1D1D1] hover:text-[#D1D1D1] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 cursor-pointer" onClick={() => setIsDialogOpen(false)}>
      Cancel
      </Button>

      <Button
       variant="destructive"
        className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[15px] bg-[#FF0000] text-[#D1D1D1] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 cursor-pointer"
        onClick={handleDeletePromotion}

        >
      Delete
      </Button>

     </AlertDialogFooter>

    </AlertDialogContent>
   </AlertDialog>
  </>
 );
}
