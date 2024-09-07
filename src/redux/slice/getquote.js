import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchQuote=createAsyncThunk('allquotes/fetchQuotes',async()=>{
  const response= await axios.get("https://dummyjson.com/quotes")
  return response.data.quotes
})
const getQuoteSlice=createSlice({
  name:'allquotes',
  initialState:{
    quotes:[],
    error:'',
    loading:false
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchQuote.pending,(state)=>{
      state.loading=true
    })
    builder.addCase(fetchQuote.fulfilled,(state,action)=>{
      state.loading=false
      state.quotes=action.payload
    })
    builder.addCase(fetchQuote.rejected,(state)=>{
      state.loading=false
      state.quotes=[]
      state.error="api failed,cant fetch data"
    })
  }
})
export default getQuoteSlice.reducer