import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../redux/actions/productActions'
import { addProduct } from '../../redux/actions/productActions'

const ItemModal = ({ setShowModal, id, title, price, image, product,description }) => {
  const [added, setAdded] = useState(false)


  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()



  const toggleAdded = () => {
    setAdded(prevAdd => !prevAdd)
  }



  return (
    <div>
      <img className=' w-[100px] p-2 ' alt='pic' src={`${image}`} />
      <h1 className=' flex w-[100px] items-center justify-center' >{title}</h1>
      <p className=' text-indigo-600'>{price}$</p>
      <p className='w-[80px]'>sdadada</p>
      <button
        onClick={toggleAdded} >{added ? <i onClick={() => dispatch(deleteProduct(id))} className="ri-add-circle-fill"></i> : <i onClick={() => dispatch(addProduct(product))} className="ri-add-circle-line"></i>}
      </button>
    </div>
  )
}

export default ItemModal