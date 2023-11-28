import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../store/ProductSlice';

function Home() {
    const dispatch=useDispatch();
    const nav=useNavigate()
    useEffect( () => {
        dispatch(getProducts())
        }, []);
  return (
    <>

    <div className=' text-center pt-8 h-screen w-full bg-gradient-to-br from-amber-200 to-teal-400 items-center'>
    <h1 className='pb-8'> Exclusive Deals  </h1>
      <h2> Pick your choice & save upto 20%  .... </h2>

        <div className='flex flex-row justify-evenly h-screen w-full bg-gradient-to-br from-amber-200 to-teal-400 items-center pb-32'>
            {/* <img src="https://icons8.com/icon/KKx3U64bUeAr/geyser" alt="image"/> */}
            <button onClick={()=>{nav("/Electronics")}} className='h-16 w-32 rounded-lg  border-transparent  bg-gradient-to-br from-lime-300 to-teal-500 hover:bg-sky-300 font-bold font-sans'> Electronics</button>
        <button onClick={()=>{nav("/Clothes")}}className='h-16 w-32 rounded-lg  border-transparent  bg-gradient-to-br from-lime-300 to-teal-500 hover:bg-sky-300 font-bold font-sans' > Clothes</button>
        <button onClick={()=>{nav("/Furniture")}} className='h-16 w-32 rounded-lg  border-transparent  bg-gradient-to-br from-lime-300 to-teal-500 hover:bg-sky-300 font-bold font-sans' > Furniture</button>
        <button onClick={()=>{nav("/shoes")}}className='h-16 w-32 rounded-lg  border-transparent  bg-gradient-to-br from-lime-300 to-teal-500 hover:bg-sky-300 font-bold font-sans' > shoes</button>
        <button onClick={()=>{nav("/Miscellaneous")}} className='h-16 w-32 rounded-lg  border-transparent  bg-gradient-to-br from-lime-300 to-teal-500 hover:bg-sky-300 font-bold font-sans' > Miscellaneous</button>
        
        </div>
    </div>
    
    </>
  )
}

export default Home