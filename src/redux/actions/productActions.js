import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
};


export const addProduct = (product) => {
    return {
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        payload: product
    }
}


export const deleteProduct = (id) =>{
    return {
        type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
        payload: id
    }
}

