import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../redux/actions/productActions'

const CartItem = ({title,image,price,id}) => {
    const cartItem = useSelector(state=> state.cart)
    const dispatch = useDispatch()



  return (
    <div className='flex  '>
      <h1>{title}</h1>
      <img className='w-[100px]' src={`${image}`}  alt='pic'/>
      <p>{price}$</p>
      <button onClick={()=>dispatch(deleteProduct(id))}>delete</button>
    
    </div>

  )
}

export default CartItem