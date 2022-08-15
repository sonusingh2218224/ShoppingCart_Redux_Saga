import { combineReducers } from 'redux'
import { cartData } from './Reducer'
import { productData } from './ProductReducers'
export default combineReducers({
    cartData,
    productData
})