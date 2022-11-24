import React from 'react'

const CartItem = ({ price, title, image }) => {
  return (
    <div className='flex p-4 items-center'>
      <img className='w-[100px]' src={`${image}`}  alt='pic'/>
      <p className='ml-4'>{title}</p>
      
      <p className='ml-4 text-indigo-400'>{price}$</p>
    </div>
  )
}

export default CartItem