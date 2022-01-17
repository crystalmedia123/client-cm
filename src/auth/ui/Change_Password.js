import React, { useState } from 'react';
import doSubmit from '../bloc/ChangePasswordBloc';

import { ToggleButton } from './ToggleButton';
import './toggleButton.css';
import Swal from 'sweetalert2';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Footer from '../../admin/components/Footer';

const Change_Password = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = window.localStorage.getItem('userId');
    try {
      const isChangePassword = await doSubmit(userId, password, oldPassword);

      if (isChangePassword) {
        setSuccess(!success);
        Swal.fire({
          icon: 'success',
          text: `${isChangePassword.data.success}`,
          allowOutsideClick: false,
          background: '#121007',
          width: '50em'
        });

        // .then(
        setTimeout(() => {
          return window.location.reload();
        }, 4000);
        // );
      }

      setSuccess(!success);
    } catch (e) {
      if (e.statuscode === 400) {
        Swal.fire({
          icon: 'error',
          text: `${e.error.data.error}`,
          title: `Check Password entry`,
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

  const [selected, setSelected] = useState(true);
  return (
    <>
      <NavBar />
      <SideBar />

      <main className="authmain">
        <form onSubmit={handleSubmit} className="width">
          {success && (
            <div className="succ-msg">Password Change Successful</div>
          )}

          {error && <div className="err-msg">{error}</div>}
          {/* Toggle button */}
          <ToggleButton
            selected={selected}
            toggleSelected={() => {
              setSelected(!selected);
            }}
          />
          {/* Toggle button end */}
          <div className="header">
            <h3>Change your password</h3>
            <div className="mobile">
              {/* <object data="../../static/images/logo1.svg" type /> */}
              <h2>Change your password</h2>
            </div>
          </div>
          <div className="main-form">
            <div className="field">
              <label htmlFor="changePassword">Enter Old Password</label>
              <input
                type="text"
                placeholder="Old Password"
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="changePassword">Enter New Password</label>
              <input
                type="text"
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button>Change Password</button>
        </form>
        <Footer />
      </main>
    </>
  );
};

export default Change_Password;
