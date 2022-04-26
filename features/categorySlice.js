import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories:[
        {id:1, title: 'Всё', search:'all'},
        {id:2, title: 'Курица', search:'chicken'},
        {id:3, title: 'Карри', search:'curry'},
        {id:4, title: 'Рис', search:'rice'},
        {id:5, title: 'Рыба', search:'fish'},
        {id:6, title: 'Напитки', search:'drinks'},
        {id:7, title: 'Фрукты', search:'fruicts'},
        {id:8, title: 'Мороженое', search:'ice'},
        
    ],
    activeCategory:{search:'all'}

}

const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        chooseCategory : (state, action) => {
            state.activeCategory = action.payload
        }
    }
})

export default categorySlice.reducer

export const {chooseCategory} = categorySlice.actions