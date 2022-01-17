import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../static/images/nav-images/MaskGroup.png';

const NavBar = () => {
  return (
    <>
      <header>
        <label htmlFor="check" className="bars">
          <i className="fa fa-bars" />
        </label>
        <div className="logo">
          <Link to="/dashboard">
            <img src={Logo} alt="logo" />
            <h5>bitsquadtraders</h5>
          </Link>
        </div>
      </header>
    </>
  );
};

export default NavBar;
