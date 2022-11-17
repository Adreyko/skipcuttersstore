import React, { useState } from 'react'
import ReusableModal from '../../../../components/modals/ReusableModals/ReusableModal';
import ItemModal from '../../../../components/modals/ItemModal'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../../redux/actions/productActions';
import { addProduct } from '../../../../redux/actions/productActions';




const ItemProduct = ({ title, image, price, id, product,description }) => {


  const [added, setAdded] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [hovered, setHovered] = useState(false)
  const dispatch = useDispatch()



  function cartIcon() {
    if (added) {
      return <i onClick={() => dispatch(deleteProduct(id))} className="ri-add-circle-fill"></i>
    } else if (hovered) {
      return <h1  className='text-red-500' onClick={() => setShowModal(true)}>Detail</h1>
    }

  }
  console.log(added)


  return (
    <>
      <div className='mt-12 flex items-center justify-center cursor-pointer'>
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <img className=' w-[100px] p-2 border-2 border-black ' alt='pic' src={`${image}`} />
          {cartIcon()}
          <h1 className=' flex w-[100px] items-center justify-center' >{title}</h1>
          <p  className=' text-indigo-600'>{price}$</p>
        </div>
      </div>
      <ReusableModal visible={showModal} setShowModal={setShowModal}>
        <ItemModal description={description} title={title} image={image} price={price} product={product} id={id} />
      </ReusableModal>
    </>
  )
}


export default ItemProduct