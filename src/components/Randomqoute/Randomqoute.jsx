import React, { useState } from  'react'
import './Randomqoute.css'
import xtwit from '../Assets/x-twitter.svg'
import arrow from '../Assets/arrows-rotate.svg'
const Randomqoute = () =>{

let quotes = [];

async function loadQuote(){
const response = await fetch('https://type.fit/api/quotes');
quotes = await response.json();
}

const [quote,setQuote] = useState({
  text: 'you have to be strong or the nature beat you',
  author: 'Mr sian persian'
})

const random = ()=>{
  const select = quotes[Math.floor(Math.random()*quotes.length)];
  setQuote(select)
}

const twitter = ()=>{
  window.open(`https://twitter.com/intent/tweet?text=${quote.text} -${quote.author}`)
}

loadQuote();
  return (
    <div>
      <div className="box">
        <div className="matn">{quote.text}</div>
        <div className="line"></div>
        <div className='bottom'>
          <div className="author">-{quote.author.split(',')[0]}</div>
          <div className="icons">
            <img src={arrow} onClick={()=>{random()}} alt="" />
            <img src={xtwit}  alt="" />
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default Randomqoute