import CredentialsRepository from './CredentialsRepository';

// CREATE IMAGE LINK
const createImg = async (data) => {
  try {
    const response = await CredentialsRepository.handleImgCreate(data);

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

// UPDATE || APPEND IMAGE LINK
const updateImg = async (data) => {
  try {
    const response2 = await CredentialsRepository.handleImgUpdate(data);

    if (response2.status === 200) {
      response2.success = true;
      return response2;
    }
  } catch (e) {}
};

// UPDATE TEXT
const updateText = async (data) => {
  try {
    const response = await CredentialsRepository.handleTextUpdate(data);

    if (response.status === 200) {
      return true;
    }
  } catch (e) {}
};

// POST TEXT || CREATE TEXT
const createText = async (data) => {
  try {
    const response = await CredentialsRepository.handleTextCreate(data);

    if (response.status === 200) {
      return true;
    }
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// EXPORT
const CredentialsBloc = {
  createImg,
  updateImg,
  updateText,
  createText
};

// export { createImg, updateImg updateText };
export default CredentialsBloc;
