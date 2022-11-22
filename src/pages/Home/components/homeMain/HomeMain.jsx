import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../../../redux/actions/productActions'
import ItemProduct from '../HomeProducts/ItemProduct'
import { setRentProducts } from '../../../../redux/actions/productActions'
import RentProduct from '../HomeProducts/RentProduct'


const HomeMain = () => {



    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch();
    const rentProducts = useSelector((state) => state.rentProducts.rentProduct)
    const [buy, setBuy] = useState(false)
    const [rent, setRent] = useState(true)


    const fetchProducts = async () => {
        const res = await axios.get('https://cactusscooterapi.azurewebsites.net/api/SparePartProduct/spare-part')
            .catch((err) => {
                console.log('err', err)
            })
        const update = res.data.map((el) => {
            return { ...el, amount: 1, }
        })
        dispatch(setProducts(update));
    }


    const fetchProductsRent = async () => {
        const res = await axios.get('https://cactusscooterapi.azurewebsites.net/api/ScooterProduct/scooter')
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
            <ItemProduct unick={product.unick}
                deviceModel={product.deviceModel}
                key={product.id} product={product}
                title={product.title}
                price={product.price}
                id={product.id}
                image={product.image} />
        )
    })

    const renderRentProducts = rentProducts.map(product => {
        return (
            <RentProduct title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                scooterType={product.scooterType}
                isAvailable={product.isAvailable} />
        )
    })




    return (
        <>

            <div className='sm:h-[calc(100vh-12rem)] items-center  w-full   bg-blue-400 font-monoton '>
                <div className='  flex justify-between items-center max-w-[1600px]  w-[100%] px-32 py-16 '>
                    <div className='max-w-[500px]  '>
                        <h1 className='text-7xl'>Discover City With Electro <span className='border-b-4 border-orange-600'>Scooter</span></h1>
                        <button className='mt-8 bg-orange-500 text-white rounded-[40px] py-4 px-16'>RENT NOW</button>
                    </div>
                    <div><img alt='boy' className='max-w-[500px] min-w-[500px] p-[50px] ' src={process.env.PUBLIC_URL + '/images/boy.png'} /></div>
                </div>
            </div>
            <div className='flex items-center justify-center py-8'>
                <button className='mr-5' onClick={() => rentClick()}>Rent</button>
                <button onClick={() => buyClick()}>Buy</button>
            </div>
            <div className='grid grid-cols-4 px-14'>
                {buy ? renderListProducts : renderRentProducts}
            </div>
        </>
    )
}

export default HomeMain
