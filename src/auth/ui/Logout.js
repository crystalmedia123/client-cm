import { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedin');
    localStorage.removeItem('userLevel');
    localStorage.removeItem('userId');
    localStorage.removeItem('walletId');
    localStorage.removeItem('coinId');
    window.location = '/login';
  }, []);
  return null;
};

export default Logout;
