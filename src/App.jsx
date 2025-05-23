import React,{useState} from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
     <div className="w-full h-screen flex flex-col  bg-amber-400 overflow-x-hidden items-center">
        <h1 className="absolute  bg-white rounded-sm w-11/12 text-center 
          mt-[40px] px-10 py-2 text-3xl font-bold">Random Gifs</h1>
         <div className="flex flex-col w-full items-center gap-y-10 mt-[110px]">
           <Random/>
           <Tag/>
         </div>
     </div>
  )
}