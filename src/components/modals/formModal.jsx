import React, { useState } from 'react'
import axios from 'axios';
const FormModal = () => {

    const [callAgreed, setCallAgreed] = useState(false)
    const [helpInfo, setHelpInfo] = useState({
        name: '',
        phoneNumber: ''
    })
    const agreeChange = () => {
            setCallAgreed(prev => !prev)
    }


    const url = '';
    const handleChange = (event) => {
        setHelpInfo(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }

    const submit = async (e) => {
        e.preventDefault()
        await axios.post(url, {
            name: helpInfo.name,
            phone: helpInfo.phone
        })



    }

    return (

        <div className='bg-white w-56 p6 rounded shadow-sm'>
            {callAgreed ? <div>

                <h1>Дякуємо, невдовзі вам зателефонує менджер</h1>
                <i class="ri-home-4-line"></i>
                </div>
                 : 
                <form onSubmit={(e) => submit(e)}>

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

                    value={helpInfo.phoneNumber}

                />
                <button onClick={() => agreeChange()} type='submit' className='bg-black-500 w-full text-white-500 py-2 rounded-5 hover:bg-black-900 transition-colors'> Подзвоніть мені</button>
            </form>}

        </div>

    )
}

export default FormModal