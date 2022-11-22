import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
import { cartProductReducer } from './cartProductReducer'
import { rentProductReducer } from './rentProductReducer'


const reducers = combineReducers({
    allProducts: productReducer,
    cart: cartProductReducer,
    rentProducts : rentProductReducer
})

export default reducers