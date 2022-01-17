import React from 'react';

import CircleDefaultImg from '../../static/images/account_circle.svg';
import SquareDefaultImg from '../../static/images/account_box.svg';

import './adminUser.css';

const AdminUserView = ({ modalUser }) => {
  const { name, phonenumber, email, address, photo, idCard } = modalUser;

  return (
    <>
      <div>
        {/* <button id="myBtn">Open Modal</button> */}
        {/* The Modal */}
        <div id="myModal" className="modal" data="id">
          {/* Modal content */}
          <div className="modal-content">
            <span className="close">×</span>

            {/* START */}
            <div className="row">
              <form className="modal-box">
                <div className="img-upload">
                  <div className="file-u">
                    <img src={photo ?? CircleDefaultImg} alt="" />
                  </div>
                  <div className="file-v">
                    <img src={idCard ?? SquareDefaultImg} alt="" />
                  </div>
                </div>
                <div className="cred-form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      placeholder={name}
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phonenumber">Phone number</label>
                    <input
                      type="text"
                      id="phonenumber"
                      placeholder={phonenumber}
                      // onChange={(e) => setPhonenumber(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      placeholder={email}
                      // onChange={(e) => setSsn(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      placeholder={address}
                      // onChange={(e) => setSsn(e.target.value)}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="ssn">SSN</label>
                    <input
                      
                      type="text"
                      id="ssn"
                      placeholder="input ssn.."
                      // onChange={(e) => setSsn(e.target.value)}
                    />
                  </div> */}
                  <button className="site-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {/* STOP */}
          </div>
          {/* Modal content end */}
        </div>
      </div>
    </>
  );
};

export default AdminUserView;
