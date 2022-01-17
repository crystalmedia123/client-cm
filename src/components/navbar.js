import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { CoinContext } from '../CoinProvider';
import Logo from '../static/images/nav-images/MaskGroup.png';
import Profile from '../static/images/nav-images/person_outline.svg';
import BellIcon from '../static/images/nav-images/settings.gif';

const NavBar = () => {
  const { user, getUser } = useContext(CoinContext);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <header>
        <label htmlFor="check" className="bars">
          <i className="fa fa-bars" />
        </label>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
            <h5>bitsquadtraders</h5>
          </Link>
        </div>
        <div className="profile">
          <Link to="/profile">
            <img
              style={{ width: '80%' }}
              src={user[0]?.photo ?? Profile}
              alt="profile"
            />
          </Link>
          <h5>{user[0]?.email}</h5>
        </div>
        <div className="notification">
          <Link to="/change-password">
            {/* <div className="count">5</div> */}
            <img src={BellIcon} style={{ width: '3.5em' }} alt="bell" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default NavBar;
