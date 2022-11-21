import { ActionTypes } from "../constants/action-types";





export const cartProductReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_PRODUCT_TO_CART:
            return [...state, payload]
        case ActionTypes.REMOVE_PRODUCT_FROM_CART:
            return state.filter((item => {
                return item.id !== payload
            }))

        case ActionTypes.INCREMENT_AMOUNT_PRODUCT_CART:

            const incrementAmount = state.filter((item) => {
                return item.id == payload ? { ...item, amount: item.amount++ } : item
            })
            return incrementAmount


        case ActionTypes.DECREMENT_AMOUNT_PRODUCT_CART:
            const decrementAmount = state.filter((item) => {
                return item.id === payload ? { ...item, amount: item.amount > 1 ? item.amount-- : item.amount } : item
            })
            return decrementAmount
            case ActionTypes.REMOVE_ALL_PRODUCT_FROM_CART:
                return []
        default:
            return state

    }
}