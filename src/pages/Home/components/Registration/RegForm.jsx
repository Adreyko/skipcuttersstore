import React from 'react'
import { Link } from 'react-router-dom'
const RegForm = () => {
   
  return (
    <form className=" flex  h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 rext-gray-800 antialiased sm:pb-[300px]">
    <div className="mx-auto max-w-md">
    <span className='text-2xl font-light flex justify-center text-center'>Реєстрація</span>
        <div className='mt-4 bg-white shadow-md rounded-lg'>
        
            <div className="h-2 bg-red-400 rounded-t-md"></div>
            <div className="px-8 py-6">
                <label className='block font-semibold'>Логін </label>
                <input type="text" placeholder='Логін' className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none  focus:outline-none focus:ring-1 focus:ring-red-400 rounded-md' />
                <label className='block mt-3 font-semibold'>Ел.Адреса</label>
                <input type="email" placeholder='ел.адреса' className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none  focus:outline-none focus:ring-1 focus:ring-red-400 rounded-md' />
                <label className='block mt-3 font-semibold'>Пароль</label>
                <input type="password" placeholder='пароль' className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none  focus:outline-none focus:ring-1 focus:ring-red-400 rounded-md' />
                
                <div className="flex justify-between items-baseline">
                    <button type='submit' className='mt-4 bg-red-500 text-white py-2 px-6 rounded-md red:bg-indigo-600'>Увійти</button>
                    <Link  className='px-2' to ='/logIn'>У мене є аккаунт</Link>
                </div>
            </div>
        </div>
    </div>
</form>
  )
}

export default RegForm