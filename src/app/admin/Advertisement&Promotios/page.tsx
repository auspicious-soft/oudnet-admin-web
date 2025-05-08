"use client";
// import Modal from '@/app/(auth)/components/Modal';
import PromotionGrid, { Promotion } from '@/app/(auth)/components/AdvertisementAndPromotions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Plus } from "lucide-react";
import DialogModal from '@/app/(auth)/components/DialogModal';
import PromotionForm from './PromotionForm';


const promotions = [
    {
        image: "/products.svg",
        title: "Enchanted Oud",
        store: "Oud Emporium",
    },
    {
        image: "/products.svg",
        title: "Enchanted Oud",
        store: "Oud Emporium",
    },
    {
      image: "/products.svg",
      title: "Enchanted Oud",
        store: "Oud Emporium",
    },
    {
      image: "/products.svg",
      title: "Enchanted Oud",
        store: "Oud Emporium",
    },
    {
      image: "/products.svg",
      title: "Enchanted Oud",
        store: "Oud Emporium",
    },
    {
      image: "/products.svg",
      title: "Enchanted Oud",
        store: "Oud Emporium",
    },
    {
      image: "/products.svg",
      title: "Enchanted Oud",
      store: "Oud Emporium",
    },
    {
      image: "/products.svg",
      title: "Enchanted Oud",
      store: "Oud Emporium",
    },
    {
      image: "/products.svg",
      title: "Enchanted Oud",
      store: "Oud Emporium",
    },
    {
      image: "/products.svg",
      title: "Enchanted Oud",
      store: "Oud Emporium",
    },
    
  ];
 
 const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState<"add" | "edit">("add");
    const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null);
   const router = useRouter();

    // const handleClick = () => {
    //     router.push('/admin/Advertisement&Promotios/addPromotion');
    //   };
    
    const onAdd = () => {
      setMode("add");
      setSelectedPromotion(null);
      setIsModalOpen(true);
    };
    
    const onEdit = (promotion: Promotion) => {
      setMode("edit");
      setSelectedPromotion(promotion); // correct!
      setIsModalOpen(true);
    };

  return (
    <>
  <div className="flex justify-end gap-[10px] mb-4">
        <button
          onClick={() => {
            setMode("add");
            setIsModalOpen(true);
          }}
          className="!px-4 !py-0 bg-[#EEC584] !rounded-[30px] h-10 flex justify-center items-center gap-2.5 cursor-pointer w-fit text-center"
        >
          <Plus size={16} />
          <span className="text-black text-sm font-normal">Add New Promotion</span>
        </button>
      </div>

    <PromotionGrid promotions={promotions} onEdit={onEdit} />;

    <DialogModal isOpen={isModalOpen}
     onClose={() => {
    setIsModalOpen(false);
    setMode("add"); // reset to default
    setSelectedPromotion(null); // optional, but recommended
  }}>
  <div className="text-white text-xl font-semibold mb-4">
    {mode === "edit" ? "Edit Promotion" : "Add Promotion"}
  </div>
  <PromotionForm mode={mode} defaultValues={selectedPromotion || {}} />
</DialogModal>

    </>
  )
}
export default Page;


