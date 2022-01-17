import TransactionsRepository from './TransactionRepository';

// // GET ALL TRANSACTIONS
// const getAllTransactions = async () => {
//

//   try {
//     const response = await TransactionsRepository.getAllTransactions();
//

//     if (response.status === 200) {
//       response.success = true;
//       return response;
//     }
//   } catch (e) {
//
//     const errorMessage = {
//       statuscode: 400,
//       error: e.response
//     };
//     throw errorMessage;
//   }
// };

// GET ALL TRANSACTIONS PAGINATION
const getAllTransactions = async (count) => {
  try {
    const response = await TransactionsRepository.getAllTransactions(count);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// GET SINGLE TRANSACTION WALLET
const getOneTransactionWallet = async (walletId) => {
  try {
    const response = await TransactionsRepository.getOneTransactionWallet(
      walletId
    );

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// GET SINGLE TRANSACTION MYCOIN
const getOneTransactionMyCoin = async (coinAddressId) => {
  try {
    const response = await TransactionsRepository.getOneTransactionMyCoin(
      coinAddressId
    );

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// GET ALL MY TRANSACTIONS
const getMyTransactions = async (userId) => {
  try {
    const response = await TransactionsRepository.getMyTransactions(userId);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// UPDATE BALANCE
const updateBalance = async (coinAddressId, sub, updateBalance) => {
  const data = {
    coinAddressId: coinAddressId,
    subtract: sub,
    amount: updateBalance
  };
  try {
    const response = await TransactionsRepository.transactionBalanceUpdate(
      data
    );

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// UPDATE PROFIT
const updateProfit = async (coinAddressId, updateProfit) => {
  const obj = {
    coinAddress: coinAddressId,
    amount: updateProfit
  };
  try {
    const response = await TransactionsRepository.transactionProfitUpdate(obj);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// UPDATE STATUS
const updateStatus = async (walletId, updateStatus) => {
  const data = {
    walletId,
    transactionStatus: updateStatus
  };
  try {
    const response = await TransactionsRepository.transactionStatusUpdate(data);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// DELETE TRANSACTION
const deleteTrans = async (data) => {
  try {
    const response = await TransactionsRepository.deleteTrans(data);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// EXPORT
const TransactionsBloc = {
  getAllTransactions,
  getOneTransactionWallet,
  getOneTransactionMyCoin,
  getMyTransactions,
  updateBalance,
  updateProfit,
  updateStatus,
  deleteTrans
};

// export { createImg, updateImg updateText };
export default TransactionsBloc;
