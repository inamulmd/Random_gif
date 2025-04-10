import React , { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Spinner from './Spinner'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const Tag = () => {
   
    const [tag ,setTag] = useState("car");
   

    function clickHandler(){
        console.log("clcicked");
          fetchData();
    }

    function changeHandler(event){
       setTag(event.target.value);
       console.log(tag);
    }

  return (
    <div className="w-1/2   bg-blue-500 rounded-lg border-black
    flex flex-col items-center gap-y-5 mt-[15px]">

        <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random Gif {tag} </h1>

        {/* <img src={`${gif}?${new Date().getTime()}`} alt="Random Gif" width="450" /> */}

         {
          loading ? (<Spinner/>) :(<img key={gif} src = {gif} width="450"/>)
         }
        
         <input 
          className='w-10/12  bg-white text-lg py-2 rounded-lg mb-[20px]'
          onChange={changeHandler}
          value={tag}
         /> 

        <button onClick={clickHandler}
        className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]">
            Generate 
        </button>
    </div>
  )
}

export default Tag