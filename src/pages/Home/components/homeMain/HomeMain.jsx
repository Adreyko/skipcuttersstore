import React from 'react'

const HomeMain = () => {

    const style = {
        background: `url('https://cdn.pixabay.com/photo/2021/08/25/09/49/woman-6572974_960_720.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    }

    return (
        <div
            style={style}
            className='sm:h-[calc(100vh-5rem)]  w-full h-[100px] '>
                <div className='flex justify-center items-center sm:h-[calc(100vh-5rem)]   flex-col text-indigo-900 text-5xl  '>
            <h2 className='animate-pulse'>Some text</h2>
            <h4 className='animate__animated animate__backInUp'>Test</h4>
            <h4>By ANDRIY SOROKA</h4>
            </div>
        </div>
       

    )
}

export default HomeMain
