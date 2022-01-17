import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// GET ALL TRANSACTIONS
// const getAllTransactions = async () => {
//
//   try {
//     var response = await NetworkConfig({
//       path: NetworkProvider().ALL_TRANSACTIONS,
//       body: '',
//       method: 'get'
//     });
//
//     return response;
//   } catch (e) {
//
//     throw e;
//   }
// };

// GET ALL TRANSACTIONS PAGINATE
const getAllTransactions = async (count) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().PAGINATE_ALL_TRANSACTIONS(count),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// GET SINGLE TRANSACTION WALLET
const getOneTransactionWallet = async (walletId) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().GET_ONE_TRANSACTION_WALLET(walletId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// GET SINGLE TRANSACTION MYCOIN
const getOneTransactionMyCoin = async (coinAddressId) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().GET_ONE_TRANSACTION_MYCOIN(coinAddressId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// GET ALL MY TRANSACTIONS
const getMyTransactions = async (userId) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().GET_MY_TRANSACTIONS(userId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// PUT BALANCE
const transactionBalanceUpdate = async (data) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPDATE_BALANCE(data.coinAddressId, data.subtract),
      body: data,
      type: 'text'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// PUT PROFIT
const transactionProfitUpdate = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPDATE_PROFIT(params.coinAddress),
      body: params,
      type: 'text'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// PUT STATUS
const transactionStatusUpdate = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPDATE_TRANSACTION_STATUS(params.walletId),
      body: params,
      type: 'text'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// DELETE TRANSACTION
const deleteTrans = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().DELETE_TRANSACTION(params),
      body: '',
      method: 'delete'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

const TransactionsRepository = {
  getAllTransactions,
  getOneTransactionWallet,
  getOneTransactionMyCoin,
  getMyTransactions,
  transactionBalanceUpdate,
  transactionProfitUpdate,
  transactionStatusUpdate,
  deleteTrans
};

export default TransactionsRepository;
