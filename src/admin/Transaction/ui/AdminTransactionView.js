import React, { useState } from 'react';
import TransactionsBloc from '../../../Transaction/bloc/TransactionBloc';

import Spinner from '../../../static/images/nav-images/spinner.gif';
import Swal from 'sweetalert2';
import './adminTrans.css';

const AdminTransactionView = ({ transactionWallet, transactionMyCoin }) => {
  const [subtract, setSubtract] = useState(false);
  const [subValue, setSubValue] = useState('');
  const [updateBalance, setUpdateBalance] = useState(null);
  const [updateProfit, setUpdateProfit] = useState(null);
  const [updateStatus, setUpdateStatus] = useState(null);

  // Loader on Button
  const [balanceLoader, setBalanceLoader] = useState(false);
  const [profitLoader, setProfitLoader] = useState(false);
  const [statusLoader, setStatusLoader] = useState(false);

  // Error States
  const [balanceError, setBalanceError] = useState('');
  const [profitError, setProfitError] = useState('');
  const [statusError, setStatusError] = useState('');

  // TOGGLE CHEKBOX
  function toggle(value) {
    return !value;
  }

  // BALANCE FORM
  const onBalanceForm = async (e) => {
    e.preventDefault();

    setBalanceLoader(true);

    if (subtract === true) {
      var sub = '?subtract=true';
      setSubValue('?subtract=true');
    } else {
      var sub = '?';
      setSubValue('?');
    }

    try {
      const isBalance = await TransactionsBloc.updateBalance(
        coinAddressId,
        sub,
        updateBalance
      );

      if (isBalance.status === 200) {
        Swal.fire({
          icon: 'success',
          text: 'Balance Updated',
          allowOutsideClick: false,
          background: '#121007',
          width: '50em'
        });
        setBalanceLoader(false);
        // setInterval(() => {
        //   window.location.reload();
        // }, 2000);
      }
    } catch (e) {
      setBalanceLoader(false);
      if (e.statuscode === 400) {
        setBalanceError(e.error.data?.error);
      }
    }
  };

  // PROFIT FORM
  const onProfitForm = async (e) => {
    e.preventDefault();

    setProfitLoader(true);

    try {
      const isProfit = await TransactionsBloc.updateProfit(
        coinAddressId,
        updateProfit
      );

      if (isProfit.status === 200) {
        Swal.fire({
          icon: 'success',
          text: 'Profit Updated',
          allowOutsideClick: false,
          background: '#121007',
          width: '50em'
        });
        setProfitLoader(false);
        setInterval(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (e) {
      setProfitLoader(false);
      if (e.statuscode === 400) {
        setProfitError(e.error.data?.error);
      }
    }
  };

  // STATUS FORM
  const onStatusForm = async (e) => {
    e.preventDefault();

    setStatusLoader(true);

    try {
      const isStatus = await TransactionsBloc.updateStatus(
        walletId,
        updateStatus
      );

      if (isStatus.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Status Updated',
          background: '#121007',
          width: '50em'
        });
        setStatusLoader(false);
        setInterval(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (e) {
      setStatusLoader(false);
      if (e.statuscode === 400) {
        setStatusError('Select a Status');
      }
    }
  };

  const { balance, order, profit, coin, owner } = transactionMyCoin;

  const { amount, _id, coinAddress, walletAddress } = transactionWallet;

  const coinAddressId = coinAddress?._id;
  let walletId = _id;

  // setCoinAddressIdState(coinAddressId);
  //
  //
  //

  return (
    <div>
      {/* <button id="myBtn">Open Modal</button> */}
      {/* The Modal */}
      <div id="myModal" className="modal" data="id">
        {/* Modal content */}
        <div className="modal-content-trans">
          <span className="close">×</span>

          {/* START */}
          <div className="row">
            {/* 1ST */}
            <form className="modal-box" onSubmit={onBalanceForm}>
              <div className="img-upload">
                <div className="frame-u color">
                  <img src={coin?.icon ?? Spinner} alt="" />
                  <div className="text-frame">
                    <p>{coin?.name}</p>
                  </div>
                  <div className="text-frame">
                    <p>
                      Wallet Address&nbsp;&nbsp; = &nbsp;&nbsp;{walletAddress}
                    </p>
                  </div>
                  <div className="text-frame">
                    <p>Inorder&nbsp;&nbsp; = &nbsp;&nbsp;{order}</p>
                  </div>
                  <div className="text-frame">
                    <p>Balance&nbsp;&nbsp; = &nbsp;&nbsp;{balance}</p>
                  </div>
                  <div className="text-frame">
                    <p>Profit&nbsp;&nbsp; = &nbsp;&nbsp;+{profit}</p>
                  </div>
                </div>
              </div>
              <div className="cred-form">
                {balanceError && <div className="err-msg">{balanceError}</div>}
                <div className="form-group">
                  <label htmlFor="one">Update Wallet Balance</label>
                  <input
                    type="text"
                    id="one"
                    placeholder="Enter amount $"
                    onChange={(e) => setUpdateBalance(e.target.value)}
                  />
                  <span className={subtract ? 'checkbox-name' : 'hide'}>
                    Subtraction Mode
                  </span>
                  <div className="checkbox" style={{ cursor: 'pointer' }}>
                    <input
                      style={{ cursor: 'pointer' }}
                      type="checkbox"
                      id="subtract"
                      checked={subtract}
                      onChange={(e) => setSubtract(toggle)}
                    />
                  </div>
                </div>
                {/* Balance Button */}
                <button
                  style={{ cursor: 'pointer' }}
                  className="site-btn .mouse-pointer"
                  type="submit"
                >
                  {balanceLoader ? 'sending..' : 'Send'}
                </button>
              </div>
            </form>

            {/* 2ND */}
            <form className="modal-box" onSubmit={onProfitForm}>
              <div className="cred-form">
                {profitError && <div className="err-msg">{profitError}</div>}
                <div className="form-group">
                  <label htmlFor="one">Update Wallet Profit</label>
                  <input
                    type="text"
                    id="one"
                    placeholder="Enter amount $"
                    onChange={(e) => setUpdateProfit(e.target.value)}
                  />
                </div>

                <button
                  style={{ cursor: 'pointer' }}
                  className="site-btn"
                  type="submit"
                >
                  {profitLoader ? 'sending..' : 'Send'}
                </button>
              </div>
            </form>
            {/* 3rd */}
            <form className="modal-box" onSubmit={onStatusForm}>
              <div className="cred-form select-form">
                <div className="box1 form-group ">
                  {statusError && <div className="err-msg">{statusError}</div>}
                  <label htmlFor="status">Update Transaction Status</label>
                  <select
                    id="status"
                    name="status"
                    onChange={(e) => setUpdateStatus(e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <button className="box2 site-btn" type="submit">
                  {statusLoader ? 'Updating..' : 'Update'}
                </button>
              </div>
            </form>
          </div>
          {/* STOP */}
        </div>
        {/* Modal content end */}
      </div>
    </div>
  );
};

export default AdminTransactionView;
