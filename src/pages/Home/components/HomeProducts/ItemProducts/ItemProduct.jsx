import React, { useState } from 'react'
import ReusableModal from '../../../../../components/modals/ReusableModals/ReusableModal';
import ItemModal from '../../../../../components/modals/ItemModal'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../../../redux/actions/productActions';
import { addProduct } from '../../../../../redux/actions/productActions';




const ItemProduct = ({ title, image, price, id, product, deviceModel }) => {

  const itemCart = useSelector(state => state.cart)

  const [showModal, setShowModal] = useState(false)



  function inCartButton() {
    const alredyInCart = itemCart.some(item => item.id == id)
    if (alredyInCart) {
      return <h1 className='flex items-center justify-center mt-1 text-green-400 cursor-pointer ' onClick={() => setShowModal(true)} >Added<i className="ri-checkbox-circle-fill"></i></h1>
    } else {
      return <h1 className='text-some flex items-center mt-1 justify-center cursor-pointer border-2 rounded-xl border-some hover:border-white hover:bg-some hover:text-white' onClick={() => setShowModal(true)}>In cart<i className="ri-checkbox-circle-line"></i></h1>
    }
  }




  return (
    <>
      <div className='mt-12 flex items-center justify-center  font-monoton   '>
        <div>
          <img className=' flex items-center justify-center w-[250px] p-6 ' alt='pic' src={`${image}`} />

          <h1 className=' flex w-[200px] items-center justify-center mt-2' >{title}</h1>
          <p className=' text-indigo-600 flex items-center justify-center mt-2'>{price}$</p>
          {inCartButton()}
        </div>
      </div>
      <ReusableModal visible={showModal} setShowModal={setShowModal}>
        <ItemModal
          deviceModel={deviceModel}
          title={title}
          image={image}
          price={price}
          product={product}
          id={id}
          setShowModal={setShowModal}
           />
      </ReusableModal>
    </>
  )
}


export default ItemProduct