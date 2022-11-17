import { ActionTypes } from "../constants/action-types";






export const cartProductReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_PRODUCT_TO_CART:
            return [...state, payload]
        case ActionTypes.REMOVE_PRODUCT_FROM_CART:
            return state.filter((item => {
                return item.id !== payload
            }))
        default:
            return state

    }
}