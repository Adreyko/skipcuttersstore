import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRentProduct } from '../../../../../redux/actions/rentProductActions'
const RentProductDetail = () => {


  const dispatch = useDispatch()
  const { productId } = useParams()

  const rentProduct = useSelector((state) => state.rentProduct)
  const {description,image,price,title} = rentProduct

  const fetchProductsRentDetail = async () => {
    const res = await axios.get(`https://cactusscooterapi.azurewebsites.net/api/ScooterProduct/${productId}`)
    
      .catch((err) => {
        console.log('err', err)
      })
 
    console.log(res.data)
    dispatch(setSelectedRentProduct(res.data));

  }

  useEffect(() => {

    if (productId && productId !== '') fetchProductsRentDetail();

  }, [productId])

  
  return (
    <div className='pt-28  flex items-center '>
      <img className='w-[800px]' src={image} alt='scooter' />
      <div className='flex flex-col justify-center items-center max-w-[30%]'>
        <h1>{title}</h1>
        <h1>{description}</h1>
      </div>
    </div>
  )
}

export default RentProductDetail