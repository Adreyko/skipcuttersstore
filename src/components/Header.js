import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CallUsModal from './modals/CallUsModal'
import FormModal from './modals/formModal'
const Header = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <header className='bg-red-700 sm:h-20   w-[100%] h-[100px] text-gray-100 sm:flex justify-between'>

                <Link className='font-bold p-5 ml-[200px]' to='/'> Logo </Link>

                <nav>

                    <ul className='flex justify-between p-5 w-96 mr-[250px] '>

                        <li className='p-2 active:text-slate-400 hover:underline'><Link to='/about'> Про нас </Link></li>

                        <li className='p-2 active:text-slate-400  hover:underline'><Link to='/logIn'> Увійти </Link></li>

                        <li><Link to='/cart'><i className=" active:text-slate-400  p-2 ri-shopping-cart-2-line text-[25px] ">

                        </i></Link></li>

                        <li className='cursor-pointer border-2  p-1 px-[10px] hover:bg-slate-100 hover:text-red-500 rounded-[200px]' onClick={() => setShowModal(true)}>Подзвоніть мені</li>

                    </ul>
                </nav>
            </header>


            <CallUsModal visible={showModal} setShowModal={setShowModal}>

                <FormModal />

            </CallUsModal>
        </>
    )
}

export default Header