import { createSlice } from "@reduxjs/toolkit";

const shoppingItem = createSlice({
    name: 'items',
    initialState:[],
    reducers:{
        addInitialItems:(state, action)=>{
            return action.payload
        }
    }
})
export const itemsActions = shoppingItem.actions
export default shoppingItem
