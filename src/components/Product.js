
import CardComponent from './Card';
import {  useSelector } from 'react-redux';



function Product() {
  const {data:product}=useSelector(state=>state.Products)
  const {status}=useSelector(state=>state.Products)

  console.log(product)

  return (<>
    
      <CardComponent product={product}/>
  
    
  </>
  )
}

export default Product