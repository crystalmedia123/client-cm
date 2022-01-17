import AuthsRepository from './AuthRepository';

const doSubmit = async (userId, password, oldPassword) => {
  const data = {
    userId: userId,
    oldPassword: oldPassword,
    password: password
  };
  try {
    const response = await AuthsRepository.authChangePassword(data);

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
