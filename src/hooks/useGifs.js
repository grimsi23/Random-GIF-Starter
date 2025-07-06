import react,{useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const API_KEY='kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGifs=(tag)=>{
    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState('false');
    async function fetchData(tag) {
        setLoading(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}=await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    useEffect( ()=> {
        fetchData();
    },[])

    return {gif,loading,fetchData};
}
export default useGifs;