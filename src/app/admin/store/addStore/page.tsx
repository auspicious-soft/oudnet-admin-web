"use client";
import { postApi } from "@/utils/api";
import { Pencil } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function CreateStoreForm() {
 const fileInputRef = useRef<HTMLInputElement | null>(null);
 const [previewImage, setPreviewImage] = useState<string | null>(null);
 const [loading, setLoading] = useState(true);
 const { data: session, status } = useSession();

 const router = useRouter();
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

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setStoreData((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (status !== "authenticated") return;

  if (storeData.password !== storeData.confirmPassword) {
   console.error("Passwords do not match");
   return;
  }
  setLoading(true);
  const token = session?.accessToken;
  const role = session?.user?.role;

  try {
   const payload = {
    storeName: storeData.storeName,
    ownerName: storeData.ownerName,
    phoneNumber: storeData.phone,
    email: storeData.email,
    password: storeData.password,
   };

   const response = await postApi("/api/admin/stores", payload, {
    headers: {
     Authorization: `Bearer ${token}`,
     role: role,
    },
   });
   if (response.success) {
    console.log("Store created successfully");
    setStoreData({
     storeName: "",
     ownerName: "",
     phone: "",
     email: "",
     password: "",
     confirmPassword: "",
    });
      router.push("/admin/store");
   } else {
    console.log("Failed to create store");
   }
  } catch (error) {
   console.error("Store creation error:", error);
   toast.error("Something went wrong while creating the store");
  }
  setLoading(false);
 };

 return (
  <>
   <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start ">
     <div className="relative w-full h-[350px] border border-zinc-800 rounded-[20px] flex items-center justify-center overflow-hidden">
      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
      <div className="absolute top-2 right-2 bg-white rounded-full h-9 w-9 flex justify-center items-center cursor-pointer shadow" onClick={handlePencilClick}>
       <Pencil />
      </div>

    {previewImage ? (
  <Image
    src={previewImage}
    alt="Preview"
    className="object-fit"
    fill 
  />
) : (
  <span className="text-sm text-zinc-500">No image selected</span>
)}
     </div>

     <div className="grid grid-cols-1 gap-y-4 md:col-span-1 self-start ">
      <div className="max-h-fit">
       <label className="text-[#797A7C] text-sm mb-1 block">Store Name</label>
       <input name="storeName" placeholder="Enchanted Fragrances" className="w-full text-white py-[14px] px-5 bg-neutral-800 rounded-lg" value={storeData.storeName} onChange={handleInputChange} />
      </div>

      <div className="max-h-fit">
       <label className="text-[#797A7C] text-sm mb-1 block">Phone Number</label>
       <input name="phone" placeholder="Richard Thompson" className="w-full bg-neutral-800 text-white rounded-md p-3" value={storeData.phone} onChange={handleInputChange} />
      </div>

      <div className="max-h-fit">
       <label className="text-[#797A7C] text-sm mb-1 block">Create Password</label>
       <input name="password" placeholder="********" type="password" className="w-full bg-neutral-800 text-white rounded-md p-3" value={storeData.password} onChange={handleInputChange} />
      </div>
     </div>

     <div className="grid grid-cols-1 gap-y-4 md:col-span-1 self-start ">
      <div className="max-h-fit">
       <label className="text-[#797A7C] text-sm mb-1 block">Owner Name</label>
       <input name="ownerName" placeholder="Richard Thompson" className="w-full text-white py-[14px] px-5 bg-neutral-800 rounded-lg" value={storeData.ownerName} onChange={handleInputChange} />
      </div>

      <div className="max-h-fit">
       <label className="text-[#797A7C] text-sm mb-1 block">Email Address</label>
       <input name="email" placeholder="noah.thompson@example.com" className="w-full bg-neutral-800 text-white rounded-md p-3" value={storeData.email} onChange={handleInputChange} />
      </div>

      <div className="max-h-fit">
       <label className="text-[#797A7C] text-sm mb-1 block">Confirm Password</label>
       <input name="confirmPassword" placeholder="********" type="password" className="w-full bg-neutral-800 text-white rounded-md p-3" value={storeData.confirmPassword} onChange={handleInputChange} />
      </div>
     </div>
    </div>

    <div className="mt-10">
     <button type="submit" className="w-full py-4 bg-[#EEC584] text-black rounded-3xl text-lg font-medium cursor-pointer">
      Create Store
     </button>
    </div>
   </form>
  </>
 );
}
