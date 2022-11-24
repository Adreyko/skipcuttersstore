import React from 'react'
import { Link } from 'react-router-dom'
import RentProductDetail from './RentProductDetail'


const RentProduct = ({ title, description, price, image, scooterType, isAvailable,id }) => {
  
  return (

    
      <>
        <div className='mt-12 flex items-center justify-center  font-monoton   '>
          <div className='flex flex-col items-center justify-center'>
            <img className='flex items-center justify-center w-[400px] p-6' alt='pic' src={`${image}`} />
            <h1 className=' flex w-[200px]  items-center justify-center mt-2' >{title}</h1>
            <p className=' text-indigo-600 flex items-center justify-center mt-2'>{price}$ <span className='text-black ml-1'>/month</span></p>
            <Link to={`/ScooterProduct/${id}`}><button className='w-[200px] mt-1 text-some flex items-center justify-center cursor-pointer border-2 rounded-xl border-some hover:border-white hover:bg-some hover:text-white'>Rent</button></Link>
          </div>
        </div>
      
      </>     

  )
}

export default RentProduct