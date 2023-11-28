import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const cartSlice=createSlice({
    name:"Cart",
    initialState,
    reducers: {
        Add:(state,action)=>{
           state.push(action.payload)
        },
        remove:(state,action)=>{
               return state.filter(item=> item.id!== action.payload)
        }
    },
})

export const {Add,remove}= cartSlice.actions;

export default cartSlice.reducer;