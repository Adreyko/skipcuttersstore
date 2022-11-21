/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'





const RegForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [loginDirty, setLoginDirty] = useState(false)
    const [emailError, setEmailError] = useState('Ел. адреса не може бути пустою')
    const [passwordError, setPasswordError] = useState('Пароль не може бути пустим')
    const [loginError, setLoginError] = useState('Логін не може бути пустим')
    const [buttonDisabled,setButtonDisabled]  = useState(true)





const emailHandle = (e) =>{
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(e.target.value).toLowerCase())){
        setEmailError('Некорректний емейл')
    }else{
        setEmailError('')
    }
}

const passwordHandle = (e) =>{
    setPassword(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 8){
        setPasswordError('Пароль повинен мати не менше 3 і не більше 8 символів')
    }
    else{
        setPasswordError('')
        setButtonDisabled(false)
    }
}

const loginHandle = (e) =>{
    setLogin(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 8){
        setLoginError('Логін повинен мати не менше 3 і не більше 8 символів')
    }
    else{
        setLoginError('')
    }
}




    const blurHandle = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'login':
                setLoginDirty(true)
                break
        }
    }















    return (
        <form className=" flex  h-[calc(100vh)] flex-col justify-center overflow-hidden bg-some py-6 px-8 sm:py-12 text-gray-800 antialiased sm:pb-[200px]">
            <div className="mx-auto max-w-md">
                <span className='text-2xl font-light flex justify-center text-center'>Реєстрація</span>
                <div className='mt-4 bg-white shadow-md rounded-lg'>
                    <div className="h-2 bg-yellow-900 rounded-t-md"></div>
                    <div className="px-8 py-6">
                        <label className='block font-semibold'>Логін</label>
                        {(loginDirty && loginError) && <div className='text-red-500 w-[257px]'>{loginError}</div>}
                        <input onChange={(e)=>loginHandle(e)} value={login} onBlur={e => blurHandle(e)} type="text" name='login' placeholder='Логін' className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none  focus:outline-none focus:ring-1 focus:ring-red-400 rounded-md' />
                        {(emailDirty && emailError) && <div className='text-red-500 w-[257px]'>{emailError}</div>}
                        <label className='block mt-3 font-semibold'>Ел.Адреса</label>
                        <input onChange={(e)=>emailHandle(e)} value={email} onBlur={e => blurHandle(e)} type="email" name='email' placeholder='ел.адреса' className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none  focus:outline-none focus:ring-1 focus:ring-red-400 rounded-md' />
                        {(passwordDirty && passwordError) && <div className='text-red-500 w-[257px] '>{passwordError}</div>}
                        <label className='block mt-3 font-semibold'>Пароль</label>
                        <input onChange={(e)=>passwordHandle(e)} value={password} onBlur={e => blurHandle(e)} type="password" name='password' placeholder='пароль' className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none  focus:outline-none focus:ring-1 focus:ring-red-400 rounded-md' />
                        <div className="flex justify-between items-baseline">
                            <button disabled={buttonDisabled} type='submit' className='mt-4 bg-yellow-900 disabled:bg-gray-300 text-white py-2 px-6 rounded-md red:bg-indigo-600'>Увійти
                            </button>
                            <Link className='px-2' to='/logIn'>У мене є аккаунт</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default RegForm