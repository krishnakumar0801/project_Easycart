import React from 'react'
import visacard from '../Components/219_visa.jpg'
import mastercard from '../Components/mastercard.png'
import rupaycard from '../Components/rupaycard.png'
import paytm from '../Components/paytmcard.jpg'
import '../App.css'
function Payment() {
  return (
    <div className='body'>
    <div className='paymentpage'>
        <div className='pageinput'>
        <h4>Choose your payment method</h4>
            <input type="radio" name='input' />
            <span><img className='visacard' src={visacard} /></span>
            <span><img className='mastercard' src={mastercard} /></span>
            <span><img className='rupaycard' src={rupaycard} /></span>
            <span><img className='rupaycard' src={paytm} /></span>
            <div>
            <input type="radio" name='input' />
           
            <span className='brandtitle-two'>Easy</span>Cart
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Payment