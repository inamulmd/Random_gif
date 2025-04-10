import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {useState} from 'react'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    const [gif, setgif] = useState('');
    const [loading, setLoading] = useState('false');
   
    async function fetchData() {
        setLoading(true);
       
        const {data} = await axios.get(tag ? `${url}&{tag}=${tag}`: url);
        const imageSource = data.data.images.downsized_large.url;
        setgif(imageSource);
        console.log(imageSource);
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    },[])

 

   return {gif, loading, fetchData}

}

export default useGif