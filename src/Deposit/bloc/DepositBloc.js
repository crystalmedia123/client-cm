import DepositsRepository from './DepositRepository';

const doSubmit = async (amount, userId, walletId) => {
  const obj = {
    owner: userId,
    coinAddress: walletId,
    transactionType: 'deposit',
    amount: amount
  };

  try {
    const response = await DepositsRepository.createDeposit(obj);

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

// GET EXCHANGE VALUES
const getExchange = async (coinCryptoAbbr, amount) => {
  const data = {
    cryptoAbbr: coinCryptoAbbr.coinCryptoAbbr,
    amount: coinCryptoAbbr.amount
  };
  try {
    const response = await DepositsRepository.getExchange(data);

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

const DepositBloc = {
  doSubmit,
  getExchange
};

export default DepositBloc;
