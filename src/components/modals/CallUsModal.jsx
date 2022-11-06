import React from 'react'

const CallUsModal = ({ visible, setShowModal, children }) => {

    if (!visible) return null

    return (
        <div onClick={() => setShowModal(false)} className='fixed inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div onClick={e => e.stopPropagation()} className='bg-white p-10 rounded shadow-sm z-20'>
                {children}
            </div>
        </div>
    )
}

export default CallUsModal