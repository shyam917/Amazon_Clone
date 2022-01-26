import React from 'react';
import "./Product.css";
function Product() {
    return <div className='product'>
        <div className='product__Info'>
            <p>The Lean Startup</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>300</strong>
            </p>
            <div className='product__rating'>
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
            </div>
        </div>
        <img src="https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY218_.jpg" alt="" />
        <button>Add to Cart</button>
    </div>;
}

export default Product;
