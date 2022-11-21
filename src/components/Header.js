import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReusableModal from './modals/ReusableModals/ReusableModal'
import FormModal from './modals/formModal'
import { useSelector } from 'react-redux'
import ReusableCartModal from './modals/ReusableModals/ReusableCartModal'
import CartItemModal from './modals/CartItemsModal/CartItemsModal'
import CartItemsModal from './modals/CartItemsModal/CartItemsModal'


const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const [hovered, setHovered] = useState(false)
    const cartItems = useSelector(state=>state.cart)

  const countCartItems = cartItems.length
    return (
        <>
            <header className=' flex items-center justify-between bg-some sm:h-24 fixed  w-[100%] h-[100px]  sm:flex py-8 px-16 text-black text-xl '>
                <nav className=''>
                    <ul className='flex justify-between  items-center  mt-[5px]   '>
                        <li className='flex items-center justify-center mr-[50px]'>
                            <Link className='font-bold text-2xl ' to='/'> Cactus </Link>
                            <img className='h-16' src=".//images/scotter.png" alt="" />
                        </li>
                        <li className='active:text-slate-400 mr-[20px]'><Link to='/about'> About </Link></li>
                        <li className=' active:text-slate-400 mr-[20px] '><Link >Map</Link></li>
                        <li><Link to='/cart'>Partners</Link></li>
                    </ul>
                </nav>
                <div>
                    <ul className='flex  items-center justify-between  w-[250px] mt-[5px] '>
                        <li
                            className='cursor-pointer text-[30px]' onClick={() => setShowModal(true)}><i className="ri-mail-line"></i>
                        </li>
                        <li className='flex' onMouseEnter={() => setHovered(true)} > 
                         
                            <Link to='/cart'><i className=" active:text-slate-400 ri-shopping-cart-2-line text-[30px] ">
                            </i>
                            </Link>
                            <h1 className=' flex justify-center items-center relative right-3 text-[15px] text-white bg-gray-900 rounded-lg bottom-2 h-5 px-1 '>{countCartItems}</h1>
                        </li>
                        <li
                            className='border-2 hover:bg-black  hover:text-some border-black rounded-[40px] p-2 px-[30px]'><Link to='/logIn'> Login </Link>
                        </li>
                    </ul>
                </div>
            </header>

            <ReusableCartModal visible={hovered && cartItems.length > 0} setHovered={setHovered} >
                <CartItemsModal setHovered={setHovered}/>
            </ReusableCartModal>
           
            <ReusableModal visible={showModal} setShowModal={setShowModal}>
                <FormModal  />
            </ReusableModal>
        </>
    )
}

export default Header