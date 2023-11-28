import {  useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import React from 'react'
import Button from 'react-bootstrap/Button';
import { Add } from '../store/CartSlice';


function Clothes() {

  const {data}=useSelector(state=>state.Products)
    
  const dispatch=useDispatch();
  return (<div className='flex flex-row justify-start items-start flex-wrap flex-grow bg-body-tertiary   bg-gradient-to-r from-amber-200 to-teal-400 '> 
        {data && data.map((card_data)=>{
            
            return(
                <>
                { card_data.category.name==="Clothes" && <div className='col-md-3 p-3 flex flex-col justify-center items-center text-center max-h-84 overflow-hidden'>
                
                <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={card_data.images[0]} className='h-92'/>
                <Card.Body>
                <Card.Title>{card_data.title}</Card.Title>
                <Card.Text>{card_data.price}</Card.Text>
                <Card.Text>{card_data.description}</Card.Text>
                <Button  className=' bg-amber-200 rounded-lg p-4' variant="primary" onClick={()=>card_data && dispatch(Add(card_data))}>Add to Cart</Button>
                </Card.Body>
                </Card>
                </div>
                }

                </>
            )
            
        })}
  </div>
  );
}

export default Clothes