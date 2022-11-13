import React from 'react'

const HomeMain = () => {



    return (
        <div className='sm:h-[calc(100vh-8rem)] items-center  w-full   bg-some font-monoton '>
            
            <div className='  flex justify-between items-center max-w-[1600px]  w-[100%] px-32 '>
                <div className='max-w-[500px] mt-[100px]  '>
                    <h1 className='text-7xl'>Discover City With Electro <span className='border-b-4 border-orange-600'>Scooter</span></h1>
                    <button className='mt-8 bg-orange-500 text-white rounded-[40px] py-4 px-16'>RENT NOW</button>
                </div>
                
                <div><img className='max-w-[500px] min-w-[500px] mt-[100px]' src='./images/boy.png' /></div>
            </div>
        </div>

    )
}

export default HomeMain
