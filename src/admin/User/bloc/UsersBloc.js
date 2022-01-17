import UsersRepository from './UsersRepository';

// GET ALL USERS
const allUsers = async () => {
  try {
    const response = await UsersRepository.getAllUsers();

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {}
};

// GET ALL USERS
const oneUser = async () => {
  try {
    const response = await UsersRepository.getOneUser();

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {}
};

// EXPORT
const UsersBloc = {
  allUsers,
  oneUser
};

// export { createImg, updateImg updateText };
export default UsersBloc;
