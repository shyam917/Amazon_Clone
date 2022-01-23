import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="headersearchInput" type="text" />
        {/*Logo */}
      </div>
      <div className="header__nav">
        <div className="header__option1">
          <span className="header__optionLineOne">Returns</span>
        </div>
        <div className="header__option2">
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option3"></div>
      </div>
    </div>
  );
}

export default Header;
