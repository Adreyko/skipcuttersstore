import { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const HomeRentProducts = () => {
    const [products, setProducts] = useState(1)


    const url = ''
    useEffect(() => {
        Axios.get(url)
            .then(res => {
                setProducts(res)
            }).catch(err => console.log(err))
    }, [])

console.log(products)
    return (
        <div>



        </div>
    )
}

export default HomeRentProducts