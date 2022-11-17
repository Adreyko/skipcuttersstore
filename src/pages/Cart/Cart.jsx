import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'




const Cart = () => {

  const cartItem = useSelector(state => state.cart)

  const renderCart = cartItem.map(item => {
    return (
      <CartItem key={item.id} image={item.image} title={item.title} price={item.price} id={item.id} />
    )
  })

 


  return (
    <div>
      <h1>Total Cost:</h1>
      {renderCart}
    </div>

  )
}

export default Cart