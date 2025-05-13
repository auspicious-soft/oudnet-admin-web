"use client";
import { getApi, putApi } from "@/utils/api";
import { Pencil } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";


const EditStore = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null); // ✅ Type properly
  const [previewImage, setPreviewImage] = useState<string | null>(
    "/oudFactoryCom.svg"
  );

  const [storeData, setStoreData] = useState({
    storeName: "",
    ownerName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
 const router = useRouter();

    const hasFetchedRef = useRef(false)

      useEffect(() => {
    if (status !== "authenticated" || !id || hasFetchedRef.current) return;

    hasFetchedRef.current = true;

    const fetchStore = async () => {
      setLoading(true);
      try {
        const response = await getApi(`/api/admin/stores/${id}`, {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
            role: session?.user?.role,
          },
        });

        if (response.success) {
          const data = response?.data?.data;
          setStoreData({
            storeName: data?.storeName || "",
            ownerName: data?.ownerName || "",
            phone: data?.phoneNumber || "",
            email: data?.email || "",
            password: "",
            confirmPassword: "",
          });
          toast.success("Store fetched successfully");
        } else {
          toast.error("Failed to fetch store");
        }
      } catch (error) {
        console.error("Error fetching store:", error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchStore();
  }, [id, session, status]);
     
  
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStoreData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSave = async () => {
    const { password, confirmPassword, ...rest } = storeData;

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const response = await putApi(`/api/admin/stores/${id}`, {
        ...rest,
        ...(password ? { password } : {}),
      }, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
          role: session?.user?.role,
        },
      });

      if (response.success) {
        toast.success("Store updated successfully");
        router.push('/admin/stores')
      } else {
        
        toast.error("Failed to update store");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update store");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {/* Image */}
        <div className="relative w-full h-[330px] border border-zinc-800 rounded-[20px] flex items-center justify-center overflow-hidden">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <div
            className="absolute top-2 right-2 bg-white rounded-full h-9 w-9 flex justify-center items-center cursor-pointer shadow"
            onClick={handlePencilClick}
          >
            <Pencil />
          </div>

          {previewImage ? (
            <Image
              src={previewImage}
              alt="Preview"
              width={330}
              height={330}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-sm text-zinc-500">No image selected</span>
          )}
        </div>

        {/* Form Fields - Left */}
        <div className="grid grid-cols-1 gap-y-4 md:col-span-1 self-start">
          <div className="max-h-fit">
            <label className="text-[#797A7C] text-sm mb-1 block">
              Store Name
            </label>
            <input
              name="storeName"
              placeholder="Enchanted Fragrances"
              className="w-full text-white py-[14px] px-5 bg-neutral-800 rounded-lg"
              value={storeData.storeName}
              onChange={handleChange}
            />
          </div>

          <div className="max-h-fit">
            <label className="text-[#797A7C] text-sm mb-1 block">
              Phone Number
            </label>
            <input
              name="phone"
              placeholder="+1 254 2547 2369"
              className="w-full bg-neutral-800 text-white rounded-md p-3"
              value={storeData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="max-h-fit">
            <label className="text-[#797A7C] text-sm mb-1 block">
              New Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="........"
              className="w-full bg-neutral-800 text-white rounded-md p-3"
              value={storeData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Form Fields - Right */}
        <div className="grid grid-cols-1 gap-y-4 md:col-span-1 self-start">
          <div className="max-h-fit">
            <label className="text-[#797A7C] text-sm mb-1 block">
              Owner Name
            </label>
            <input
              name="ownerName"
              placeholder="Richard Thompson"
              className="w-full text-white py-[14px] px-5 bg-neutral-800 rounded-lg"
              value={storeData.ownerName}
              onChange={handleChange}
            />
          </div>

          <div className="max-h-fit">
            <label className="text-[#797A7C] text-sm mb-1 block">
              Email Address
            </label>
            <input
              name="email"
              placeholder="noah.thompson@example.com"
              className="w-full bg-neutral-800 text-white rounded-md p-3"
              value={storeData.email}
              onChange={handleChange}
            />
          </div>

          <div className="max-h-fit">
            <label className="text-[#797A7C] text-sm mb-1 block">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="........"
              className="w-full bg-neutral-800 text-white rounded-md p-3"
              value={storeData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-10">
        <button
          className="w-full py-4 bg-[#EEC584] text-black rounded-3xl text-lg font-medium cursor-pointer"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditStore;
