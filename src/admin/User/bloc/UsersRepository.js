import NetworkProvider from '../../../networks_provider/Network_Provider';
import NetworkConfig from '../../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// GET ALL USERS
const getAllUsers = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().ALL_USERS,
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {}
};

const getOneUser = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().GET_ONE_USER(params.userId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {}
};

const UsersRepository = {
  getAllUsers,
  getOneUser
};

export default UsersRepository;
