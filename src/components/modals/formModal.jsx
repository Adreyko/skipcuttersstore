import React, { useState } from 'react'
import axios from 'axios';
const FormModal = () => {

    const [callAgreed, setCallAgreed] = useState(false)
    const [helpInfo, setHelpInfo] = useState({
        name: '',
        email: ''
    })
    const url = '';
    const agreeChange = async (e) => {  
        e.preventDefault()
        await axios.post(url, {
            name: helpInfo.name,
            email: helpInfo.email
        })
        setCallAgreed(prev => !prev)
    }



    const handleChange = (event) => {
        setHelpInfo(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }
  




  

    return (
        
       
        <div className='bg-white max-w-[400px] font-monoton border-4 border-some p-8 px-6 flex flex-col items-center justify-center rounded-2xl'>
            {!callAgreed ?    <form className='flex flex-col items-center justify-center ' >
                <label className='text-gray-700'>Name</label>
                <input
                    className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4 rounded'
                    type='text'
                    onChange={handleChange}
                    name='name'
                    value={helpInfo.name}
                />
                <label className='text-gray-700'>Email</label>
                <input
                    className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4'
                    type='email'
                    onChange={handleChange}
                    name='email'
                    value={helpInfo.email}
                />
                <button onClick={(e) => agreeChange(e)} type='submit' className='hover:bg-some w-full rounded-xl bg-white border-2 border-some hover:text-white text-some flex justify-center text-white-500 py-2 rounded-5 hover:bg-black-900 transition-colors'> Sent me latter</button>
            </form> : ''}
         
        </div>
        
    )
}

export default FormModal