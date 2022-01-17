import React, { useState, useLayoutEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import doSubmit from '../bloc/LoginBloc';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import { ReactComponent as Svg12 } from '../../static/images/logo1.svg';
import Logo from '../../static/images/nav-images/MaskGroup.png';
import Footer from '../../admin/components/Footer';

import '../../static/css/navs.css';
import '../../static/css/auth.css';
import '../../static/css/auth_overide.css';

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Loader on Button
  const [loader, setLoader] = useState(false);

  useLayoutEffect(() => {
    // return <PageLoad />;
  }, []);

  const handleSubmit = async (dataToSubmit) => {
    setLoader(true);
    try {
      const isLogin = await doSubmit(dataToSubmit);

      if (isLogin.status === 200) {
        Swal.fire({
          icon: 'success',
          text: 'Successful',
          allowOutsideClick: false,
          background: '#121007',
          width: '50em'
        });
        setSuccess(isLogin.success);
        setLoader(false);
        const { state } = this.props.location;
        window.location = state ? state.from.pathname : '/login';
        // setTimeout(() => {
        //   return history.push('/dashboard');
        // }, 2000);
      }
    } catch (e) {
      setLoader(false);
      if (e.statuscode === 400) {
        const err1 = e?.error;
        const err2 = err1?.data;
        const err3 = err2?.error;
        //
        // setError(e.error.data?.error);
      }
    }
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required')
  });

  // MAKE SURE USER CAN'T GOTO LOGIN PAGE
  const loggedIn = window.localStorage.getItem('token');
  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }
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
        <Formik
          initialValues={{
            password: '',
            email: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            setTimeout(() => {
              let dataToSubmit = {
                email: values.email,
                password: values.password
              };

              handleSubmit(dataToSubmit);
            }, 3000);
          }}
        >
          {(props) => {
            const {
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="header">
                  <h3>Welcome!! to bitsquadtraders</h3>
                  <div className="mobile">
                    <Svg12 />
                    <h2>Welcome!! to bitsquadtraders</h2>
                  </div>
                </div>
                {(error && <div className="err-msg">{error}</div>) ||
                  (error === undefined && (
                    <div className="err-msg">Network error</div>
                  ))}
                {success && <div className="succ-msg">{success}</div>}
                <div className="main-form">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      defaultValue=""
                      placeholder="Enter email"
                      autoComplete="off"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onReset={handleReset}
                      className={
                        errors.email && touched.email
                          ? 'form-control error'
                          : 'form-control'
                      }
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback" style={{ color: 'red' }}>
                        {errors.email}
                      </div>
                    )}
                    {/* {error && <div className="err-msg">{error}</div>} */}
                  </div>
                  <div className="field">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      id="password"
                      placeholder="Enter password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onReset={handleReset}
                      className={
                        errors.password && touched.password
                          ? 'form-control error'
                          : 'form-control'
                      }
                    />
                    {errors.password && touched.password && (
                      <div className="input-feedback" style={{ color: 'red' }}>
                        {errors.password}
                      </div>
                    )}
                    {/* {error && <div className="err-msg">{error}</div>} */}
                  </div>
                  <button
                    onClick={() => setLoader(true)}
                    className={success ? 'disabled' : 'btn-default'}
                  >
                    {loader ? 'loading..' : 'Login'}
                  </button>
                </div>

                <div className="question">
                  <Link to="/register">Create account</Link>
                  <Link to="/reset-password">
                    <span>/</span> Forgot Password
                  </Link>
                </div>
              </form>
            );
          }}
        </Formik>
        <Footer />
      </main>
      {/* LOGIN END */}
    </div>
  );
};

export default Login;
