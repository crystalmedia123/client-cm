import ProfileRepository from './ProfileRepository';

// CREATE IMAGE LINK
const createImg = async (data) => {
  try {
    const response = await ProfileRepository.handleImgCreate(data);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    throw e;
  }
};

// UPDATE || APPEND IMAGE LINK
const updateImg = async (data) => {
  try {
    const response = await ProfileRepository.handleImgUpdate(data);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    throw e;
  }
};

// UPDATE TEXT
const updateText = async (data) => {
  try {
    const response = await ProfileRepository.handleTextUpdate(data);

    if (response.status === 200) {
      return true;
    }
  } catch (e) {
    throw e;
  }
};

// EXPORT
const CredentialsBloc = {
  createImg,
  updateImg,
  updateText
};

// export { createImg, updateImg updateText };
export default CredentialsBloc;
