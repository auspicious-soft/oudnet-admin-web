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
import ReusableLoader from "@/components/ui/ReusableLoader";

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
  const [navigating, setNavigating] = useState(false);
  const [error, setError] = useState(null)
  const [imgData, setImgData] = useState<Product | null>(null)
  const { data: session, status } = useSession();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const searchParams = useSearchParams()
    const [selectedImage, setSelectedImage] = useState("/products.svg");
  const [activeIndex, setActiveIndex] = useState(0);
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
        const response = await getApi(`/api/admin/store-products/${id}`, {
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
    const response = await deleteApi(`/api/admin/store-products/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
        role: role,
      },
    });
    if (response.success) {
      console.log("Product deleted successfully");
      toast.success("Product deleted successfully");
      router.push(`/admin/store/storeManagement/products?id=${id}`);
    } else {
      toast.error("Failed to delete product");
        router.push(`/admin/store/storeManagement/products?id=${id}`);
    }
  } catch (err) {
    console.error("Error deleting product:", err);
    toast.error("Something went wrong");
  } finally {
    setIsDialogOpen(false);
      router.push(`/admin/store/storeManagement/products?id=${id}`);
      setLoading(false);
  }
};

if(loading){
  return <ReusableLoader/>
}

  return (
    <div className="flex flex-col lg:flex-row w-full lg:p-6 p-4 gap-6 text-white">
      <div className="flex-shrink-0 flex flex-col items-center w-full lg:max-w-[330px]">
        <Image
          src={selectedImage}
          alt="Product"
          height={330}
          width={330}
          className="object-cover rounded-[20px] w-full h-auto max-w-[330px]"
          key={selectedImage}
        />

        <div className="flex mt-2 flex-wrap gap-2 justify-center">
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

      <div className="flex-1 w-full">
        <div className="flex justify-end mt-4 lg:mt-0">
          <button
            className="px-4 py-2 rounded-full outline-1 outline-offset-[-1px] outline-red-600 inline-flex justify-center items-center gap-2 cursor-pointer transition-colors hover:bg-red-50"
            onClick={() => setIsDialogOpen(true)}
          >
            <div className="text-red-600 text-sm font-normal">
              Delete Product
            </div>
          </button>
        </div>

        <h1 className="mt-5 text-[#D1D1D1] text-2xl sm:text-3xl font-medium">
          Jannat E Zuhur
        </h1>
        <p className="mt-3 text-[#AAAAAA] text-sm font-normal">
          A single ember awakens centuries of tradition, as the first wisp of
          smoke carries you into the heart of the East.
        </p>
        <p className="mt-5 text-[#EEC584] text-xl sm:text-2xl font-medium">
          91.99 $
        </p>

        <div className="mt-6">
          <div
            className="px-4 py-2.5 bg-[#121212] rounded-lg flex justify-between items-center cursor-pointer"
            onClick={toggleDescription}
          >
            <div className="text-[#D1D1D1] text-base font-medium">
              Description
            </div>
            <button className="focus:outline-none" aria-label="Toggle Description">
              {isOpen ? (
                <Minus className="text-white w-4 h-5 transition-transform" />
              ) : (
                <Plus className="text-white w-4 h-5 transition-transform" />
              )}
            </button>
          </div>

          {isOpen && (
            <div className="mt-3 space-y-4 px-4 text-sm text-[#AAAAAA]">
              <p>
                Scent profile: Uplifting rose and bergamot open up to rich
                undertones of saffron and geranium in Oud Al Ibtisam. With its
                warming, woody base notes of agarwood, musk, and amber, this is a
                distinctive floral scent with magnetic appeal.
              </p>
              <p>
                What is included? 1 jar containing 40g of Oud Al Ibtisam Muattar
                wood chips.
              </p>
              <p>
                Cultivate calm in any space. Ideal for prayer time, while reading
                the Quran, meditating, or simply relaxing. It also eliminates
                cooking smells, bathroom odors, and bad smoke. Perfect for special
                occasions and gatherings!
              </p>
              <p>
                What makes Dukhni Muattar special? It is specially made from
                handpicked wood chips that have been cured in essential oils and
                various aromatic extracts, botanical extracts, spices, resins, and
                woods. The combination of different aromatics and length of the
                curing process is what gives each type of muattar its own unique
                fragrance. Dukhni aims to provide an authentic and luxurious
                aromatic experience.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6">
          <div
            className="px-4 py-2.5 bg-[#121212] rounded-lg flex justify-between items-center cursor-pointer"
            onClick={toggleDescriptionn}
          >
            <div className="text-[#D1D1D1] text-base font-medium">
              Shipping & Returns
            </div>
            <button className="focus:outline-none" aria-label="Toggle Description">
              {isOpenn ? (
                <Minus className="text-white w-4 h-5 transition-transform" />
              ) : (
                <Plus className="text-white w-4 h-5 transition-transform" />
              )}
            </button>
          </div>

          {isOpenn && (
            <div className="mt-3 space-y-4 px-4 text-sm text-[#AAAAAA]">
              <p className="text-[#D1D1D1] font-medium">Estimated Delivery</p>
              <p>
                Scent profile: Uplifting rose and bergamot open up to rich
                undertones of saffron and geranium in Oud Al Ibtisam.
              </p>
              <p>
                What is included? 1 jar containing 40g of Oud Al Ibtisam Muattar
                wood chips.
              </p>
              <p>
                Cultivate calm in any space. Ideal for prayer time, while reading
                the Quran, meditating, or simply relaxing.
              </p>
              <p>
                What makes Dukhni Muattar special? It is specially made from
                handpicked wood chips that have been cured in essential oils.
              </p>

              <p className="text-[#D1D1D1] font-medium">Damages & Exchanges</p>
              <p>
                If your order arrives damaged, defective, or incorrect, please
                contact us within 7 days of receiving the product so that we can
                evaluate the issue and make it right. We do not accept exchanges -
                however, if you have a particular issue, please email us and we
                will try our best to accommodate your request.
              </p>
            </div>
          )}
        </div>
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

          <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 w-full">
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 py-3 bg-[#212121] hover:bg-[#212121] text-[#D1D1D1] hover:text-[#D1D1D1] rounded-lg"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>

            <Button
              variant="destructive"
              className="w-full sm:w-auto px-6 py-3 bg-[#FF0000] text-[#D1D1D1] rounded-lg"
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

export default SingleProductRender;