import CoinsRepository from './CoinsRepository';

// CREATE IMAGE LINK
const createImg = async (data) => {
  try {
    const response = await CoinsRepository.handleImgCreate(data);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {}
};

// UPDATE TEXT
const updateText = async (data) => {
  try {
    const response = await CoinsRepository.handleTextUpdate(data);

    if (response.status === 200) {
      return true;
    }
  } catch (e) {}
};

// CREATE TEXT
const createText = async (data) => {
  try {
    const response = await CoinsRepository.handleTextCreate(data);

    if (response.status === 200) {
      return true;
    }
  } catch (e) {}
};

// DELETE TEXT
const deleteText = async (coinId) => {
  const data = {
    coinId: coinId
  };
  try {
    const response = await CoinsRepository.handleTextDelete(data);

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

// EXPORT
const CoinsBloc = {
  createImg,
  updateText,
  createText,
  deleteText
};

// export { createImg, updateImg updateText };
export default CoinsBloc;
