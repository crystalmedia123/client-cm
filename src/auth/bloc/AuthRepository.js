import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// POST LOGIN
const authLogin = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().LOGIN_URL,
      body: params,
      method: 'post'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// GET CURRENTLY LOGGED USER AFTER DECODING JWT
const authGetUser = async () => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().GET_SINGLE_USER,
      body: '',
      method: 'get'
    });
    //
    return response;
  } catch (e) {}
};

// POST REGISTER
const authRegister = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().REGISTER_URL,
      body: params,
      method: 'post'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// POST RESET PASSWORD
const authResetPassword = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().RESET_PASSWORD_URL,
      body: params,
      method: 'post'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

// PUT CHANGE PASSWORD
const authChangePassword = async (data) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().CHANGE_PASSWORD_URL(data.userId),
      body: data,
      type: 'text'
    });

    return response;
  } catch (e) {
    throw e;
  }
};

const AuthsRepository = {
  authLogin,
  authGetUser,
  authRegister,
  authResetPassword,
  authChangePassword
};

export default AuthsRepository;
