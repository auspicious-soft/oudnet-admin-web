
interface Column {
 label: string;
 key: string;
 align?: "left" | "right";
}

interface TableProps {
 //   title: string;
 title?: string;
 columns: Column[];
 data: any[];
}

export default function CustomTable({ title, columns, data }: TableProps) {
 return (
  <div className="col-span-2 bg-[#212121] p-[30px] rounded-xl">

   {/* Only render title if it exists */}
      {title && (
        <h2 className="justify-start text-[#D1D1D1] text-xl font-medium">{title}</h2>
      )}

   <div className="overflow-x-auto mt-[25px]">
    <table className="w-full text-left">
     <thead className="text-xs font-normal text-[#797A7C] border-b-[2px] border-dashed border-[#797A7C]">
      <tr>
       {columns.map((col, idx) => (
        <th key={idx} className={`px-4 py-3 ${col.align === "right" ? "text-right" : "text-left"}`}>
         {col.label}
        </th>
       ))}
      </tr>
     </thead>

     <tbody className="text-[#D1D1D1] ">
      {data.map((row, idx) => (
       <tr key={idx} className="hover:bg-[#2a2a2a] ">
        {columns.map((col, colIdx) => (
         <td key={colIdx} className={`py-3 px-4 ${col.align === "right" ? "text-right" : "text-left"}`}>
          {row[col.key]}
         </td>
        ))}
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </div>
 );
}
