import React from 'react'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const useGif = (tag) => {
    const [gif, setgif] = useState('');
    const [loading, setLoading] = useState('false');
   
    async function fetchData() {
        setLoading(true);
       
        const {data} = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
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