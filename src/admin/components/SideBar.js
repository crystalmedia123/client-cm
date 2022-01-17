import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Svg1 } from '../static/images/sidenav-icons/Group260.svg';
import { ReactComponent as Svg2 } from '../static/images/sidenav-icons/Group9.svg';
import { ReactComponent as Svg3 } from '../static/images/sidenav-icons/surface1.svg';
import { ReactComponent as Svg4 } from '../static/images/sidenav-icons/reuse.svg';
import { ReactComponent as Svg5 } from '../static/images/sidenav-icons/Group8.1.svg';

const SideBar = () => {
  const reload = () => {
    window.location.reload();
  };
  return (
    <>
      <aside>
        <nav onClick={reload}>
          <NavLink to="/admin" activeClassName="active">
            <Svg1 />
            &nbsp;&nbsp;&nbsp;Dashboard
          </NavLink>
          <NavLink to="/admin-stakes" activeClassName="active">
            <Svg2 />
            &nbsp;&nbsp;&nbsp;Stake
            <p>100</p>
          </NavLink>
          <NavLink to="/admin-coins" activeClassName="active">
            <Svg3 />
            &nbsp;&nbsp;&nbsp;Coins
          </NavLink>
          <NavLink to="/admin-transactions" activeClassName="active">
            <Svg4 />
            &nbsp;&nbsp;&nbsp;Transactions
          </NavLink>
          <NavLink to="/admin-users" activeClassName="active">
            <Svg5 />
            &nbsp;&nbsp;&nbsp;Users
          </NavLink>
          <NavLink to="/logout" activeClassName="active">
            <Svg1 />
            &nbsp;&nbsp;&nbsp;Logout
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
