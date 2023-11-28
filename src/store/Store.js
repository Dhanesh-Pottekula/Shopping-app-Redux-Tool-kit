import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";

const store=configureStore({
    reducer:{
        Cart:cartSlice,
        Products:ProductSlice,
    }
})

export default store;