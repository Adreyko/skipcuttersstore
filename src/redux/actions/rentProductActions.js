import { ActionTypes } from "../constants/action-types"
export const setRentProducts = (rentProduct) =>{
    return{
        type: ActionTypes.SET_RENT_PRODUCTS,
        payload : rentProduct
    }
}

export const setSelectedRentProduct = (rentProduct) =>{
    return{
        type: ActionTypes.SELECTED_RENT_PRODUCT,
        payload: rentProduct
    }
}