import React , { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const Random = () => {

    const [gif, setgif] = useState('');
    
    async function fetchData() {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setgif(imageSource);
        console.log(imageSource);;
    }

    useEffect( () => {
        fetchData();
    },[])

    function clickHandler(){

    }

  return (
    <div className="w-1/2  h-[450px] bg-green-500 rounded-lg border-black
    flex flex-col items-center gap-y-5 mt-[15px]">

        <h1 className="text-2xl underline uppercase font-bold">Random Gif </h1>

        <img src = {gif} width="450"/>

        <button onClick={clickHandler}
        className="w-10/12 bg-white text-lg py-2 rounded-lg">
            Generate 
        </button>
    </div>
  )
}

export default Random