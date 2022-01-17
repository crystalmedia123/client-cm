import AuthsRepository from './AuthRepository';

const doSubmit = async (email) => {
  const data = {
    email: email
  };
  try {
    const response = await AuthsRepository.authResetPassword(data);

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

export default doSubmit;
