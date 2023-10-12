import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function AllProducts() {
  const navigate = useNavigate()
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => setProducts(res))
  }, [])

  if (!products) {
    return <div>Loading...</div>
  }

  return <div>
    <h1>products</h1>

    {products.map((item,index) => {
      return (<div onClick={()=> navigate('/allproducts/'+index)} > <img src={item.image } width='100' /> { item.tite } <div> {'Product Detail :'+ item.description}</div>{'price:'+ item.price} </div>      )
    })} 
  </div>
}

export default AllProducts