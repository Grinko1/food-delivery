import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import categoryReducer from '../features/categorySlice'
import searchReducer from '../features/searchSlice'
import orderReducer from '../features/orderSlice'
import { createWrapper } from 'next-redux-wrapper';

// export default  configureStore ({
//     reducer:{
//     cart: cartReducer
//     }
// })

const makeStore =() => configureStore ({
    reducer:{
    cart: cartReducer,
    category: categoryReducer,
    search : searchReducer,
    order: orderReducer
    }
})

export const wrapper = createWrapper(makeStore);