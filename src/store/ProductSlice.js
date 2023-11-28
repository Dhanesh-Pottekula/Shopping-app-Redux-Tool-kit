import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[],
    status:"pending",
};

const ProductSlice=createSlice({
    name:"Products",
    initialState,
    reducers: {
        // fetchProducts(state,action){
        //     state.data=action.payload
        // }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status="success"

        })
        
        .addCase(getProducts.rejected,(state,action)=>{
            state.status="rejected"
        })
    }
})

export const {fetchProducts}= ProductSlice.actions;

export default ProductSlice.reducer;

export const getProducts=createAsyncThunk("Products/get",async ()=>{
    const data= await fetch("https://api.escuelajs.co/api/v1/products")
        .then (response=>response.json())
        .then((Data)=> {return Data})
        
        return data
})

// export function getProducts(){
//     return async function getProductsThunk (dispatch,getState){
//         const data= await fetch("https://api.escuelajs.co/api/v1/products")
//         .then (response=>response.json())
//         .then((Data)=>dispatch(fetchProducts(Data)))
            
//     }
// }