import WithdrawsRepository from './WithdrawRepository';

const doSubmit = async (amount, userAddress, userId, walletId) => {
  const obj = {
    owner: userId,
    coinAddress: walletId,
    transactionType: 'withdrawal',
    amount: amount,
    walletAddress: userAddress
  };

  try {
    const response = await WithdrawsRepository.createWithdraw(obj);

    if (response.status === 200) {
      return true;
    }
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: 'Upload your valid id card'
    };
    throw errorMessage;

    // throw { statuscode: 400, error: 'Upload your valid id card' };
    // setError(true);
  }
};

export default doSubmit;
