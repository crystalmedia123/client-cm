// CHECK COIN_PROVIDER FOR THE FUNCTION
// authGetUser || getLogged User

import AuthsRepository from './AuthRepository';

const doSubmit = async (data) => {
  try {
    const response = await AuthsRepository.authRegister(data);

    // SessionManager(response.data);
    if (response.status === 201) {
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

export default doSubmit;
