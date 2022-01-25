import React from 'react';
import "./Home.css";
import "./Product";
import Product from './Product';
function Home() {
    return (
        < div className="home" >
            <div className="home__container">
                <img className="home__Image" src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" />

                <div className="home__row">
                    <Product />
                    <Product />
                </div>
            </div>
        </ div >


    );

}

export default Home;

