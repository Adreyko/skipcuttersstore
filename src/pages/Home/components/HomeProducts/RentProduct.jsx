import React from 'react'

const RentProduct = ({ title, description, price, image, scooterType, isAvailable }) => {
  console.log(title)
  return (

    
      <>
        <div className='mt-12 flex items-center justify-center  font-monoton   '>
          <div>
            <img className=' w-[200px] p-6' alt='pic' src={`${image}`} />
  
            <h1 className=' flex w-[200px] items-center justify-center' >{title}</h1>
            <p className=' text-indigo-600 flex items-center justify-center'>{price}$</p>
            
          </div>
        </div>
      
      </>
   
  





  )
}

export default RentProduct