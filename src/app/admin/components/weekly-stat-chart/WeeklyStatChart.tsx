"use client";
import React, {useEffect, useState } from "react";
import Image from "next/image";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface Props {
 selectedYear: number;
 data: any;
 onYearChange: (year: number) => void;
}

const yAxisTickFormatter = (value: number) => {
 if (value < 1600) return value.toString();
 return `${value / 2000}k`;
};

const WeeklyStatChart = ({  }: Props) => {
 const [chartData, setChartData] = useState<{ name: string; listed: number; sold: number }[]>([]);

 const dummyData = [
   { name: "Mon", listed: 800, sold: 600 },
   { name: "Tue", listed: 700, sold: 500 },
   { name: "Wed", listed: 750, sold: 550 },
   { name: "Thu", listed: 720, sold: 530 },
   { name: "Fri", listed: 770, sold: 580 },
   { name: "Sat", listed: 1000, sold: 700 },
   { name: "Sun", listed: 1050, sold: 750 },
 ];

 useEffect(() => {
  setChartData(dummyData);
 }, []);

 return (
  <div className="rounded-xl text-white h-full">
   <div className="flex justify-between items-center mb-[30px] ">
    <h2 className="text-[#D1D1D1] text-xl font-medium ">Weekly Stats</h2>
    <div className="text-[#D1D1D1] text-sm flex gap-[10px]">
     <div className="flex gap-[10px]">
      <Image src="/yellow.svg" alt="yellow" height={10} width={10} /> Products Listed
     </div>

     <div className="flex gap-[10px]">
      <Image src="/green.svg" alt="green" width={10} height={10} /> Products Sold
     </div>
    </div>
   </div>

   <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
     <defs>
      <linearGradient id="colorListed" x1="0" y1="0" x2="0" y2="1">
       <stop offset="5%" stopColor="#EEC584" stopOpacity={0.8} />
       <stop offset="95%" stopColor="#212121" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorSold" x1="0" y1="0" x2="0" y2="1">
       <stop offset="5%" stopColor="#84EEA4" stopOpacity={0.8} />
       <stop offset="95%" stopColor="#212121" stopOpacity={0} />
      </linearGradient>
     </defs>

     <XAxis dataKey="name" tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} />
     <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={yAxisTickFormatter} ticks={[0, 250, 500, 750, 1000, 1250, 1500]} />
     <CartesianGrid vertical={false} horizontal={false} stroke="none" />

     <Tooltip
      contentStyle={{
       backgroundColor: "#1f2937",
       border: "none",
       borderRadius: "10px",
      }}
      labelStyle={{ color: "#d1d5db" }}
      itemStyle={{ color: "#f9fafb" }}
     />
     <Area type="monotone" dataKey="listed" stroke="#e4b973" fillOpacity={1} fill="url(#colorListed)" strokeWidth={2} />
     <Area type="monotone" dataKey="sold" stroke="#67e8f9" fillOpacity={1} fill="url(#colorSold)" strokeWidth={2} />
    </AreaChart>
   </ResponsiveContainer>
  </div>
 );
};

export default WeeklyStatChart;
