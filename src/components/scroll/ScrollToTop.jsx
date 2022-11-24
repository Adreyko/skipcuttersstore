import React, { useState, useEffect } from 'react'
import { className } from '../../utils/className';

export const ScrollToTop = () => {
    const [isVisable, setIsVisable] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisable(true)
        } else {
            setIsVisable(false)
        }
    };
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    };


    useEffect(()=>{
        window.addEventListener('scroll',toggleVisibility)


        return () =>{
            window.removeEventListener('scroll',toggleVisibility)
        }
    },[])

    return(
        <div className='fixed bottom-2 right-2'>
            <button  type='button' onClick={scrollToTop} className={className(
                isVisable ? 'opacity-100' : 'opacity-0',
                'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-some transition-opacity hover:bg-yellow-700 focus:outline-none '
            )}><h1 className='h-6 w-6' aria-hidden='true'>↑</h1></button>

        </div>
    )
};