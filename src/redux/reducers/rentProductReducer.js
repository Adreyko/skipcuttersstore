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

export const selectedProductReducer = (state={},{type,payload}) =>{
    switch(type){
        case ActionTypes.SELECTED_RENT_PRODUCT:
            return {...state,...payload}
            break;
            default:
              return  state;
    }
}