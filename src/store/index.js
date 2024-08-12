import {configureStore} from '@reduxjs/toolkit'
import shoppingSlice from './shoppingSlice'
import fetchStatusSlice from './fetchStatusSlice'
import orderSlice from './orderSlice'
const store = configureStore({
    reducer:{
        items:shoppingSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        order:orderSlice.reducer,
    }
})

export default store