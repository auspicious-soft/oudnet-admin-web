"use client";
import { useState } from "react";

type PromotionFormProps = {
  mode?: "add" | "edit";
  defaultValues?: {
    title?: string;
    store?: string;
    image?: string;
  };
};

const PromotionForm = ({ mode = "add", defaultValues }: PromotionFormProps) => {
  const [title, setTitle] = useState(defaultValues?.title || "");
  const [selectedStore, setSelectedStore] = useState(defaultValues?.store || "");
  const [stores] = useState(["Store A", "Store B", "Store C"]);
  const [image, setImage] = useState<string | null>(defaultValues?.image || null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  

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
          {stores.map((store) => (
            <option key={store} value={store}>
              {store}
            </option>
          ))}
        </select>
      </div>

      <button className="w-full py-4 bg-orange-300 rounded-3xl flex justify-center items-center gap-2.5">
      <span className="text-black text-sm font-['Outreque']">
      {mode === "edit" ? "Update" : "Send"}
        </span>
      </button>
    </div>
  );
};

export default PromotionForm;
