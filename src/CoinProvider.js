import React, { useEffect, useState } from 'react';

// REPOS
import WalletsRepository from './Home/bloc/WalletsRepository';
import AuthsRepository from './auth/bloc/AuthRepository';
import UsersRepository from './admin/User/bloc/UsersRepository';
import CoinsRepository from './admin/Coins/bloc/CoinsRepository';
import TransactionsRepository from './Transaction/bloc/TransactionRepository';

// CONTEXT
const CoinContext = React.createContext(null);

// HOOKS
const CoinProvider = (props) => {
  // STATE
  const [state, setState] = useState({ name: 'anyi' });
  // AUTH
  const [user, setUser] = useState([]);
  const [redirect, setRedirect] = useState(false);
  // COINS
  const [coins, setCoins] = useState([]);
  const [oneCoin, setOneCoin] = useState([]);
  const [singleCoin, setSingleCoin] = useState([]);
  const [myCoin, setMyCoin] = useState([]);
  const [mineCoin, setMineCoin] = useState([]);
  const [myCoinWallet, setMyCoinWallet] = useState([]);
  // USERS
  const [users, setUsers] = useState([]);
  // TRANSACTIONS
  const [myTransactions, setMyTransactions] = useState([]);
  // GENERAL BALANCE
  const [walletBalance, setWalletBalance] = useState([]);
  // QRCODE
  const [qrCode, setQrCode] = useState('');
  const [coinAddress, setCoinAddress] = useState('');
  // ERROR
  const [error, setError] = useState(false);
  const [createWalletError, setCreateWalletError] = useState('');
  // LOADING
  const [loading, setLoading] = useState(false);

  // LOGGED IN USER ON PAGE LOAD
  useEffect(() => {
    // getUser();
  }, []);

  // GET CURRENTLY LOGGED USER AFTER DECODING JWT
  // route ( /authenticate )
  const getUser = async () => {
    try {
      const response = await AuthsRepository.authGetUser();
      window.localStorage.setItem('userId', response.data._id);
      setUser([response.data]);
    } catch (e) {}
  };

  // GET ALL USER_SERVICE
  // route ( /users)
  const allUsers = async () => {
    try {
      const response = await UsersRepository.getAllUsers();
      setUsers(response.data);
    } catch (e) {}
  };

  // COINS ________________________________________________________
  // GET 10 coins
  // route ( /coins )
  const fetchCoin = async () => {
    try {
      const response = await CoinsRepository.handleAllGet();
      // FIX ()
      setCoins(response.data);
      setLoading(true);
    } catch (e) {}
  };

  // GET SINGLE COIN
  // route ( /coins/coinId )
  const fetchOneCoin = async (coinId) => {
    try {
      const response = await CoinsRepository.handleSingleGet(coinId);
      // FIX []
      setOneCoin([response.data]);
    } catch (e) {
      setError(true);
    }
  };

  // TRANSACTIONS ________________________________________________________
  // GET singleCoin (transactions)
  // Param ( /mycoins/mine/userId/coinId )
  const getSingleCoin = async (userId, coinId) => {
    try {
      // WILL GET COIN ID
      const response = await WalletsRepository.handleTransaction(
        userId,
        coinId
      );
      window.localStorage.setItem('coinId', response.data.coin._id);
      window.localStorage.setItem('walletId', response.data._id);
      setSingleCoin([response.data]);
    } catch (e) {
      setError(true);
    }
  };

  // POST create mycoin wallet if not existing
  // Param ( /mycoins )
  const createMyCoinWallet = async (coinId, userId) => {
    try {
      // WILL GET COIN ID
      const obj = {
        coin: coinId,
        owner: userId
      };
      const response = await WalletsRepository.handleMyCoinWalletCreate(obj);

      setMyCoinWallet([response.data.success]);
    } catch (e) {
      setCreateWalletError(e.response.data);

      const errorMessage = {
        statuscode: 400,
        error: e.response.data
      };
      throw errorMessage;
    }
  };

  // GET Coin details
  // Param ( /coins/coinId )
  const getMyCoin = async (coinId) => {
    try {
      const response = await WalletsRepository.handleWallet(coinId);
      setMyCoin([response.data]);
      return response;
    } catch (e) {
      setError(true);
    }
  };

  // GET myCoin details
  // Param ( /mycoins/walletId )
  const getMineCoin = async (walletId) => {
    try {
      const response = await WalletsRepository.handleMyWallet(walletId);
      setMineCoin([response.data]);
    } catch (e) {
      setError(true);
    }
  };

  // GET GENERAL WALLET BALANCE
  // param ( /wallets/userId)
  const getGeneralWalletBalance = async (userId) => {
    try {
      const response = await WalletsRepository.getGeneralWalletBalance(userId);

      const result = response.data;
      setWalletBalance(result);
      setLoading(true);
    } catch (e) {
      const errorMessage = {
        statuscode: 400,
        error: e.response
      };
      throw errorMessage;
    }
  };

  // TRANSACTIONS__________________
  // GET all myTransactions
  // param ( /transaction/mine/userId)
  // GET ALL MY TRANSACTIONS
  const getMyTransactions = async (userId) => {
    try {
      const response = await TransactionsRepository.getMyTransactions(userId);

      const result = response.data;
      setMyTransactions(result);
      setLoading(true);
    } catch (e) {
      const errorMessage = {
        statuscode: 400,
        error: e.response
      };
      throw errorMessage;
    }
  };

  // ADDRESS FROM 10 COINS ARRAY
  const qrCodeAddress = async (coinId) => {
    let myCoinRes = await getMyCoin(coinId);

    const coinAddressNew = myCoinRes.data?.address;

    setCoinAddress(coinAddressNew);

    const qrCodeNew = `https://chart.googleapis.com/chart?chs=225x225&cht=qr&chl=${coinAddressNew[0]}&chld=L|0`;
    setQrCode(qrCodeNew);
  };

  return (
    <CoinContext.Provider
      value={{
        state,
        setState,
        redirect,
        setRedirect,
        coins,
        fetchCoin,
        oneCoin,
        fetchOneCoin,
        user,
        getUser,
        users,
        allUsers,
        singleCoin,
        getSingleCoin,
        myCoin,
        getMyCoin,
        mineCoin,
        getMineCoin,
        myCoinWallet,
        createMyCoinWallet,
        error,
        setError,
        createWalletError,
        getGeneralWalletBalance,
        walletBalance,
        getMyTransactions,
        myTransactions,
        qrCodeAddress,
        qrCode,
        coinAddress,
        loading
      }}
    >
      {props.children}
    </CoinContext.Provider>
  );
};

export { CoinContext, CoinProvider };
