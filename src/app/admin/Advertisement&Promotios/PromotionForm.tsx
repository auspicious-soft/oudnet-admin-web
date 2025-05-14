"use client";
import ReusableLoader from "@/components/ui/ReusableLoader";
import { getApi, postApi, putApi } from "@/utils/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type PromotionFormProps = {
  mode?: "add" | "edit";
  defaultValues?: {
    _id?: string;
    title?: string;
    store?: string;
    image?: string;
    storeId?: string;
  };
  onClose?: () => void;
};

type StoreItem = {
  _id: string;
  storeName: string;
  rating: string;
  Productslisted: string;
  Productssold: string;
};

const PromotionForm = ({ mode = "add", defaultValues, onClose }: PromotionFormProps) => {
  const [title, setTitle] = useState(defaultValues?.title || "");
  const [selectedStore, setSelectedStore] = useState(defaultValues?.store || "");
  const [image, setImage] = useState<string | null>(defaultValues?.image || null);
  const [storeData, setStoreData] = useState<StoreItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [storeLoading, setStoreLoading] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

   useEffect(() => {
  if (status !== "authenticated") return;

  const fetchStores = async () => {
    setStoreLoading(true);
    try {
      const token = session?.accessToken;
      const role = session?.user?.role;

      if (!token || !role) {
        console.warn("Token or role is missing from session");
        return;
      }

      const response = await getApi(`/api/admin/stores`, {
        headers: {
          Authorization: `Bearer ${token}`,
          role: role,
        },
      });

      const fetchedStores = response.data?.data?.stores || [];
      setStoreData(fetchedStores);

      // ✅ Set selected store in edit mode after storeData is available
      if (mode === "edit" && defaultValues?.storeId) {
        const match = fetchedStores.find(
          (store: StoreItem) => store._id === defaultValues.storeId
        );
        if (match) {
          setSelectedStore(match._id);
        }
      }

    } catch (error) {
      console.error("Failed to fetch stores:", error);
    }
    finally {
      setStoreLoading(false);
    }
  };

  fetchStores();
}, [session, status]);

  
const handleSubmit = async () => {
  setLoading(true);
  try {
    const token = session?.accessToken;
    const role = session?.user?.role;

    if (!token || !role) {
      console.warn("Missing auth credentials");
      return;
    }

    const dummyImageUrl = "https://dummyimage.com/600x400/000/fff&text=Uploaded+Image";

   const storeNamePayload = selectedStore;

    const payload = {
      title,
      storeName: storeNamePayload ,
      banner: dummyImageUrl,
    };

    const headers = {
      Authorization: `Bearer ${token}`,
      role,
    };

    let response;

    if (mode === "edit" && defaultValues?._id) {
      response = await putApi(`/api/admin/promotions/${defaultValues._id}`, payload, { headers });
    } else {
      response = await postApi("/api/admin/promotions", payload, { headers });
    }

    if (response?.success) {
      console.log(`Promotion ${mode === "edit" ? "updated" : "created"} successfully`);
      onClose?.();
    } else {
      console.error("API call failed", response);
    }
  } catch (err) {
    console.error("Failed to submit promotion:", err);
  }
  finally {
    setLoading(false);
  }
};

if (storeLoading) {
  return <ReusableLoader />;
}


  return (
    <div className="flex flex-col gap-7">
      {/* Image Upload */}
      <div className="flex flex-col gap-2.5">
        <img
          className="w-40 h-40 object-contain rounded-[20px] bg-zinc-900"
          src={image || "https://placehold.co/320x176"}
          alt="Preview"
        />
        <label className=" py-2 bg-orange-300 rounded-[30px] inline-flex justify-center items-center gap-2.5 cursor-pointer text-black text-sm font-normal font-['Outreque']">
          Upload Image
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
        </label>
      </div>

      <div className="flex flex-col gap-[5px]">
        <label className="text-zinc-500 text-sm font-['Outreque']">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className="h-11 px-5 py-4 bg-zinc-900 rounded-lg text-white text-sm font-['Aeonik_Pro_TRIAL'] placeholder-neutral-500 w-full"
        />
      </div>

      <div className="flex flex-col gap-[5px]">
        <label className="text-zinc-500 text-sm font-['Outreque']">Store Name</label>
        <select
          value={selectedStore}
          onChange={(e) => setSelectedStore(e.target.value)}
          className="h-11 bg-zinc-900 rounded-lg text-white text-sm font-['Aeonik_Pro_TRIAL'] w-full"
        >
          <option value="" disabled>Select Store</option>
          {storeData.map((store) => (
            <option key={store._id} value={store._id}>
              {store.storeName}
            </option>
          ))}
        </select>
      </div>

     <button
  onClick={handleSubmit}
  className="w-full py-4 bg-orange-300 rounded-3xl flex justify-center items-center gap-2.5"
>
  <span className="text-black text-sm font-['Outreque']">
    {mode === "edit" ? "Update" : "Send"}
  </span>
</button>

    </div>
  );
};

export default PromotionForm;
