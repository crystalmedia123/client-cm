import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// POST COIN WALLET
const handleMyCoinWalletCreate = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().CREATE_MYCOIN_WALLET,
      body: params,
      method: 'post'
    });

    return response;
  } catch (e) {}
};

const InOrdersRepository = {
  handleMyCoinWalletCreate
};

export default InOrdersRepository;
