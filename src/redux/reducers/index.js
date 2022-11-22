import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
import { cartProductReducer } from './cartProductReducer'


const reducers = combineReducers({
    allProducts: productReducer,
    cart: cartProductReducer
})

export default reducers