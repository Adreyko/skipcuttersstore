/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../../../redux/actions/productActions'
import ItemProduct from '../HomeProducts/ItemProducts/ItemProduct'
import { setRentProducts } from '../../../../redux/actions/rentProductActions'
import RentProduct from '../HomeProducts/RentProducts/RentProduct'
import { ScrollToTop } from '../../../../components/scroll'


const HomeMain = () => {



    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch();
    const rentProducts = useSelector((state) => state.rentProducts.rentProduct)
    const [buy, setBuy] = useState(false)
    const [rent, setRent] = useState(true)


    const fetchProducts = async () => {
        const res = await axios.get('https://cactusscooterapi.azurewebsites.net/api/SparePartProduct')
            .catch((err) => {
                console.log('err', err)
            })
        const update = res.data.map((el) => {
            return { ...el, amount: 1, }
        })
        dispatch(setProducts(update));
    }
 

    const fetchProductsRent = async () => {
        const res = await axios.get('https://cactusscooterapi.azurewebsites.net/api/ScooterProduct')
            .catch((err) => {
                console.log('err', err)
            })
        const update = res.data.map((el) => {
            return { ...el, amount: 1, }
        })
        dispatch(setRentProducts(update));

    }


    useEffect(() => {
        fetchProductsRent();
        fetchProducts()
    }, [])



    const buyClick = () => {
        setBuy(true)
        setRent(false)
    }
    const rentClick = () => {
        setRent(true)
        setBuy(false)
    }




    const renderListProducts = products.map(product => {
        return (
            <ItemProduct
                id={product.id}
                deviceModel={product.deviceModel}
                key={product.id} product={product}
                title={product.title}
                price={product.price}
                image={product.image} />
        )
    })

    const renderRentProducts = rentProducts.map(product => {
        return (
            <RentProduct
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                scooterType={product.scooterType}
                isAvailable={product.isAvailable}
                key={product.id} />
        )
    })




    return (
        <>

            <div className='sm:h-[100vh]   w-full   bg-lightbrown font-monoton flex items-center justify-center '>
                <div className='  flex justify-between items-center max-w-[1600px]  w-[100%] px-32 py-16  '>
                    <div className='max-w-[500px]  '>
                        <h1 className='text-7xl  '>Discover City With Electro <span className='border-b-4 border-orange-600'>Scooter</span></h1>
                        <button className='mt-8 bg-orange-500 text-white rounded-[40px] py-4 px-16'>RENT NOW</button>
                    </div>
                    <div><img alt='boy' className='max-w-[700px] min-w-[500px] p-[50px] ' src={process.env.PUBLIC_URL + '/images/girl.jpg'} /></div>
                </div>
            </div>
            <div className='flex items-center justify-center py-8 text-some '>
                <button className='mr-5 border-2 border-some p-2 px-8 rounded-xl hover:text-white hover:bg-some' onClick={() => rentClick()}>Rent</button>
                <button className='border-2 border-some p-2 px-8 rounded-xl hover:text-white hover:bg-some' onClick={() => buyClick()}>Buy</button>
            </div>
            <div className='grid grid-cols-4 px-14'>
                {buy ? renderListProducts : renderRentProducts}
            </div>
            <section className='flex items-center justify-center mt-12 font-monoton'>
                <h1 id='map' className='text-2xl '>You can find us here</h1>

            </section>

            <div className='flex items-center justify-center mt-6'><iframe width="90%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=%D0%9D%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9%20%D0%BB%D1%96%D1%81%D0%BE%D1%82%D0%B5%D1%85%D0%BD%D1%96%D1%87%D0%BD%D0%B8%D0%B9%20%D1%83%D0%BD%D1%96%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82,%20university,%20Lviv,%20Ukraine+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
            <ScrollToTop />
        </>
    )
}

export default HomeMain
