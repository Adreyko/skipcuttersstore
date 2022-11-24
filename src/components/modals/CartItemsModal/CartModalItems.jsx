import React from 'react'
import { useSelector } from 'react-redux'
import CartItemModal from './CartIModal'

const CartItemsModal = ({ setHovered }) => {
  const cartItems = useSelector(state => state.cart)

  const renderItem = cartItems.map(item => {
    return (
      <CartItemModal key={item.id} price={item.price} title={item.title} image={item.image} />
    )
  })


  return (
    <div className='border-2 bg-white border-some rounded-xl  max-h-[400px] max-w-[400px] overflow-auto font-monoton '>
     
      <div className='flex font-semibold  justify-between pt-8 p-2  '>
          <h1 className=' text-4xl '>Shopping Cart</h1>
          <button className='text-2xl text-some' onClick={() => setHovered(false)}>X</button>
        </div>
        <hr className='bg-some h-[1px] border-none mt-2 mb-2 '  />
      <div className='' >

        {renderItem}
      </div>
    </div>

  )
}

export default CartItemsModal