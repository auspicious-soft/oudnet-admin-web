// "use client";
// import React, { useState } from "react";
// import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog"; 
// import { Button } from "@/components/ui/button";
// import { AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";

// const Modal = () => {
//     const [isDialogOpen, setIsDialogOpen] = useState(false)
//     const handleDeleteProduct = () => {
//         console.log("Product deleted")
//         setIsDialogOpen(false)
//       }
//  return (
//   <>
//    {/* <div className="py-10 px-5 sm:px-6 sm:py-8 bg-[#333333] rounded-[30px] justify-center items-center max-w-fit w-full sm:w-auto mx-auto">
//     <div className="text-center justify-start text-[#FFFFFF] text-2xl sm:text-xl font-normal font-newyork">Delete Product</div>
//     <div className="mt-[5px] self-stretch text-center justify-start text-[#ABABAB] text-sm sm:text-xs font-normal">Are you sure you want to delete this product?</div>

//     <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[6px] justify-center items-center mt-[20px] w-full">
//      <button className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[15px] bg-[#212121] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 cursor-pointer text-[#D1D1D1]">Cancel</button>
//      <button className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[15px]  bg-[#FF0000] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 cursor-pointer text-[#D1D1D1]">Delete</button>
//     </div>
//    </div> */}

//    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//     <DialogContent className="bg-[#333333] border-none max-w-fit w-full sm:w-auto p-6 rounded-[30px] text-white">
//      <AlertDialogHeader className="text-center">
//       <DialogTitle className="text-2xl sm:text-xl font-normal font-newyork text-white">Delete Product</DialogTitle>
//       <DialogDescription className="mt-1 text-sm sm:text-xs text-[#ABABAB]">Are you sure you want to delete this product?</DialogDescription>
//      </AlertDialogHeader>
//      <AlertDialogFooter className="flex flex-col sm:flex-row gap-[10px] sm:gap-[6px] justify-center items-center mt-6 w-full">
//       <Button variant="outline" className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[15px] bg-[#212121] text-[#D1D1D1] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800" onClick={() => setIsDialogOpen(false)}>
//        Cancel
//       </Button>
//       <Button variant="destructive" className="w-full sm:w-auto lg:px-[94px] lg:py-[18px] px-[40px] py-[15px] bg-[#FF0000] text-[#D1D1D1] rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800" onClick={handleDeleteProduct}>
//        Delete
//       </Button>
//      </AlertDialogFooter>
//     </DialogContent>
//    </Dialog>
//   </>
//  );
// };
// export default Modal;
