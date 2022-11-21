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
console.log(setCallAgreed)


    const handleChange = (event) => {
        setHelpInfo(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }
  




  

    return (

        <div className='bg-some w-56 p6 rounded shadow-sm'>
            {!callAgreed ?    <form >
                <label className='text-gray-700'>Ім'я</label>
                <input
                    className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4 rounded'
                    type='text'
                    onChange={handleChange}
                    name='name'
                    value={helpInfo.name}
                />
                <label className='text-gray-700'>Номер телефону</label>
                <input
                    className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4'
                    type='tel'
                    onChange={handleChange}
                    name='phoneNumber'
                    value={helpInfo.email}
                />
                <button onClick={(e) => agreeChange(e)} type='submit' className='bg-black-500 w-full text-white-500 py-2 rounded-5 hover:bg-black-900 transition-colors'> Ел.Адреса</button>
            </form> : 'huy'}
         
        </div>

    )
}

export default FormModal