import { Divider } from '@material-ui/core';
import React from 'react';
import "./Checkout.css";
import { useStateValue } from './Stateprovider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Promotions/January/BankOffers/JAN21/3_pc.jpg' />
        {cart?.length === 0 ? (
                    <div>
                        <h2>Your shopping Cart is empty</h2>
                        <p>
                          You have no items in your Cart. To buy one or add items to Cart click the add to Cart button
                        </p>
                    </div>
                ) : (
        <div>
          <h2 className="checkout__title">Your shopping Cart</h2>
          {cart.map(item => {
            console.log(item)
            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            )
          })}
        </div>
         )}
      </div>
      {cart?.length > 0 &&

        <div className='checkout__right'>
          <Subtotal />
        </div>
      }
    </div>
  )
}

export default Checkout;
