import React from 'react'
import {useSelector } from 'react-redux/es/hooks/useSelector'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { remove } from '../store/CartSlice';
function Cart() {
    const productcart=useSelector(state=> state.Cart)
    const dispatch=useDispatch()
    
  return (
    <div className='flex flex-row justify-start items-start flex-wrap flex-grow bg-body-tertiary  bg-gradient-to-r from-amber-200 to-teal-400 min-h-screen max-h-full'>
      <div className=' flex justify-center items-center w-full font-bold font-serif'>
        <h1>Cart</h1>
      </div>
        {productcart && productcart.map((card_data)=>{
            
            return(
                <>
                <div className='col-md-3 p-3 flex flex-col justify-center items-center text-center max-h-84'>
                
                <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={card_data.images[0]} className='h-92'/>
                <Card.Body>
                <Card.Title>{card_data.title}</Card.Title>
                <Card.Text>{card_data.price}</Card.Text>
                <Card.Text>{card_data.description}</Card.Text>
                <Button  className=' bg-amber-200 rounded-lg p-4' variant="primary" onClick={()=>card_data && dispatch(remove(card_data.id))}>Delete from Cart</Button>
                </Card.Body>
                </Card>
                </div>

                </>
            )
            
        })}
    </div>
  )
}

export default Cart