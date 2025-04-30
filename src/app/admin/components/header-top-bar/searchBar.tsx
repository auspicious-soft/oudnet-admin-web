// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
// import React from "react";

// const SearchBar = () => {
//  return (
//   <div className="relative bg-[#000000] !rounded-[20px] flex items-center gap-[11px] h-10  ml-auto lg:py-[10px] lg:px-[20px] py-[6px] px-[6px]">
//    <Search className="h-[11px] w-[11px] text-[#D1D1D1] " />
//    <Input type="text" placeholder="Search" className=" placeholder-white bg-transparent border-0 !text-sm !font-normal !text-[#D1D1D1] w-full   " />
//   </div>

//  );
// };

// export default SearchBar;


'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value) // Call the parent function to filter or search
  }

  return (
    <div className="relative bg-[#000000] !rounded-[20px] flex items-center gap-[11px] h-10 ml-auto lg:py-[10px] lg:px-[20px] py-[6px] px-[6px]">
      <Search className="h-[11px] w-[11px] text-[#D1D1D1]" />
      <Input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        className="placeholder-white bg-transparent border-0 !text-sm !font-normal !text-[#D1D1D1] w-full"
      />
    </div>
  )
}
