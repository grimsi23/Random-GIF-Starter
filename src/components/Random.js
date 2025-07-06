import React,{useState} from 'react'; 
import Spinner from './Spinner';
import useGifs from '../hooks/useGifs';

const API_KEY='kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
const Random = () => {

    const {gif,loading,fetchData} = useGifs();
    return (
        <div className="w-11/12 max-w-[500px] bg-green-400 rounded-lg border border-green-700
        flex flex-col items-center gap-y-5 mt-[15px] p-4">
            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gifs</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} className="w-[90%] max-h-[350px] object-contain" />)
            }

            <button onClick={()=>  fetchData()}
            className='w-10/12 bg-green-100 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
        </div>
    )
} 

export default Random;