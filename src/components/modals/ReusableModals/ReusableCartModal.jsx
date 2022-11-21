import React from 'react'

const ReusableCartModal = ({ visible, setHovered, children }) => {

    if (!visible) return null

    return (
        <div onClick={() => setHovered(false)} onMouseLeave={()=>setHovered(false)} className='fixed   z-10 top-10   right-2 flex justify-center items-center  '>
            <div onClick={e => e.stopPropagation()} className=' p-10 rounded shadow-sm z-20 '>
                {children}
            </div>
        </div>
    )
}

export default ReusableCartModal