"use client";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function CreateStoreForm() {
 const fileInputRef = useRef<HTMLInputElement | null>(null); // ✅ Type properly
 const [previewImage, setPreviewImage] = useState<string | null>("/oudFactoryCom.svg");

 const [storeData, setStoreData] = useState({
  storeName: "",
  ownerName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
 });

 const handlePencilClick = () => {
  fileInputRef.current?.click();
 };

 const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
   const imageUrl = URL.createObjectURL(file);
   setPreviewImage(imageUrl);
   console.log("Selected file:", file);
  }
 };

 return (
  <>
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
    {/* Image */}
    <div className="relative w-full h-[330px] border border-zinc-800 rounded-[20px] flex items-center justify-center overflow-hidden">
     <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
     <div className="absolute top-2 right-2 bg-white rounded-full h-9 w-9 flex justify-center items-center cursor-pointer shadow" onClick={handlePencilClick}>
      <Pencil />
     </div>

     {previewImage ? <Image src={previewImage} alt="Preview" width={330} height={330} className="object-cover w-full h-full" /> : <span className="text-sm text-zinc-500">No image selected</span>}
    </div>

    {/* Form Fields */}
    <div className="grid grid-cols-1 gap-y-4 md:col-span-1 self-start">
     <div className="max-h-fit">
      <label className="text-[#797A7C] text-sm mb-1 block">Store Name</label>
      <input placeholder="Enchanted Fragrances" className="w-full text-white py-[14px] px-5 bg-neutral-800 rounded-lg" value={storeData.storeName} onChange={(e) => setStoreData({ ...storeData, storeName: e.target.value })} />
     </div>

     <div className="max-h-fit">
      <label className="text-[#797A7C] text-sm mb-1 block">Phone Number</label>
      <input placeholder="+1 254 2547 2369" className="w-full bg-neutral-800 text-white rounded-md p-3" value={storeData.phone} onChange={(e) => setStoreData({ ...storeData, phone: e.target.value })} />
     </div>

     <div className="max-h-fit">
      <label className="text-[#797A7C] text-sm mb-1 block">New Password</label>
      <input placeholder="........" type="password" className="w-full bg-neutral-800 text-white rounded-md p-3" value={storeData.password} onChange={(e) => setStoreData({ ...storeData, password: e.target.value })} />
     </div>
    </div>

    <div className="grid grid-cols-1 gap-y-4 md:col-span-1 self-start">
     <div className="max-h-fit">
      <label className="text-[#797A7C] text-sm mb-1 block">Owner Name</label>
      <input placeholder="Richard Thompson" className="w-full text-white py-[14px] px-5 bg-neutral-800 rounded-lg" value={storeData.ownerName} onChange={(e) => setStoreData({ ...storeData, ownerName: e.target.value })} />
     </div>

     <div className="max-h-fit">
      <label className="text-[#797A7C] text-sm mb-1 block">Email Address</label>
      <input placeholder="noah.thompson@example.com" className="w-full bg-neutral-800 text-white rounded-md p-3" value={storeData.email} onChange={(e) => setStoreData({ ...storeData, email: e.target.value })} />
     </div>

     <div className="max-h-fit">
      <label className="text-[#797A7C] text-sm mb-1 block">Confirm Password</label>
      <input placeholder="........" type="password" className="w-full bg-neutral-800 text-white rounded-md p-3" value={storeData.confirmPassword} onChange={(e) => setStoreData({ ...storeData, confirmPassword: e.target.value })} />
     </div>
    </div>
   </div>

   {/* Submit Button */}
   <div className="mt-10">
    <button className="w-full py-4 bg-[#EEC584] text-black rounded-3xl text-lg font-medium cursor-pointer">Save</button>
   </div>
  </>
 );
}
