
import CardComponent from './Card';
import {  useSelector } from 'react-redux';



function Product() {
  const {data:product}=useSelector(state=>state.Products)
  const {status}=useSelector(state=>state.Products)

  return (<>
    
      {status==="pending" &&  <h1 className='text-center pt-20'>Loding...!</h1>}

        {status==="rejected" &&  <h1>something wrong please try again...!</h1>}
        {status==="success" &&  <CardComponent product={product}/>}
  
    
  </>
  )
}

export default Product