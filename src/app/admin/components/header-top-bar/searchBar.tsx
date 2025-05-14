'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function SearchBar({
  onSearch,
  search = "", 
}: {
  onSearch: (query: string) => void
  search?: string
}) {
  const [searchTerm, setSearchTerm] = useState(search)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(search)

  useEffect(() => {
    setSearchTerm(search)
  }, [search])

 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm) 
    }, 500) 

    
    return () => clearTimeout(timeoutId)
  }, [searchTerm])

  useEffect(() => {
    onSearch(debouncedSearchTerm)

  }, [debouncedSearchTerm, onSearch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value) 
    
  }

  return (
    <div className="relative bg-[#000000] !rounded-[20px] flex items-center gap-[11px] h-10 ml-auto lg:py-[10px] lg:px-[20px] py-[6px] px-[6px]">
      <Search className="h-[11px] w-[11px] text-[#D1D1D1]" />
      <Input
        type="text"
        placeholder="Search"
        value={searchTerm} // Input value should be synced with the state
        onChange={handleChange} // Handle changes in the input field
        className="placeholder-white bg-transparent border-0 !text-sm !font-normal !text-[#D1D1D1] w-full"
      />
    </div>
  )
}
