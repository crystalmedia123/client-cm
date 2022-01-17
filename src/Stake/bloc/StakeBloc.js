import StakesRepository from './StakeRepository';

// CREATE STAKE
const createStake = async (params) => {
  try {
    const response = await StakesRepository.createStake(params);

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

const getAllStake = async () => {
  try {
    const response = await StakesRepository.getAllStake();

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
const StakeBloc = {
  createStake,
  getAllStake
};
export default StakeBloc;
