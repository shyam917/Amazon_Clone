import React from 'react';
import "./Home.css";
import "./Product";
import Product from './Product';
function Home() {
    return (
        <div className="home" >
            <div className="home__container">
                <img className="home__Image" src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" />

                <div className="home__row">
                    <Product id="102" title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' price={620.00} image='https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY218_.jpg' rating={3} />
                    <Product id="100" title='Honor 2 BT Watch 2 with Battery- Charcoal Black (14-Days Battery Battery Life_Compatible with Android and iOS)' price={10199.00} image='https://m.media-amazon.com/images/I/81TmdO2S6iL._AC_UL320_.jpg' rating={4} />

                </div>
                <div className="home__row">
                    <Product id="101" title='Apple iPhone 13 (512GB) - Blue' price={104900.00} image='https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY218_.jpg' rating={5} />
                    <Product id="103" title='Dell Alienware M15 R5 (2021) AMD Ryzen R7 5800H Edition 15.6 inches Gaming Notebook Computer - 16 GB, 512 GB SSD, NVIDIA 6 GB RTX 3060, Windows 10, 2.42 kg' price={149990.00} image='https://m.media-amazon.com/images/I/41oGjCvztKL._AC_UY218_.jpg' rating={4} />
                    <Product id="104" title='Larah by Borosil Green Leaves Silk Series Opalware Dinner Set, 35 Pieces, White' price={1822.00} image='https://m.media-amazon.com/images/I/61tQmEcxlZS._AC_UL320_.jpg' rating={2} />
                </div>
                <div className="home__row">
                    <Product id='105' title='Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Black)' price={16990} image='https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_UY218_.jpg' rating={5} />
                </div>
            </div>
        </div >


    );

}

export default Home;

