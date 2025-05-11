"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { getApi, deleteApi } from "@/utils/api";
import { toast } from "react-toastify";
import { AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Product {
    name: string;
    price: string;
    title: string;
    description: string;
    images: string[];
  }


const SingleProductRender = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [imgData, setImgData] = useState<Product | null>(null)
  const { data: session, status } = useSession();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const searchParams = useSearchParams()
   const router = useRouter();
  
  // const id = searchParams.get('id')
  const id = "68145e5fd0ab7494e2706c97"

  useEffect(() => {
    if (status !== "authenticated") return; 
    if (!id ) return;
  
  
    const fetchProductDetails = async () => {
      setLoading(true);
      const token = session?.accessToken;
      const role = session?.user?.role;
  
      try {
        const response = await getApi(`/api/admin/user-products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            role: role,
          },
        });
  
        if (response.success) {
          toast.success('User fetched successfully');
          const data = response?.data?.data
          setImgData(data);
        } else {
          toast.error('Failed to fetch user');
        }
      } catch (err) {
        console.error('Failed to fetch user:', err);
        toast.error('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchProductDetails();
  }, [id, status]);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };
  const [isOpenn, setIsOpenn] = useState(true);

  const toggleDescriptionn = () => {
    setIsOpenn(!isOpenn);
  };

const handleDelete = async () => {

  if (!id) {
    console.error("User ID not found in query");
    return;
  }
   setLoading(true);
      const token = session?.accessToken;
      const role = session?.user?.role;
  try {
    const response = await deleteApi(`/api/admin/user-products/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
        role: role,
      },
    });
    if (response.success) {
      console.log("Product deleted successfully");
      toast.success("Product deleted successfully");
      router.push(`/admin/user/singleUser/products?id=${id}`);
    } else {
      toast.error("Failed to delete product");
        router.push(`/admin/user/singleUser/products?id=${id}`);
    }
  } catch (err) {
    console.error("Error deleting product:", err);
    toast.error("Something went wrong");
  } finally {
    setIsDialogOpen(false);
      router.push(`/admin/user/singleUser/products?id=${id}`);
  }
};



  return (
    <div className="flex flex-col lg:flex-row w-full md:p-6 p-1 text-white">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <Image
          src="/singleProduct.svg"
          alt="Product"
          height={330}
          width={330}
          className="object-cover rounded-[20px]"
        />
        <div className="flex mt-2 space-x-2">
          <Image
            src="/singleProduct.svg"
            alt="Product"
            height={73}
            width={73}
            className="object-cover rounded-[10px]"
          />
          <Image
            src="/singleProduct.svg"
            alt="Product"
            height={73}
            width={73}
            className="object-cover rounded-[10px]"
          />
          <Image
            src="/singleProduct.svg"
            alt="Product"
            height={73}
            width={73}
            className="object-cover rounded-[10px]"
          />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-end sm:mt-[20px] lg:mt-[0px]">
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full outline-1 outline-offset-[-1px] outline-red-600 inline-flex justify-center items-center gap-2 sm:gap-2.5 cursor-pointer transition-colors hover:bg-red-50"
          onClick={() => setIsDialogOpen(true)} 
          >
            <div className="text-red-600 text-xs sm:text-sm font-normal">
              Delete Product
            </div>
          </button>
        </div>

        <h1 className="mt-5 text-[#D1D1D1] text-3xl font-medium">
          Jannat E Zuhur
        </h1>
        <p className="mt-3 text-[#AAAAAA] text-sm font-normal">
          A single ember awakens centuries of tradition, as the first wisp of
          smoke carries you into the heart of the East.
        </p>
        <p className="mt-5 text-[#EEC584] text-2xl font-medium">91.99 $</p>

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
              <div className="text-[#AAAAAA] text-sm font-normal">
                Scent profile: Uplifting rose and bergamot open up to rich
                undertones of saffron and geranium in Oud Al Ibtisam. With its
                warming, woody base notes of agarwood, musk, and amber, this is a
                distinctive floral scent with magnetic appeal.
              </div>
              <div className="text-[#AAAAAA] text-sm font-normal">
                What is included? 1 jar containing 40g of Oud Al Ibtisam Muattar
                wood chips.
              </div>
              <div className="text-[#AAAAAA] text-sm font-normal">
                Cultivate calm in any space. Ideal for prayer time, while reading
                the Quran, meditating, or simply relaxing. It also eliminates
                cooking smells, bathroom odors, and bad smoke. Perfect for special
                occasions and gatherings!
              </div>
              <div className="text-[#AAAAAA] text-sm font-normal">
                What makes Dukhni Muattar special? It is specially made from
                handpicked wood chips that have been cured in essential oils and
                various aromatic extracts, botanical extracts, spices, resins, and
                woods. The combination of different aromatics and length of the
                curing process is what gives each type of muattar its own unique
                fragrance. Dukhni aims to provide an authentic and luxurious
                aromatic experience.
              </div>
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
              <div className="text-[#D1D1D1] text-sm font-medium">
                Estimated Delivery
              </div>
              <div className="text-[#AAAAAA] text-sm font-normal">
                Scent profile: Uplifting rose and bergamot open up to rich
                undertones of saffron and geranium in Oud Al Ibtisam. With its
                warming, woody base notes of agarwood, musk, and amber, this is a
                distinctive floral scent with magnetic appeal.
              </div>
              <div className="text-[#AAAAAA] text-sm font-normal">
                What is included? 1 jar containing 40g of Oud Al Ibtisam Muattar
                wood chips.
              </div>
              <div className="text-[#AAAAAA] text-sm font-normal">
                Cultivate calm in any space. Ideal for prayer time, while reading
                the Quran, meditating, or simply relaxing. It also eliminates
                cooking smells, bathroom odors, and bad smoke. Perfect for special
                occasions and gatherings!
              </div>
              <div className="text-[#AAAAAA] text-sm font-normal">
                What makes Dukhni Muattar special? It is specially made from
                handpicked wood chips that have been cured in essential oils and
                various aromatic extracts, botanical extracts, spices, resins, and
                woods. The combination of different aromatics and length of the
                curing process is what gives each type of muattar its own unique
                fragrance. Dukhni aims to provide an authentic and luxurious
                aromatic experience.
              </div>

              <div className="text-[#D1D1D1] text-sm font-medium">
                Damages & Exchanges
              </div>
              <div className="text-[#AAAAAA] text-sm font-normal">
                If your order arrives damaged, defective, or incorrect, please
                contact us within 7 days of receiving the product so that we can
                evaluate the issue and make it right. We do not accept exchanges -
                however, if you have a particular issue, please email us at
                customerservice@oudnet.com and we will try our best to accommodate
                your request.
              </div>
            </div>
          )}
        </div>
      </div>

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

      <Button variant="destructive" className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[15px] bg-[#FF0000] text-[#D1D1D1] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 cursor-pointer" onClick={handleDelete}>
      Delete
      </Button>

     </AlertDialogFooter>

    </AlertDialogContent>
   </AlertDialog>
    </div>
  );
};

export default SingleProductRender;