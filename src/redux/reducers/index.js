import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
import { cartProductReducer } from './cartProductReducer'
import { rentProductReducer,selectedProductReducer } from './rentProductReducer'


const reducers = combineReducers({
    allProducts: productReducer,
    cart: cartProductReducer,
    rentProducts : rentProductReducer,
    rentProduct : selectedProductReducer
})

export default reducers