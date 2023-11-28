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
    <div className='flex flex-col justify-center'>
        
        <button onClick={()=>{nav("/Electronics")}}> Electronics</button>
        <button onClick={()=>{nav("/Clothes")}}> Clothes</button>
        <button onClick={()=>{nav("/Furniture")}}> Furniture</button>
        <button onClick={()=>{nav("/shoes")}}> shoes</button>
        <button onClick={()=>{nav("/Miscellaneous")}}> Miscellaneous</button>
        
    </div>
  )
}

export default Home