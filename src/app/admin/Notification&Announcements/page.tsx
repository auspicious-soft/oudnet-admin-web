"use client";
import { useState } from "react";

const storeOptions = ["Mia Taylor", "Emily Brown", "John Smith", "Sarah Lee", "Diana Grant"];

const Page = () =>{
    const [active, setActive] = useState<"user" | "store">("user");
    const [sendToSpecific, setSendToSpecific] = useState(false);
    const [selectedStores, setSelectedStores] = useState<string[]>([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const toggleStore = (store: string) => {
        if (!selectedStores.includes(store)) {
          setSelectedStores([...selectedStores, store]);
        }
      };
    
      const removeStore = (store: string) => {
        setSelectedStores(selectedStores.filter((s) => s !== store));
      };
    
      const availableStores = storeOptions.filter((s) => !selectedStores.includes(s));

    return(
        <>
       <div className="h-[46px] rounded-[50px] inline-flex justify-center items-center gap-2.5 w-fit bg-neutral-800">
  <button
    onClick={() => setActive("user")}
    className={`h-full px-4 py-2 rounded-[30px] font-['Outreque'] text-base leading-snug ${
      active === "user" ? "bg-orange-300 text-black" : "bg-transparent text-gray-700"
    }`}
  >
    Users
  </button>
  <button
    onClick={() => setActive("store")}
    className={`h-full px-4 py-2 rounded-[30px] font-['Outreque'] text-base leading-snug ${
      active === "store" ? "bg-orange-300 text-black" : "bg-transparent text-gray-700"
    }`}
  >
    Store Owners
  </button>
</div>

      
        <div className="self-stretch p-7 bg-neutral-800 rounded-xl inline-flex justify-center items-center gap-7">
          <div className="flex-1 flex flex-col gap-10">
            
            <div className="flex flex-col gap-5 w-full">

              <div className="flex flex-col gap-2.5 w-full">
                <label className="text-zinc-500 text-sm font-['Outreque'] leading-tight">Enter email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-5 py-4 bg-zinc-900 rounded-lg text-white"
                />
              </div>
      
              <div className="flex flex-col gap-[5px] w-full">
                <label className="text-zinc-500 text-sm font-['Outreque'] leading-tight">Description</label>
                <input
                  type="text"
                  placeholder="Enter description"
                  className="w-full px-5 pt-4 pb-14 bg-zinc-900 rounded-lg text-white border-0"
                />
              </div>
            </div>
      
            {/* Store-specific Section */}
            {active === "store" && (
              <div className="flex flex-col gap-5 w-full">
                {/* Checkbox */}
                <div className="inline-flex items-center gap-2 cursor-pointer" onClick={() => setSendToSpecific(!sendToSpecific)}>
                  <div className="w-5 h-5 p-1 bg-white rounded-[5px] outline-1 outline-offset-[-1px] outline-orange-100 flex justify-center items-center">
                    {sendToSpecific && <div className="w-3 h-3 bg-orange-300 rounded-[3px]" />}
                  </div>
                  <span className="text-zinc-500 text-sm font-['Outreque']">Send to a specific store</span>
                </div>
                {sendToSpecific && (
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-zinc-500 text-sm font-['Outreque']">Select Stores</label>
                    <div
                      className="bg-zinc-900 rounded-lg px-5 py-4 text-white relative cursor-pointer"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {selectedStores.length === 0 ? (
                        <span className="text-zinc-400 text-sm">Select store(s)</span>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {selectedStores.map((store) => (
                            <div
                              key={store}
                              className="px-3 py-1 bg-blue-400 rounded flex items-center gap-2 text-white text-xs"
                            >
                              <span>{store}</span>
                              <button onClick={(e) => { e.stopPropagation(); removeStore(store); }}>x</button>
                            </div>
                          ))}
                        </div>
                      )}
                      {dropdownOpen && availableStores.length > 0 && (
                        <div className="absolute top-full mt-1 left-0 w-full bg-zinc-800 border border-zinc-700 rounded-lg max-h-48 overflow-y-auto scrollbar-none z-10">
                          {availableStores.map((store) => (
                            <div
                              key={store}
                              className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleStore(store);
                                setDropdownOpen(false);
                              }}
                            >
                              {store}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            <button className="w-full px-44 py-4 bg-orange-300 rounded-3xl flex justify-center items-center gap-2.5">
              <span className="text-black text-sm font-normal font-['Outreque'] leading-snug">Send</span>
            </button>
          </div>
        </div>
      </>
      
    )
}

export default Page;