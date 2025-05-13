"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { deleteApi, getApi } from "@/utils/api";

type PriceDetail = {
  _id: string;
  price: number;
  packSize: string;
  numberOfUnits: number;
  unitsSold: number;
};

type LongDescription = {
  _id: string;
  heading: string;
  description: string;
};

type AdditionalSection = {
  _id: string;
  heading: string;
  subSections: {
    _id: string;
    subHeading: string;
    description: string;
  }[];
};

type ProductType = {
  _id: string;
  name: string;
  shortDescription: string;
  unitsSold: number;
  image: string[];
  priceDetails: PriceDetail[];
  longDescriptions: LongDescription[];
  additionalSections: AdditionalSection[];
};

const SingleProduct = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("productId");
  const storeId = searchParams.get("id");
  const [productData, setProductData] = useState<ProductType | null>(null);
  const [selectedImage, setSelectedImage] = useState("/products.svg");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenn, setIsOpenn] = useState(true);
  const { data: session, status } = useSession();
  const hasFetchedRef = useRef(false);
  const router = useRouter();

  const toggleDescription = () => setIsOpen(!isOpen);
  const toggleDescriptionn = () => setIsOpenn(!isOpenn);

  const packSizes = productData?.priceDetails?.map(
    (detail) => detail.packSize
  ) || ["20g", "50g", "100g", "200g"];
  const reviews = [
    {
      text: "A single ember awakens centuries of tradition, as the first wisp of smoke carries you into the heart of the East. as the first wisp of smoke carries you into the heart of the East.",
      name: "Ella Lewis",
      userId: "#156778",
    },
    {
      text: "A single ember awakens centuries of tradition, as the first wisp of smoke carries you into the heart of the East. as the first wisp of smoke carries you into the heart of the East.",
      name: "Christopher White",
      userId: "#156778",
    },
    {
      text: "A single ember awakens centuries of tradition, as the first wisp of smoke carries you into the heart of the East. as the first wisp of smoke carries you into the heart of the East.",
      name: "Isabella Anderson",
      userId: "#156778",
    },
    {
      text: "A single ember awakens centuries of tradition, as the first wisp of smoke carries you into the heart of the East. as the first wisp of smoke carries you into the heart of the East.",
      name: "Mia Taylor",
      userId: "#156778",
    },
    {
      text: "A single ember awakens centuries of tradition, as the first wisp of smoke carries you into the heart of the East. as the first wisp of smoke carries you into the heart of the East.",
      name: "Isabella Anderson",
      userId: "#156778",
    },
  ];
  useEffect(() => {
    if (status !== "authenticated") return;
    if (!id || hasFetchedRef.current) return;

    hasFetchedRef.current = true;

    const fetchProduct = async () => {
      setLoading(true);
      const token = session?.accessToken;
      const role = session?.user?.role;

      try {
        const response = await getApi(`/api/admin/store-products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            role: role,
          },
        });

        if (response.success) {
          toast.success("Product fetched successfully");
          const data = response?.data?.data;
          setProductData(data);
        } else {
          toast.error("Failed to fetch product");
        }
      } catch (err) {
        console.error("Failed to fetch product:", err);
        toast.error("Failed to load product data");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, status]);

  const handleDelete = async () => {
    if (!id || !storeId) {
      console.error("Missing required IDs in query");
      return;
    }

    setLoading(true);
    const token = session?.accessToken;
    const role = session?.user?.role;

    try {
      const response = await deleteApi(`/api/admin/store-products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          role: role,
        },
      });

      if (response.success) {
        toast.success("Product deleted successfully");
        router.push(`/admin/store/storeManagement?id=${storeId}`);
      } else {
        toast.error("Failed to delete product");
      }
    } catch (err) {
      console.error("Error deleting product:", err);
      toast.error("Something went wrong");
    } finally {
      setIsDialogOpen(false);
      router.push(`/admin/store/storeManagement?id=${storeId}`);
    }
  };

  return (
    <div className="flex flex-col w-full md:p-6 p-1 text-white gap-6">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <Image
            src={selectedImage}
            alt="Product"
            height={330}
            width={330}
            className="object-cover rounded-[20px] transition-all duration-300 ease-in-out"
            key={selectedImage}
          />

          <div className="flex mt-2 space-x-2">
            {["/products.svg", "/productFour.svg", "/singleProduct.svg"].map(
              (img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  height={73}
                  width={73}
                  onClick={() => setSelectedImage(img)}
                  className={`object-cover rounded-[10px] cursor-pointer transition-transform duration-300 hover:scale-105 ${
                    selectedImage === img ? "ring-2 ring-orange-300" : ""
                  }`}
                />
              )
            )}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-end sm:mt-[20px] lg:mt-[0px]">
            <button
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full outline-1 outline-offset-[-1px] outline-red-600 inline-flex justify-center items-center gap-2 sm:gap-2.5 cursor-pointer transition-colors hover:bg-red-50"
              onClick={() => setIsDialogOpen(true)}
            >
              <div className="text-red-600 text-xs sm:text-sm font-normal">
                Delete Product
              </div>
            </button>
          </div>

          <h1 className="mt-5 text-[#D1D1D1] text-3xl font-medium">
            {productData && productData.name}
          </h1>
          <p className="mt-3 text-[#AAAAAA] text-sm font-normal">
            {productData?.shortDescription}
          </p>
          {productData?.priceDetails?.[0]?.price && (
            <p className="mt-5 text-[#EEC584] text-2xl font-medium">
              ${productData?.priceDetails?.[activeIndex]?.price ?? "N/A"}
            </p>
          )}
          <div className=" mt-4 flex flex-col gap-3.5">
            <div className="text-neutral-300 text-base font-medium leading-tight">
              Packs Available
            </div>
            <div className="flex gap-2.5">
              {packSizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`p-2.5 rounded-lg outline outline-offset-[-1px] outline-neutral-600 flex items-center gap-1.5 ${
                    activeIndex === index ? "bg-orange-300" : "bg-neutral-800"
                  }`}
                >
                  <span
                    className={`text-base leading-none ${
                      activeIndex === index
                        ? "text-neutral-800 font-medium"
                        : "text-zinc-500 font-normal"
                    }`}
                  >
                    {size}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 w-full px-5 py-4 bg-neutral-800 rounded-lg flex flex-col gap-4">
            <div className="w-full flex flex-col gap-3.5">
              <div className="w-full flex justify-between items-start">
                <span className="text-neutral-300 text-base font-medium leading-tight">
                  Stock Quantity
                </span>
                <span className="text-neutral-300 text-lg font-medium leading-tight">
                  {productData?.priceDetails?.[activeIndex]?.numberOfUnits ||
                    "N/A"}
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3.5">
              <div className="w-full flex justify-between items-start">
                <span className="text-neutral-300 text-base font-medium leading-tight">
                  Number of Units Sold
                </span>
                <span className="text-neutral-300 text-lg font-medium leading-tight">
                  {productData?.unitsSold || "N/A"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[29px]">
            <div
              className="px-4 py-2.5 bg-[#121212] rounded-lg flex justify-between items-center cursor-pointer"
              onClick={toggleDescription}
            >
              <div className="text-[#D1D1D1] text-base font-medium">
                Description
              </div>
              <button
                className="focus:outline-none"
                aria-label="Toggle Description"
              >
                {isOpen ? (
                  <Minus className="text-white w-4 h-5 transition-transform" />
                ) : (
                  <Plus className="text-white w-4 h-5 transition-transform" />
                )}
              </button>
            </div>

            {isOpen && (
              <div className="mt-[10px] space-y-4 px-4">
                {productData?.longDescriptions?.map((desc, idx) => (
                  <div key={idx} className="text-[#AAAAAA] text-sm font-normal">
                    <div className="text-[#D1D1D1] text-sm font-medium mb-2">
                      {desc.heading}
                    </div>
                    {desc.description}
                  </div>
                )) || (
                  <div className="text-[#AAAAAA] text-sm font-normal">
                    No description available.
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-[29px]">
            <div
              className="px-4 py-2.5 bg-[#121212] rounded-lg flex justify-between items-center cursor-pointer"
              onClick={toggleDescriptionn}
            >
              <div className="text-[#D1D1D1] text-base font-medium">
                Shipping & Returns
              </div>
              <button
                className="focus:outline-none"
                aria-label="Toggle Description"
              >
                {isOpenn ? (
                  <Minus className="text-white w-4 h-5 transition-transform" />
                ) : (
                  <Plus className="text-white w-4 h-5 transition-transform" />
                )}
              </button>
            </div>

            {isOpenn && (
              <div className="mt-[10px] space-y-4 px-4">
                {productData?.additionalSections?.map((section, idx) => (
                  <div key={idx}>
                    <div className="text-[#D1D1D1] text-sm font-medium">
                      {section.heading}
                    </div>
                    {section.subSections.map((sub, subIdx) => (
                      <div
                        key={subIdx}
                        className="text-[#AAAAAA] text-sm font-normal mt-2"
                      >
                        <div className="font-medium">{sub.subHeading}</div>
                        {sub.description}
                      </div>
                    ))}
                  </div>
                )) || (
                  <>
                    <div className="text-[#D1D1D1] text-sm font-medium">
                      Estimated Delivery
                    </div>
                    <div className="text-[#AAAAAA] text-sm font-normal">
                      No shipping information available.
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 w-full px-7 py-5 bg-neutral-800 rounded-lg flex flex-col gap-5">
        <span className="text-neutral-300 text-3xl font-medium">
          Product Reviews
        </span>

        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-full p-4 border-t border-neutral-600 flex flex-col gap-2.5"
          >
            <span className="text-neutral-400 text-sm leading-tight">
              {review.text}
            </span>
            <div className="w-full flex justify-between items-start">
              <span className="text-neutral-300 text-base leading-normal">
                {review.name}
              </span>
              <span className="text-neutral-300 text-sm leading-none">
                User Id - {review.userId}
              </span>
            </div>
          </div>
        ))}
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="bg-[#333333] border-none max-w-fit w-full sm:w-auto p-6 rounded-[30px] text-white">
          <AlertDialogHeader className="text-center items-center">
            <AlertDialogTitle className="text-2xl sm:text-xl font-normal font-newyork text-white">
              Delete Product
            </AlertDialogTitle>
            <AlertDialogDescription className="mt-1 text-sm sm:text-xs text-[#ABABAB]">
              Are you sure you want to delete this product?
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="flex flex-col sm:flex-row gap-[10px] sm:gap-[6px] justify-center items-center mt-6 w-full">
            <Button
              variant="outline"
              className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[18px] bg-[#212121] hover:bg-[#212121] text-[#D1D1D1] hover:text-[#D1D1D1] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 cursor-pointer"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>

            <Button
              variant="destructive"
              className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[15px] bg-[#FF0000] text-[#D1D1D1] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SingleProduct;
