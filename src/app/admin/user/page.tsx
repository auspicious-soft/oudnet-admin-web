import CustomTable from '@/app/(auth)/components/Table';
import Image from 'next/image';
import React from 'react'
import SearchBar from '../components/header-top-bar/searchBar';


type AlignType = "left" | "right"; 

interface Column {
  label: string;
  key: string;
  align?: AlignType;
}

const columns: Column[] = [
  { label: "Sr No.", key: "srno" },
  { label: "Name of user", key: "nameofuser" },
  { label: "Email address", key: "email" },
  { label: "Date of last purchase", key: "lastpurchase" },
  { label: "Action", key: "action", align: "right" },
];


  const data = [
    {
      srno: 1,
      nameofuser: "Isabella Anderson",
      email: "michael.kim@example.com",
      lastpurchase: "March 15, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 2,
      nameofuser: "Sarah Williams",
      email: "emma.davis@example.com",
      lastpurchase: "April 22, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 3,
      nameofuser: "Emily Brown",
      email: "william.lee@example.com",
      lastpurchase: "May 30, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 4,
      nameofuser: "Richard Thompson",
      email: "noah.thompson@example.com",
      lastpurchase: "June 10, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 5,
      nameofuser: "Robert Johnson",
      email: "jacob.davis@example.com",
      lastpurchase: "July 5, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 6,
      nameofuser: "William Davis",
      email: "william.lee@example.com",
      lastpurchase: "July 5, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 7,
      nameofuser: "Michael Jones",
      email: "emma.davis@example.com",
      lastpurchase: "May 30, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 8,
      nameofuser: "Isabella Anderson",
      email: "william.lee@example.com",
      lastpurchase: "June 10, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 9,
      nameofuser: "Sarah Williams",
      email: "emma.davis@example.com",
      lastpurchase: "July 5, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 10,
      nameofuser: "Emily Brown",
      email: "william.lee@example.com",
      lastpurchase: "August 18, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 11,
      nameofuser: "Richard Thompson",
      email: "ethan.brown@example.com",
      lastpurchase: "September 12, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 12,
      nameofuser: "Robert Johnson",
      email: "emma.davis@example.com",
      lastpurchase: "March 15, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 13,
      nameofuser: "Sarah Williams",
      email: "ethan.brown@example.com",
      lastpurchase: "April 22, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 14,
      nameofuser: "Sarah Williams",
      email:  "ethan.brown@example.com",
      lastpurchase: "August 18, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
    {
      srno: 15,
      nameofuser: "Sarah Williams",
      email: "emma.davis@example.com",
      lastpurchase: "June 10, 2023",
      action: <Image src="/view.svg" alt="view" width={28} height={28} className="ml-auto block cursor-pointer" />,
    },
  ];

const Page = () => {
  return (
    <>
      <SearchBar />

     <div>
      <CustomTable  columns={columns} data={data} />
    </div>
    
    
    </>
  )
}
export default Page