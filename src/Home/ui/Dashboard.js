import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CoinContext } from '../../CoinProvider';
// import useRequest from '../bloc/useRequest'; //FIX

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';
import Footer from '../../admin/components/Footer';
import TransactionTable from '../../Transaction/ui/TransactionTable';
// import LoaderSvg from '../../components/LoaderSvg';

import { ReactComponent as Svg8 } from '../../static/images/circleshape.svg';
import { ReactComponent as Svg9 } from '../../static/images/Base.svg';

import '../../static/css/dashboard.css';

const Dashboard = () => {
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const { getUser, getGeneralWalletBalance, walletBalance } =
    useContext(CoinContext);

  // FIX
  // const [fetcher] = useRequest();
  // const fetchById = useCallback((id) => {
  //   fetcher(id);
  // }, []);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    // const flow = async () => {
    cryptoWidget();
    cryptoWidget2();
    getUser();
    getGeneralWalletBalance(userId);
    setLoader(true);
    // };
    // flow();

    // eslint-disable-next-line
  }, []);

  const cryptoWidget = async () => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      /* JSON object */
      defaultColumn: 'overview',
      screener_type: 'crypto_mkt',
      displayCurrency: 'USD',
      colorTheme: 'dark',
      locale: 'en',
      width: '101%',
      // minHeight: '101%',
      // height: '20vh',
      isTransparent: true
    });
    document.getElementById('myContainer').appendChild(script);
  };

  const cryptoWidget2 = async () => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      /* JSON object */
      defaultColumn: 'oscillators',
      screener_type: 'crypto_mkt',
      displayCurrency: 'USD',
      colorTheme: 'dark',
      locale: 'en',
      width: '101%',
      // minHeight: '101%',
      // height: '20vh',
      isTransparent: true
    });
    document.getElementById('myContainer2').appendChild(script);
  };

  const redirectToDeposit = () => {
    history.push('/coins');
  };

  const redirectToWithdraw = () => {
    history.push('/coins');
  };

  // MAKE SURE USER CAN'T GOTO LOGIN PAGE
  const admin = window.localStorage.getItem('userLevel');
  // if (loggedIn === 'admin') {
  //   return <Redirect to="/admin" />;
  // }
  return (
    <>
      <NavBar />
      <SideBar />
      {/* {!loader && <LoaderSvg />} */}
      <main className="dashmain">
        <Title title="Dashboard" />
        {admin === 'admin' && (
          <button
            onClick={() => {
              history.push('admin');
              window.location.reload('/admin');
            }}
            className="admin-btn"
          >
            ADMIN PANEL
          </button>
        )}

        <section className="section-one">
          <div className="boards">
            <div
              onMouseEnter={() => getGeneralWalletBalance(userId)}
              style={{ cursor: 'wait' }}
              className="overview"
            >
              <Svg8 />
              <h2>{walletBalance.balance ?? '0.00'}</h2>
              <div id="design">
                <h4>Wallet Balance</h4>
                <p>+{walletBalance.profit ?? '0.00'}</p>
                <Svg9 />
              </div>
            </div>
            <div
              onMouseEnter={() => getGeneralWalletBalance(userId)}
              style={{ cursor: 'wait' }}
              className="overview"
            >
              <Svg8 />
              <h2>{walletBalance.profit ?? '0.00'}</h2>
              <div id="design">
                <h4>Last Profit</h4>
                {/* <p>+{walletBalance.profit}</p> */}
                <Svg9 />
              </div>
            </div>
            <div className="wallet">
              <h3>Wallet</h3>
              <button
                style={{ cursor: 'pointer' }}
                onClick={() => redirectToWithdraw()}
              >
                Withdraw Funds
              </button>
              <button
                style={{ cursor: 'pointer' }}
                onClick={() => redirectToDeposit()}
              >
                Deposit Funds
              </button>
            </div>
          </div>
        </section>

        {/* Trader */}
        <div className="crypto">
          <div id="myContainer">
            <div className="tradingview-widget-container">
              <div className="tradingview-widget-container__widget"></div>
            </div>
          </div>
        </div>
        {/* Trader */}
        {/* Trader2 */}
        <div className="crypto">
          <div id="myContainer2">
            <div className="tradingview-widget-container">
              <div className="tradingview-widget-container__widget"></div>
            </div>
          </div>
        </div>
        {/* Trader */}
        {/* cove */}
        <div className="crypto">
          <div className="background">
            <cove-markets-market-ticker-tape
              instrumentSelection="BTC-USD,ETH-USD,SOL-USD,ADA-USD"
              position="center"
              width="102%"
              maxWidth="110vw"
              border="20px solid #151001 "
              showBorder="true"
            ></cove-markets-market-ticker-tape>
          </div>
        </div>
        {/* cove */}

        <TransactionTable />
        <Footer />
      </main>
    </>
  );
};

export default Dashboard;
