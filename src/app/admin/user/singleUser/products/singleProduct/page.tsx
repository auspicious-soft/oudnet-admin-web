// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// const Page = () => {
//  const [isOpen, setIsOpen] = useState(true);

//  const toggleDescription = () => {
//   setIsOpen(!isOpen);
//  };
//  const [isOpenn, setIsOpenn] = useState(true);

//  const toggleDescriptionn = () => {
//   setIsOpenn(!isOpenn);
//  };

//  return (
//   <div className="flex flex-col lg:flex-row w-full md:p-6 p-1 text-white">
//    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
//     <Image src="/singleProduct.svg" alt="Product" height={330} width={330} className="object-cover  rounded-[20px]" />
//     <div className="flex mt-2 space-x-2">
//      <Image src="/singleProduct.svg" alt="Product" height={73} width={73} className="object-cover rounded-[10px]" />
//      <Image src="/singleProduct.svg" alt="Product" height={73} width={73} className="object-cover rounded-[10px]" />
//      <Image src="/singleProduct.svg" alt="Product" height={73} width={73} className="object-cover rounded-[10px]" />
//     </div>
//    </div>

//    <div className="flex-1">
//     <div className="flex justify-end sm:mt-[20px] lg:mt-[0px]">
//      <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full  outline-1 outline-offset-[-1px] outline-red-600 inline-flex justify-center items-center gap-2 sm:gap-2.5 cursor-pointer transition-colors hover:bg-red-50">
//       <div className="text-red-600 text-xs sm:text-sm font-normal">Delete Product</div>
//      </button>
//     </div>

//     <h1 className="mt-5 text-[#D1D1D1] text-3xl font-medium">Jannat E Zuhur</h1>
//     <p className="mt-3 text-[#AAAAAA] text-sm font-normal">A single ember awakens centuries of tradition, as the first wisp of smoke carries you into the heart of the East.</p>
//     <p className="mt-5 text-[#EEC584] text-2xl font-medium">91.99 $</p>

//     <div className="mt-[29px]">
//      <div className="px-4 py-2.5 bg-[#121212] rounded-lg flex justify-between items-center cursor-pointer" onClick={toggleDescription}>
//       <div className="text-[#D1D1D1] text-base font-medium">Description</div>
//       <button className="focus:outline-none" aria-label="Toggle Description">
//        {isOpen ? <Minus className="text-white w-4 h-5 transition-transform" /> : <Plus className="text-white w-4 h-5 transition-transform" />}
//       </button>
//      </div>

//      {isOpen && (
//       <div className="mt-[10px] space-y-4 px-4">
//        <div className="text-[#AAAAAA] text-sm font-normal">Scent profile: Uplifting rose and bergamot open up to rich undertones of saffron and geranium in Oud Al Ibtisam. With its warming, woody base notes of agarwood, musk, and amber, this is a distinctive floral scent with magnetic appeal.</div>
//        <div className="text-[#AAAAAA] text-sm font-normal">What's included? 1 jar containing 40g of Oud Al Ibtisam Muattar wood chips.</div>
//        <div className="text-[#AAAAAA] text-sm font-normal">Cultivate calm in any space Ideal for prayer time, while reading the Quran, meditating, or simply relaxing. It also eliminates cooking smells, bathroom odors, and bad smoke. Perfect for special occasions and gatherings!</div>
//        <div className="text-[#AAAAAA] text-sm font-normal">
//         What makes Dukhni Muattar special? It is specially made from handpicked wood chips that have been cured in essential oils and various aromatic extracts, botanical extracts, spices, resins, and woods. The combination of different aromatics and length of the curing process is what gives each
//         type of muattar its own unique fragrance. Dukhni aims to provide an authentic and a luxurious aromatic experience.
//        </div>
//       </div>
//      )}
//     </div>

//     <div className="mt-[29px]">
//      <div className="px-4 py-2.5 bg-[#121212] rounded-lg flex justify-between items-center cursor-pointer" onClick={toggleDescriptionn}>
//       <div className="text-[#D1D1D1] text-base font-medium">Shipping & Returns</div>
//       <button className="focus:outline-none" aria-label="Toggle Description">
//        {isOpenn ? <Minus className="text-white w-4 h-5 transition-transform" /> : <Plus className="text-white w-4 h-5 transition-transform" />}
//       </button>
//      </div>

//      {isOpenn && (
//       <div className="mt-[10px] space-y-4 px-4">
//        <div className="text-[#D1D1D1] text-sm font-medium">Estimated Delivery</div>
//        <div className="text-[#AAAAAA] text-sm font-normal">Scent profile: Uplifting rose and bergamot open up to rich undertones of saffron and geranium in Oud Al Ibtisam. With its warming, woody base notes of agarwood, musk, and amber, this is a distinctive floral scent with magnetic appeal.</div>
//        <div className="text-[#AAAAAA] text-sm font-normal">What's included? 1 jar containing 40g of Oud Al Ibtisam Muattar wood chips.</div>
//        <div className="text-[#AAAAAA] text-sm font-normal">Cultivate calm in any space Ideal for prayer time, while reading the Quran, meditating, or simply relaxing. It also eliminates cooking smells, bathroom odors, and bad smoke. Perfect for special occasions and gatherings!</div>
//        <div className="text-[#AAAAAA] text-sm font-normal">
//         What makes Dukhni Muattar special? It is specially made from handpicked wood chips that have been cured in essential oils and various aromatic extracts, botanical extracts, spices, resins, and woods. The combination of different aromatics and length of the curing process is what gives each
//         type of muattar its own unique fragrance. Dukhni aims to provide an authentic and a luxurious aromatic experience.
//        </div>

//        <div className="text-[#D1D1D1] text-sm font-medium">Damages & Exchanges</div>
//        <div className="text-[#AAAAAA] text-sm font-normal">
//         If your order arrives damaged, defective, or incorrect, please contact us within 7 days of receiving the product so that we can evaluate the issue and make it right. We do not accept exchanges - however if you have a particular issue, please email us at - customerservice@oudnet.com & we will
//         try our best to accommodate your request.
//        </div>
//       </div>
//      )}
//     </div>


//    </div>
//   </div>
//  );
// };

// export default Page;





"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };
  const [isOpenn, setIsOpenn] = useState(true);

  const toggleDescriptionn = () => {
    setIsOpenn(!isOpenn);
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
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full outline-1 outline-offset-[-1px] outline-red-600 inline-flex justify-center items-center gap-2 sm:gap-2.5 cursor-pointer transition-colors hover:bg-red-50">
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
    </div>
  );
};

export default Page;