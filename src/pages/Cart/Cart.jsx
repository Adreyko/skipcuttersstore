import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import { deleteAllProduct } from '../../redux/actions/productActions'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

  const cartItem = useSelector(state => state.cart)
const history = useNavigate()
const dispatch = useDispatch()

  const renderCart = cartItem.map(item => {
    return (
      <CartItem key={item.id} image={item.image} title={item.title} price={item.price} id={item.id} amount={item.amount} />
    )
  })

  const totalPrice = () => {
    const updateArr = []
    cartItem.forEach(element => {
      updateArr.push(element.price * element.amount)
    });


    const totalPrice = updateArr.reduce((total, cur) => {
      return total + cur
    })
    return totalPrice.toFixed(2)


  }









  return (


    <div className='py-32 '>
      <div className='flex font-semibold px-48 justify-between '>
        <h1 className=' text-4xl '>Shopping Cart</h1>
        <h1 className='text-2xl'>{cartItem.length} Items</h1>
      </div>
      <hr className='bg-some h-[1px] border-none mt-2 mb-2' />

        {
          cartItem.length > 0 ?
<div>

<button className='text-blue-300 absolute right-52' onClick={()=>dispatch(deleteAllProduct())}>Delete all</button>
{renderCart}
<div className='fixed 
       inset-x-0
       bottom-0
       flex justify-between bg-white h-32 px-48  items-center text-xl'>
  <div className='font-bold'>
    <button className=' hover:text-blue-400 ' onClick={()=>history(-1)}> ← Back to shopping</button>
  </div>
  <div className='font-bold text-xl'>
    <h1>TOTAL PRICE:{totalPrice()}$</h1>
  </div>
  <div>
    <button className='  text-blue-400 font-bold hover:bg-blue-400 hover:text-white p-2 px-4 rounded-xl '>Order</button>
  </div>
  </div>
  </div>
  : <EmptyCart/>
        }


    
    </div>

  )
}

export default Cart