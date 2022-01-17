import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// GET singleCoin transaction
// Param ( /mycoins/mine/userId/coinId )
const handleTransaction = async (userId, coinId) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().FETCH_COIN_ID(userId, coinId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

// GET Single Coin details
// Param ( /coins/coinId )
const handleWallet = async (coinId) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().FETCH_MYCOIN(coinId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

// GET myCoin single details
// Param ( /mycoins/walletId )
const handleMyWallet = async (walletId) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().FETCH_MINE(walletId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

// GET general wallet balance
// Param ( /wallets/userId )
const getGeneralWalletBalance = async (userId) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().FETCH_GENERAL_WALLET(userId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

// POST NEW MYCOIN WALLET
const handleMyCoinWalletCreate = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().CREATE_MYCOIN_WALLET,
      body: params,
      method: 'post'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

const WalletsRepository = {
  handleTransaction,
  handleWallet,
  handleMyWallet,
  handleMyCoinWalletCreate,
  getGeneralWalletBalance
};
export default WalletsRepository;
