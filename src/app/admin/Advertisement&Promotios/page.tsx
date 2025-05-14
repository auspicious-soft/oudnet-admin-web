"use client";
// import Modal from '@/app/(auth)/components/Modal';
import PromotionGrid, {
  Promotion,
} from "@/app/(auth)/components/AdvertisementAndPromotions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import DialogModal from "@/app/(auth)/components/DialogModal";
import PromotionForm from "./PromotionForm";
import { useSession } from "next-auth/react";
import { deleteApi, getApi } from "@/utils/api";
import ReusableLoader from "@/components/ui/ReusableLoader";
import StyledPagination from "@/app/(auth)/components/Pagenation";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(
    null
  );
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const { data: session, status } = useSession();
  const router = useRouter();

  const fetchPromotions = async () => {
    if (status !== "authenticated") return;
    setLoading(true);
    try {
      const token = session?.accessToken;
      const role = session?.user?.role;

      const response = await getApi("/api/admin/promotions", {
        headers: { Authorization: `Bearer ${token}`, role },
        params: {
          page,
          limit,
        },
      });

      const fetched = response?.data?.data?.promotions || [];
      const mappedPromotions: Promotion[] = fetched.map((promo: any) => ({
        _id: promo._id,
        image: "/products.svg",
        title: promo.title,
        store: promo.storeName?.storeName ?? "Unknown Store",
      }));

      setPromotions(mappedPromotions);
      const total = response?.data?.data.total;
      const resLimit = response?.data?.data?.limit;
      const resPage = response?.data?.data?.page;
      setTotalCount(total);
      setLimit(resLimit);
      setPage(resPage);
    } catch (error) {
      console.error("Error fetching promotions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPromotions();
  }, [session, status, page, limit]);

  const fetchSinglePromotion = async (id: string) => {
    setLoading(true);
    try {
      const token = session?.accessToken;
      const role = session?.user?.role;

      const response = await getApi(`/api/admin/promotions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          role,
        },
      });

      const promo = response?.data?.data;

      return {
        _id: promo._id,
        image: "/products.svg", // static for now
        title: promo.title,
        store: promo.storeName?.storeName ?? "Unknown Store",
        storeId: promo?.storeName?._id ?? "",
      };
    } catch (error) {
      console.error("Error fetching single promotion:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const onAdd = () => {
    setMode("add");
    setSelectedPromotion(null);
    setIsModalOpen(true);
  };

  const onEdit = async (promotion: Promotion) => {
    if (!promotion._id) return;
    const fullPromo = await fetchSinglePromotion(promotion._id);
    if (fullPromo) {
      setSelectedPromotion(fullPromo);
      setMode("edit");
      setIsModalOpen(true);
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const token = session?.accessToken;
      const role = session?.user?.role;

      if (!token || !role) return;

      await deleteApi(`/api/admin/promotions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          role,
        },
      });

      setPromotions((prev) => prev.filter((p) => p._id !== id));
      console.log("123");
    } catch (error) {
      console.error("Error deleting promotion:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalCount / limit);

  if (loading) {
    return <ReusableLoader />;
  }

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
          <span className="text-black text-sm font-normal">
            Add New Promotion
          </span>
        </button>
      </div>
      <PromotionGrid
        promotions={promotions}
        onEdit={onEdit}
        onDelete={handleDelete}
      />
      ;
      <DialogModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setMode("add");
          setSelectedPromotion(null);
        }}
      >
        <div className="text-white text-xl font-semibold mb-4">
          {mode === "edit" ? "Edit Promotion" : "Add Promotion"}
        </div>
        <PromotionForm
          mode={mode}
          defaultValues={selectedPromotion || {}}
          onClose={() => {
            setIsModalOpen(false);
            fetchPromotions(); 
          }}
        />
      </DialogModal>
      <div className="w-full flex justify-end mt-[20px]">
        <div className="flex justify-end">
          <StyledPagination
            currentPage={page}
            totalItems={totalPages}
            onPageChange={setPage}
            itemsPerPage={limit}
          />
        </div>
      </div>
    </>
  );
};
export default Page;
