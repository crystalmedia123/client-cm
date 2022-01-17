import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// POST DEPOSIT
const createDeposit = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().DEPOSIT_TRANSACTION,
      body: params,
      method: 'post'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// GET OLD EXCHANGE
// const getExchange = async (params1, params2) => {
//
//   try {
//     var response = NetworkProvider().EXCHANGE(params1, params2);
//
//     return response;
//   } catch (e) {
//
//   }
// };

const getExchange = async (data) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().EXCHANGE(data.cryptoAbbr, data.amount),
      body: '',
      type: 'getex'
    });

    return response;
  } catch (e) {}
};

const DepositsRepository = {
  createDeposit,
  getExchange
};
export default DepositsRepository;
