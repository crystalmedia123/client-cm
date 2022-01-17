import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// POST STAKE
const createStake = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().STAKE,
      body: params,
      method: 'post'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// GET ALL STAKE
const getAllStake = async () => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().GET_STAKE,
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

const StakesRepository = {
  createStake,
  getAllStake
};

export default StakesRepository;
