import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import doSubmit from '../bloc/ResetPasswordBloc';

import { ReactComponent as Svg12 } from '../../static/images/logo1.svg';
import Logo from '../../static/images/nav-images/MaskGroup.png';

import '../../static/css/auth.css';
import '../../static/css/auth_overide.css';

const Reset_Password = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isResetPassword = await doSubmit(email);

      if (isResetPassword) {
        setSuccess(!success);
        Swal.fire({
          icon: 'success',
          text: `${isResetPassword.data.success}`,
          allowOutsideClick: false,
          title: 'Check your mail to rest password',
          background: '#121007',
          width: '50em'
        });

        // .then(
        setTimeout(() => {
          history.push('/login');
          window.location.reload();
        }, 4000);
        // );
      }

      setSuccess(!success);
    } catch (e) {
      if (e.statuscode === 400) {
        Swal.fire({
          icon: 'error',
          text: `An error occoured while sending`,
          title: `Try again`,
          background: '#121007',
          width: '50em'
        });
        setError(e.error.data?.error);
      }
      //
      //   '__changepasswordCreateUiOUTSIDE(err)__"',
      //   e.error.data?.error
      // );
    }
  };
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
        {/* FORM */}
        <form onSubmit={handleSubmit} m>
          {/* SUCCESS MSG */}
          {success && <div className="succ-msg">Email Sent!!</div>}
          <div className="header">
            <h3>Welcome!! to bitsquadtraders</h3>
            <div className="mobile">
              <Svg12 />
              <h2>Welcome!! to bitsquadtraders</h2>
            </div>
          </div>
          <div className="main-form">
            <div className="field">
              <label htmlFor="forgot-password">Reset Email</label>
              <input
                name="forgot-password"
                type="email"
                id="forgot-password"
                placeholder="Confirm Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* {error && <div className="err-msg">{error}</div>} */}
            </div>
            <button className="btn-default">Send Reset Email</button>
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

export default Reset_Password;
