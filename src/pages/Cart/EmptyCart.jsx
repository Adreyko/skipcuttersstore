import React from 'react'

const EmptyCart = () => {
  return (
  <div className='mt-20 flex justify-center items-center  flex-col'>
     <h1 className=' text-some text-3xl '>Your shopping cart is empty</h1>
     <img src='./images/emptycart.png ' alt='emoty' className='mt-20'/>
     <button className='absolute bottom-8 left-36 hover:text-blue-400 font-bold text-xl '> ← Back to shopping</button>
  </div>
   
  )
}

export default EmptyCart