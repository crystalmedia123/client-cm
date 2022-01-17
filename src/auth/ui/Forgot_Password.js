import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Svg12 } from '../../static/images/logo1.svg';
import Logo from '../../static/images/nav-images/MaskGroup.png';

import '../../static/css/auth.css';
import '../../static/css/auth_overide.css';

const Forgot_Password = () => {
  return (
    <div>
      {/* LOGIN */}
      <header>
        <div className="logo">
          <Link to="#">
            <img src={Logo} alt="logo" />
            <h5>bitsquadtraders</h5>
          </Link>
        </div>
      </header>

      <main className="authmain authmain-2">
        <form>
          <div className="header">
            <h3>Welcome!! to bitsquadtraders</h3>
            <div className="mobile">
              <Svg12 />
              <h2>Welcome!! to bitsquadtraders</h2>
            </div>
          </div>
          <div className="main-form">
            <div className="field">
              <label htmlFor="forgot-password">Reset Password</label>
              <input
                name="forgot-password"
                type="password"
                id="forgot-password"
                placeholder="Password"
              />
              {/* {error && <div className="err-msg">{error}</div>} */}
            </div>
            <div className="field">
              <label htmlFor="forgot-password">Confirm Reset Password</label>
              <input
                name="forgot-password"
                type="password"
                id="forgot-password"
                placeholder="Confirm Password"
              />
              {/* {error && <div className="err-msg">{error}</div>} */}
            </div>
            <button className="btn-default">Confirm Reset</button>
          </div>

          <div className="question">
            <Link to="/register">Create account</Link>
            <Link to="login">
              <span>/</span> Sign in
            </Link>
          </div>
        </form>
      </main>
      {/* LOGIN END */}
    </div>
  );
};

export default Forgot_Password;
