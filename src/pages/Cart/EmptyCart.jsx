import React from 'react'
import { useNavigate } from 'react-router-dom'
const EmptyCart = () => {
  const history = useNavigate()
  return (
  <div className='mt-20 flex justify-center items-center  flex-col'>
     <h1 className=' text-some text-3xl '>Your shopping cart is empty</h1>
     <img src={process.env.PUBLIC_URL + '/images/emptygray.png'} alt='emoty' className='mt-20'/>
     <button className='absolute bottom-8 left-36 hover:text-blue-400 font-bold text-xl  ' onClick={()=>history(-1)}> ← Back to shopping</button>
  </div>
   
  )
}

export default EmptyCart 