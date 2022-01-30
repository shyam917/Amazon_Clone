import { Divider } from '@material-ui/core';
import React from 'react';
import "./Checkout.css";

function Checkout() {
  return( 
  <div className='checkout'>
      <div className='checkout__left'>
          <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Promotions/January/BankOffers/JAN21/3_pc.jpg'/>
          <div >
            <h2 className='checkout__title'>your shopping cart</h2>
          </div>
      </div>
      <div className='checkout__right'>
        <h2>subtotal</h2>
      </div>
  </div>
  );
}

export default Checkout;
