
import { useEffect, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from './redux/slice/getquote';
function App() {
const dispatch=useDispatch();
const {loading,quotes,error}=useSelector((state)=>state.getQuoteSlice);
useEffect(()=>{
  dispatch(fetchQuote());
},[]);
useEffect(()=>{
  const index=(Math.floor(Math.random()*quotes.length))
  setQuoteIndex(index)
},[])
const[quoteIndex,setQuoteIndex]=useState(2)
console.log(quotes);
const getNewQuote=()=>{
  const index=Math.floor(Math.random()*quotes.length)
  setQuoteIndex(index)
}

  return (
    <>
    {quotes&&quotes.length>0?

    <div className="container  p-5 " style={{ textAlign:"center"}}>
      <h1 style={{fontSizeAdjust:"initial", fontSize:"50px"}} >❝{quotes[quoteIndex].quote}❞</h1>
      <h6 className='ms-6' style={{fontStyle:"italic"}}>- {quotes[quoteIndex].author}</h6>
     
      <button className='m-5 mt-2 btn btn btn-success rounded-pill position fixed-bottom  ' onClick={getNewQuote}>Another one?</button>
    </div>:<h1>Let me get a quote that'll change your day</h1>
}
    </>
  )
}

export default App
