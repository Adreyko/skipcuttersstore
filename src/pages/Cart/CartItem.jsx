import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../redux/actions/productActions'
import { incrementProduct } from '../../redux/actions/productActions'
import { decrementProduct } from '../../redux/actions/productActions'

const CartItem = ({ title, image, price, id,amount}) => {
  const cartItem = useSelector(state => state.cart)
  
  const dispatch = useDispatch()
 const productPrice = price * amount


  return (
    <div className='flex px-48 mt-24 text-2xl items-center  '>

      <img className='w-[100px]  ' src={`${image}`} alt='pic' />
      <h1 className='ml-16 w-[480px] '>{title}</h1>
      <div className=' flex items-center'>
        <div className='flex ml-16 items-center text-4xl'>
          <button onClick={()=>dispatch(decrementProduct(id))}  className='mr-[8px] '>-</button>
          <input
            type='number'
            value={amount}
            className='h-8 w-12 flex text-[20px]  text-center border-2 ' />
          <button onClick={()=>dispatch(incrementProduct(id))} className=' ml-[8px] ' >+</button>
        </div>
        <p className='ml-16 mr-12 text-indigo-400'>{productPrice.toFixed(2)}$</p>
        <button onClick={() => dispatch(deleteProduct(id))}><i className="ri-delete-bin-5-line text-[40px]  "></i></button>
      </div>


    </div>

  )
}

export default CartItem