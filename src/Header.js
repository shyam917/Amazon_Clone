import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import {auth} from './firebase';
import { SportsBasketball } from "@material-ui/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  const[{cart,user}] = useStateValue();
  const history = useHistory();
  const login = () => {
    if (user) {
      auth.signOut();
      history.push('/login');
    }
  }

  return (
    <div className="header">
      <Link to="/">   
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/*Logo */}
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
         <div onClick={login} className="header__option">
           <span className="header__optionLineOne">Hello {user?.email}</span>
           <span className="header__optionLineTwo">{user ? 'Sign  Out':'Sign In'}</span>
         </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header__optionCart">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__CartCount">{cart?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
