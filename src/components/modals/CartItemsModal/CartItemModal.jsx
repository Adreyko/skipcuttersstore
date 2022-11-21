import React from 'react'

const CartItem = ({ price, title, image }) => {
  return (
    <div>
      <p>{title}</p>
      <img className='w-[100px]' src={`${image}`} />
      <p>{price}$</p>
    </div>
  )
}

export default CartItem