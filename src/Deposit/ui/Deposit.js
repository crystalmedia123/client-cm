import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import DepositBloc from '../bloc/DepositBloc';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CoinContext } from '../../CoinProvider';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';
import Footer from '../../admin/components/Footer';

import '../../static/css/deposite.css';

import { ReactComponent as Copy } from '../../static/images/copy.svg';
import ReactTooltip from 'react-tooltip';

import Swal from 'sweetalert2';

// CALL TWO FUNC
// 1. Post to transaction
// 2. Get 1 of 10 coin to extract coin.address
// 3.
const Deposit = () => {
  const history = useHistory();
  const coinId = history.location.pathname.split('/')[2];

  const [amount, setAmount] = useState('');
  const [cryptoValue, setCryptoValue] = useState('');

  const [error, setError] = useState('');
  // Loader on Button
  const [depositLoader, setDepositLoader] = useState(false);

  // CONTEXT
  const {
    singleCoin,
    getSingleCoin,
    myCoin,
    qrCodeAddress,
    qrCode,
    coinAddress
  } = useContext(CoinContext);

  // GET USER FROM LOCALSTORAGE
  const userId = window.localStorage.getItem('userId');

  // MOUNT
  useEffect(() => {
    getSingleCoin(userId, coinId);
    qrCodeAddress(coinId);
    // eslint-disable-next-line
  }, []);

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDepositLoader(true);

    try {
      const isDeopsit = await DepositBloc.doSubmit(
        amount,
        window.localStorage.getItem('userId'),
        window.localStorage.getItem('walletId')
      );

      if (isDeopsit.status === 200) {
        setDepositLoader(false);
        Swal.fire({
          icon: 'success',
          title: 'Transaction awaiting comfirmation',
          confirmButtonText: `<a href="/transaction">Ok</a>`,
          background: '#121007',
          width: '50em',
          allowOutsideClick: false
        }).then(history.push(`/transaction`));
      }
    } catch (e) {
      if (e.error.data.error === 'amount is required') {
        setDepositLoader(false);
        setError(e.error.data.error);
      }
    }

    //
    // history.push('/transaction');
  };

  const handleChange = async (e) => {
    setAmount(e.target.value);
    try {
      const coinCryptoAbbr = singleCoin[0]?.coin.abbr;
      const amount = e.target.value;

      const data = await DepositBloc.getExchange({ coinCryptoAbbr, amount });

      const a = data.data.data?.quote;

      const b = a[`${coinCryptoAbbr}`].price;

      function truncate(num, places) {
        return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
      }

      const c = truncate(b, 5);

      setCryptoValue(c);
    } catch (e) {}
  };

  //

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Deposit Page" />
        {myCoin?.map((coin, index) => (
          <section key={index} className="box-two">
            <h3>{coin.name}</h3>
            <div className="row">
              <div className="img">
                <img src={qrCode} alt="bar code" />
              </div>
              <form onSubmit={handleSubmit}>
                {error && (
                  <h3 style={{ color: 'red', margin: 'auto auto' }}>{error}</h3>
                )}
                <div className="form-group">
                  <div className="btc-convert">
                    <p>{amount === '' ? '' : cryptoValue}</p>
                    <span>{coin.abbr}</span>
                  </div>
                  <label htmlFor="amount">Amount</label>
                  <input
                    autoComplete="off"
                    type="text"
                    id="amount"
                    placeholder="amount"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group address">
                  <label htmlFor="address">Wallet Adress</label>
                  <input
                    style={{ cursor: 'not-allowed' }}
                    disabled
                    type="text"
                    id="address"
                    defaultValue={coinAddress}
                    placeholder={coinAddress}
                    onChange={() => {}}
                  />
                  <CopyToClipboard text={coinAddress}>
                    <span
                      data-tip="Copy Address to Clipboard"
                      className="address-copy"
                    >
                      {' '}
                      <Copy />
                      {/* copy text */}
                    </span>
                  </CopyToClipboard>
                  <ReactTooltip />
                </div>
                <button className="site-btn" type="submit">
                  {depositLoader ? 'Transfering' : 'Deposit'}
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

export default Deposit;
