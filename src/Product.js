import React from 'react';
import "./Product.css";
function Product() {
    return (<div>
        <div className='product'>
            <div classname="product__Info">
                <p>The lean Startup</p>
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

        </div>
        <img src="" alt="" />
    </div>);
}

export default Product;
