import {  useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import React from 'react'
import Button from 'react-bootstrap/Button';
import { Add } from '../store/CartSlice';


function Electronics() {

  const {data}=useSelector(state=>state.Products)
    
  const dispatch=useDispatch();
  return (<div className='flex flex-row justify-start items-start flex-wrap flex-grow'> 
        {data && data.map((card_data)=>{
            
            return(
                <>
                { card_data.category.name==="Electronics" && <div className='col-md-4 p-5 flex flex-col justify-center items-center text-center '>
                
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

export default Electronics