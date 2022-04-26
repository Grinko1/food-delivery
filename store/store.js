import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import categoryReducer from '../features/categorySlice'
import { createWrapper } from 'next-redux-wrapper';

// export default  configureStore ({
//     reducer:{
//     cart: cartReducer
//     }
// })

const makeStore =() => configureStore ({
    reducer:{
    cart: cartReducer,
    category: categoryReducer
    }
})

export const wrapper = createWrapper(makeStore);