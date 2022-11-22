import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../redux/actions/productActions'
import { addProduct } from '../../redux/actions/productActions'

const ItemModal = ({ setShowModal, id, title, price, image, product, deviceModel }) => {
 


  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()




 



  const itemAction = () => {
    const alreadyInCart = cart.some(item => item.id === id)
    if (alreadyInCart) {
      return <h1 onClick={() => dispatch(deleteProduct(id))} className="">Delete from cart</h1>
    } else {
      return <h1 onClick={() => dispatch(addProduct(product))} className="">Add to cart</h1>
    }
  }




  return (
    <div className='bg-white  border-4 border-some p-8 px-12 flex flex-col items-center justify-center rounded-2xl'>
      <div onClick={() => setShowModal(false)} className='relative right-60  bg-blue-400 p-4 rounded-tly-full text-white clip-path-mypolygon rounded-tl-[10px] px-6 '>
        <button className='relative right-3 bottom-2 text-xl '>х</button>
      </div>
      <img className=' w-[200px] p-2 ' alt='pic' src={`${image}`} />
      <h1 className=' flex w-[200px] items-center justify-center mt-2  text-center ' >{title}</h1>
      <p className='w-[200px] text-center pb-4'>
        {deviceModel}</p>
      <div className='flex items-center justify-between w-[500px] border-t-4 pt-4  '>

        <p className=' text-black-600 font-extrabold text-blue-400 pl-2'>{price}$</p>
        <button className='bg-white p-1 rounded-xl  mt-2 px-4 text-blue-400 text-xl hover:text-white font-bold hover:bg-blue-400'>
          {itemAction()}
        </button>
      </div>
    </div>
  )
}

export default ItemModal