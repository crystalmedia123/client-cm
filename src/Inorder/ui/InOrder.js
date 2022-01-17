import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { CoinContext } from '../../CoinProvider';

import Swal from 'sweetalert2';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';
import Footer from '../../admin/components/Footer';

import '../../static/css/trans_two.css';

// 1. GET DETAILS FROM CLICKED COIN
// 2. create a wallet if there is non
const InOrder = () => {
  const history = useHistory();
  const coinId = history.location.pathname.split('/')[2];
  const userId = window.localStorage.getItem('userId');
  const walletId = window.localStorage.getItem('walletId');
  const {
    singleCoin,
    getSingleCoin,
    myCoinWallet,
    createMyCoinWallet,
    // mineCoin,
    getMineCoin
    // createWalletError,
    // error
  } = useContext(CoinContext);

  useEffect(() => {
    getMineCoin(walletId);
    createWalletFlow();
    // eslint-disable-next-line
  }, []);

  const createWalletFlow = async () => {
    try {
      // GET COIN WALLET
      await getSingleCoin(userId, coinId);
      // CREATE COIN WALLET
      await createMyCoinWallet(coinId, userId);
      if (myCoinWallet) {
        Swal.fire(' Wallet Created', {
          icon: 'success',
          background: '#121007',
          width: '50em'
        });
        setInterval(() => {
          window.location.reload();
        }, 3000);
      }
      // HANDLE ERROR
    } catch (e) {
      if (
        e.statuscode === 400 &&
        e.error.error === 'You already own this coin'
      ) {
        history.push(`/inorder/${coinId}`);
      }
    }
  };

  //
  //
  //
  //

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Wallet" />
        {singleCoin?.map((transaction, index) => (
          <section key={index} className="section-two">
            <h3>{transaction.coin.name}</h3>
            <div className="row-two">
              <div className="total">
                <h4>Total</h4>
                <p>{transaction.balance}</p>
              </div>
              <div className="main-info">
                <div className="info">
                  <div>
                    <span>Available</span>
                    <span>{transaction.balance}</span>
                    {/* <span>{transaction.profit}</span> */}
                  </div>
                  <div>
                    <span>In order</span>
                    <span>{transaction.order}</span>
                  </div>
                </div>
                <div className="buttons">
                  <div>
                    <Link
                      to={`/withdraw/${coinId || transaction.coin._id}`}
                      className="btn"
                    >
                      withdraw funds
                    </Link>
                    <Link
                      // to={`/deposit/${transaction.coin._id}`}
                      to={`/deposit/${coinId || transaction.coin._id}`}
                      className="btn"
                    >
                      deposit funds
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        <Footer />
      </main>
    </>
  );
};

export default InOrder;
