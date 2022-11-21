import React from 'react'
import { Link } from 'react-router-dom'










const LoginForm = () => {
    return (
        
        
        <form className=" flex  h-[calc(100vh)] flex-col justify-center overflow-hidden bg-some py-6 sm:py-12 rext-gray-800 antialiased sm:pb-[250px]">
            <div className="mx-auto max-w-md">
                <span className='text-2xl font-light'>Увійдіть у ваш аккаунт</span>
                <div className='mt-4 bg-white shadow-md rounded-lg'>
                    <div className="h-2 bg-yellow-900 rounded-t-md"></div>
                    <div className="px-8 py-6">
                        <label className='block font-semibold'>Ел.Адреса</label>
                        <input type="text" placeholder='логін або ел.адреса' className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none  focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md' />
                        <label className='block mt-3 font-semibold'>Пароль</label>
                        <input type="password" placeholder='пароль' className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none  focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md' />
                        <div className="flex justify-between items-baseline">
                            <button type='submit' className='mt-4 bg-yellow-900 text-white py-2 px-6 rounded-md hover:bg-red-600'>Увійти</button>
                            <Link className='px-2' to='/registration'>Зареєструватись</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default LoginForm