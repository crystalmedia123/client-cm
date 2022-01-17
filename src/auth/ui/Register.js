import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import doSubmit from '../bloc/UserBloc';

import Swal from 'sweetalert2';

import { ReactComponent as Svg12 } from '../../static/images/logo1.svg';
import Logo from '../../static/images/nav-images/MaskGroup.png';

import Footer from '../../admin/components/Footer';

import '../../static/css/navs.css';
import '../../static/css/auth.css';
import '../../static/css/auth_overide.css';

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('null');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isRegister = await doSubmit({
        name,
        email,
        phonenumber,
        password,
        address
      });

      if (isRegister.status === 201) {
        Swal.fire({
          icon: 'success',
          text: `${isRegister.data?.success}`,
          allowOutsideClick: false,
          background: '#121007',
          width: '50em'
        });
        setSuccess(isRegister.data?.success);
        setTimeout(() => {
          return history.push('/login');
        }, 2000);
      }
    } catch (e) {
      //
      if (e.statuscode === 400) {
        setError(e.error.data?.error);
      }
    }
  };

  return (
    <div>
      {/* REGISTER */}
      <header>
        <div className="logo">
          <Link to="#">
            <img src={Logo} alt="logo" />
            <h5>bitsquadtraders</h5>
          </Link>
        </div>
      </header>
      <main className="authmain authmain-2">
        <form onSubmit={handleSubmit}>
          <div className="header">
            <h3>Welcome!! to bitsquadtraders</h3>
            <div className="mobile">
              <Svg12 />
              <h2>Welcome!! to bitsquadtraders</h2>
            </div>
          </div>
          {error && <div className="err-msg">{error}</div>}
          {success && <div className="succ-msg">{success}</div>}
          <div className="main-form">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
              {/* {error && <div className="err-msg">{error}</div>} */}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* {error && <div className="err-msg">{error}</div>} */}
            </div>
            <div className="field">
              <label htmlFor="phonenumber">Phone</label>
              <input
                name="phonenumber"
                type="text"
                id="phonenumber"
                onChange={(e) => setPhonenumber(e.target.value)}
              />

              {/* {error && <div className="err-msg">{error}</div>} */}
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* {error && <div className="err-msg">{error}</div>} */}
            </div>
            {/* <div className="field">
              <label htmlFor="address">Address</label>
              <input
                name="address"
                type="text"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
              />

              {error && <div className="err-msg">{error}</div>}
            </div> */}
          </div>
          <button type="submit" className="btn-default">
            Register
          </button>

          <div className="question">
            <Link to="/login">Sign in</Link>
            <Link to="/reset-password">
              <span>/</span> Forgot Password
            </Link>
          </div>
        </form>
        <Footer />
      </main>
      {/* REGISTER END */}
    </div>
  );
};

export default Register;
