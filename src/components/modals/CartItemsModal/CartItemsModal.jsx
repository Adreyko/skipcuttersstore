import React from 'react'
import { useSelector } from 'react-redux'
import CartItemModal from './CartItemModal'

const CartItemsModal = ({ setHovered }) => {
  const cartItems = useSelector(state => state.cart)

  const renderItem = cartItems.map(item => {
    return (
      <CartItemModal price={item.price} title={item.title} image={item.image} />
    )
  })


  return (
    <div className='border-2 bg-white border-blue-400 rounded-xl p-12 max-h-[400px] max-w-[400px] overflow-auto '>
      <button className='text-red-900 relative right-0 ' onClick={() => setHovered(false)}>X</button>
      <div className='flex font-semibold  justify-between '>
          <h1 className=' text-4xl '>Shopping Cart</h1>
        </div>
        <hr className='bg-some h-[1px] border-none mt-2 mb-2' />
      <div className='' >

        {renderItem}
      </div>
    </div>

  )
}

export default CartItemsModal