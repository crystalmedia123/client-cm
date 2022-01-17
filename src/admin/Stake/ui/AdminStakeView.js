import React from 'react';

import WalletImg from '../../static/images/account_balance_wallet.svg';

import './adminStake.css';

const AdminStakeView = ({ modalStake }) => {
  const {
    wallet,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve
  } = modalStake;

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
                    <img src={WalletImg} alt="" />
                  </div>
                </div>
                <div className="cred-form">
                  <div className="form-group">
                    <label htmlFor="">Wallet Name</label>
                    <input type="text" id="wallet" placeholder={wallet} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="one">First</label>
                    <input type="text" id="one" placeholder={one} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="two">Second</label>
                    <input type="text" id="two" placeholder={two} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="three">Third</label>
                    <input type="text" id="three" placeholder={three} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="four">Fourth</label>
                    <input type="text" id="four" placeholder={four} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="five">Fifth</label>
                    <input type="text" id="five" placeholder={five} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="six">Sixth</label>
                    <input type="text" id="six" placeholder={six} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="seven">Seventh</label>
                    <input type="text" id="seven" placeholder={seven} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eight">Eight</label>
                    <input type="text" id="eight" placeholder={eight} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nine">Ninth</label>
                    <input type="text" id="nine" placeholder={nine} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ten">Tenth</label>
                    <input type="text" id="ten" placeholder={ten} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eleven">Eleventh</label>
                    <input type="text" id="eleven" placeholder={eleven} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="twelve">Twelfth</label>
                    <input type="text" id="twelve" placeholder={twelve} />
                  </div>

                  <button className="site-btn" type="submit">
                    Go Back
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

export default AdminStakeView;
