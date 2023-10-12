import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AllProducts from './AllProducts'

 

function Products() {
//const navigate = useNavigate()
 
const [singleproduct, setSingleProduct] = useState()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => 
        setSingleProduct(res))
  }, [])
 
  const params = useParams()
  const id= params.id
 




  if (!singleproduct) {
    return <div>Loading...</div>
  }

  
  
return ( <div>
        {<img src={singleproduct[id].image } width='100' />}  <div>{  singleproduct[id].title } <div>{singleproduct[id].price} </div></div> 
   

    
  </div>
 



)

}
export default Products