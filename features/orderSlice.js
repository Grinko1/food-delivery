import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    order:[],
    name:'',
    tel:'',
    email:'',
    city:'',
    street:'',
    house:'',
    isPaid: '',
    date:'',
    hours:'',
    minutes: ''
}

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers: {
        newOrder (state, action) {
            state.order = action.payload
        },
        setCustomerInfo (state, action) {
            state.name = action.payload.name
            state.tel = action.payload.tel
            state.email = action.payload.email
            state.city = action.payload.city
            state.street = action.payload.street
            state.house = action.payload.house
            state.isPaid = action.payload.isPaid
        },
        setTimeOrder (state, action) {
            state.date = action.payload.date
            state.hours =action.payload.hours
            state.minutes =action.payload.minutes
        }
    }
})

export default orderSlice.reducer
export const {newOrder, setCustomerInfo, setTimeOrder} = orderSlice.actions