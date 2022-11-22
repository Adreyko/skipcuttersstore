import { ActionTypes } from "../constants/action-types";

const initialState = {
    rentProduct: [],
    
}


export const rentProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_RENT_PRODUCTS:
            return {...state,rentProduct:payload};

        default:
            return state;
    }
}