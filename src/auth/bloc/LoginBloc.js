import SessionManager from '../../session_manager/Session_Manager';
import AuthsRepository from './AuthRepository';

const doSubmit = async (data) => {
  try {
    const response = await AuthsRepository.authLogin(data);

    SessionManager(response.data);
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
