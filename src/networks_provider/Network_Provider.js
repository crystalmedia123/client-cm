// 1. Define all endPoints
// 2. Export endPoints

const NetworkProvider = () => {
  const BASE_URL = 'https://bitsquadtraders-api.herokuapp.com/api/v1/';
  const LOGIN_URL = BASE_URL + 'users/login';
  const REGISTER_URL = BASE_URL + 'users';

  const CHANGE_PASSWORD_URL = (userId) =>
    BASE_URL + `users/updatepassword/${userId}`;
  const RESET_PASSWORD_URL = BASE_URL + 'users/forgotpassword';

  const GET_SINGLE_USER = BASE_URL + 'authenticate';
  const FETCH_COIN = BASE_URL + 'coins';
  const CREATE_COIN = BASE_URL + 'coins';
  const DELETE_COIN = (coinId) => BASE_URL + `coins/${coinId}`;
  const CREATE_MYCOIN_WALLET = BASE_URL + 'mycoins';

  const UPDATE_COIN = (coinId) => BASE_URL + `coins/${coinId}`;

  const FETCH_COIN_ID = (userId, coinId) =>
    BASE_URL + `mycoins/mine/${userId}/${coinId}`;

  const FETCH_MYCOIN = (coinId) => BASE_URL + `coins/${coinId}`;
  const FETCH_MINE = (walletId) => BASE_URL + `mycoins/${walletId}`;

  const DEPOSIT_TRANSACTION = BASE_URL + 'transactions';
  const WITHDRAW_TRANSACTION = BASE_URL + 'transactions';

  const UPLOAD_IMAGE = BASE_URL + 'images';
  const UPDATE_USER_IMAGE = (userId) => BASE_URL + `users/updatepics/${userId}`;

  const CREATE_CREDENTIALS = BASE_URL + 'users';
  const UPLOAD_CREDIENTIALS = (userId) => BASE_URL + `users/${userId}`;
  const UPDATE_PROFILE = (userId) => BASE_URL + `users/${userId}`;

  const ALL_USERS = BASE_URL + 'users';
  const GET_ONE_USER = (userId) => BASE_URL + `users/${userId}`;

  const GET_MY_TRANSACTIONS = (userId) =>
    BASE_URL + `transactions/mine/${userId}`;
  const ALL_TRANSACTIONS = BASE_URL + 'transactions';
  const PAGINATE_ALL_TRANSACTIONS = (count) =>
    BASE_URL + `transactions/paginate/all?page=${count}&perPage=15`;
  const GET_ONE_TRANSACTION_WALLET = (walletId) =>
    BASE_URL + `transactions/${walletId}`;
  const GET_ONE_TRANSACTION_MYCOIN = (coinAddressId) =>
    BASE_URL + `mycoins/${coinAddressId}`;
  const DELETE_TRANSACTION = (walletId) =>
    BASE_URL + `transactions/${walletId}`;

  const UPDATE_TRANSACTION_STATUS = (walletId) =>
    BASE_URL + `transactions/${walletId}`;

  const UPDATE_BALANCE = (coinAddressId, subtract) =>
    BASE_URL + `mycoins/${coinAddressId}${subtract}`;
  const UPDATE_PROFIT = (coinAddressId) =>
    BASE_URL + `mycoins/profit/${coinAddressId}`;

  const FETCH_GENERAL_WALLET = (userId) => BASE_URL + `wallets/mine/${userId}`;

  const STAKE = BASE_URL + 'otherwallets';
  const GET_STAKE = BASE_URL + 'otherwallets';
  const SINGLE_STAKE = (stakeId) => BASE_URL + `otherwallets/${stakeId}`;

  // const EXCHANGE = (coinCryptoAbbrId, amountId) =>
  //   axios.get(
  //     `https://api.exchangerate.host/convert?from=${coinCryptoAbbrId}&to=USD&source=crypto&amount=${amountId}`
  //   );

  // const EXCHANGE = BASE_URL + 'mycoins/exchange/all';

  const EXCHANGE = (coinCryptoAbbrId, amountId) =>
    `https://obscure-scrubland-80294.herokuapp.com/https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=${amountId}&symbol=USD&convert=${coinCryptoAbbrId}&CMC_PRO_API_KEY=f0e1256a-2613-4d60-8df2-afe06fb0fe88=`;

  return {
    BASE_URL,
    LOGIN_URL,
    REGISTER_URL,
    CHANGE_PASSWORD_URL,
    RESET_PASSWORD_URL,
    GET_SINGLE_USER,
    FETCH_COIN,
    FETCH_COIN_ID,
    FETCH_MYCOIN,
    FETCH_MINE,
    CREATE_MYCOIN_WALLET,
    CREATE_COIN,
    UPDATE_COIN,
    DELETE_COIN,
    DEPOSIT_TRANSACTION,
    WITHDRAW_TRANSACTION,
    UPLOAD_IMAGE,
    UPDATE_USER_IMAGE,
    UPLOAD_CREDIENTIALS,
    CREATE_CREDENTIALS,
    UPDATE_PROFILE,
    STAKE,
    GET_STAKE,
    SINGLE_STAKE,
    ALL_USERS,
    GET_ONE_USER,
    GET_MY_TRANSACTIONS,
    ALL_TRANSACTIONS,
    PAGINATE_ALL_TRANSACTIONS,
    DELETE_TRANSACTION,
    GET_ONE_TRANSACTION_WALLET,
    GET_ONE_TRANSACTION_MYCOIN,
    UPDATE_TRANSACTION_STATUS,
    UPDATE_BALANCE,
    UPDATE_PROFIT,
    FETCH_GENERAL_WALLET,
    EXCHANGE
  };
};

export default NetworkProvider;
