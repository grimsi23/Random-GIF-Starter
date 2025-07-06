import React,{useState} from 'react';
import useGifs from '../hooks/useGifs';
import Spinner from './Spinner';

const API_KEY='kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
const Tag = () => {
    const [tag,setTag] = useState(' ');
    const {gif,loading,fetchData} = useGifs(tag);
    
    return (
        <div className="w-11/12 max-w-[500px]  bg-blue-400 rounded-lg border border-green-700
        flex flex-col items-center gap-y-5 mt-[15px] ">
            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gifs</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} className="w-[90%] h-[350px] flex justify-center items-center" />)
            }

            <input className='w-10/12 text-lg py-2 rounded-lg text-center mb-[3px]'
            onChange={(event)=> setTag(event.target.value)}
            value={tag} />
            <button onClick={()=> fetchData(tag)}
            className='w-10/12 bg-blue-100 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
        </div>
    )
} 

export default Tag;