import { configureStore } from "@reduxjs/toolkit";
import getQuoteSlice from "./slice/getquote"
const quoteStore=configureStore({
  reducer:{
    getQuoteSlice
  }

})
export default quoteStore