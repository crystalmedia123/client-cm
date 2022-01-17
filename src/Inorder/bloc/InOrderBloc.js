import InOrderRepsitory from './InOrderRepsitory';

// CREATE COIN WALLET
const createMyCoinWallet = async (coinId, userId) => {
  const obj = {
    coin: coinId,
    owner: userId
  };
  try {
    const response = await InOrderRepsitory.handleMyCoinWalletCreate(obj);

    if (response.status === 200) {
      return true;
    }
  } catch (ex) {}
};

// EXPORT
const InOderBloc = {
  createMyCoinWallet
};

export default InOderBloc;
