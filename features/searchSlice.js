import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    search : ''
}

const searchSLice = createSlice({
    name : 'search',
    initialState,
    reducers:{
        setSearch(state, action) {
            state.search = action.payload
        },
        clearSearch(state) {
            state.search = ''
        }
    }
})

export default searchSLice.reducer
export const {setSearch, clearSearch} = searchSLice.actions