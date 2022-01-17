// import { CoinContext } from "../CoinProvider";

export default function SessionManager(res) {
  // const { user, setUser } = useContext(Mycontext);
  // setUser([res.data.user]);

  window.localStorage.setItem('userLevel', res.level);
  window.localStorage.setItem('userId', res._id);
  window.localStorage.setItem('token', res.token);
  window.localStorage.setItem('loggedIn', true);
}
