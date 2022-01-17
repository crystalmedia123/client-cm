import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import './static/css/auth_overide.css';
// import './static/css/cred.css';
// import './static/css/trans_two.css';

// import './static/css/deposite.css';
// import './static/css/transaction.css';
// import './static/css/base.css';
// import './static/css/auth.css';
// import './static/css/dashboard.css';
// import './static/css/wallet.css';
// import './static/css/admin_edit.css';
// import './static/css/coins.css';
// import './static/css/navs.css';
import './static/css/custom.css';
import './admin/static/css/admin_custom.css';

import AuthRoute from './components/common//AuthRoute';
import ProtectedRoute from './components/common//ProtectedRoute';
import Admin from './admin/Dashboard/ui/AdminDashboard';
import UsersAdmin from './admin/User/ui/AdminUsers';
import CoinsAdmin from './admin/Coins/ui/AdminCoins';
import CoinsEditAdmin from './admin/Coins/ui/AdminCoinsEdit';
import CoinsCreateAdmin from './admin/Coins/ui/AdminCoinsCreate';
import StakeAdmin from './admin/Stake/ui/AdminStake';
import TransactionAdmin from './admin/Transaction/ui/AdminTransaction';
import Alert from './Alert/ui/Alert';
import Profile from './Profile/ui/Profile';
import Stake from './Stake/ui/Stake';
import Credentials from './Credentials/ui/Credentials';
import Transaction from './Transaction/ui/Transaction';
import Withdraw from './Withdraw/ui/Withdraw';
import Deposit from './Deposit/ui/Deposit';
import InOrder from './Inorder/ui/InOrder';
import Coins from './Coin/ui/Coins';
import Dashboard from './Home/ui/Dashboard';
import ResetPassword from './auth/ui/Reset_Password';
import ForgotPassword from './auth/ui/Forgot_Password';
import ChangePassword from './auth/ui/Change_Password';
import Register from './auth/ui/Register';
import Login from './auth/ui/Login';
import Logout from './auth/ui/Logout';
import PageLoad from './auth/ui/PageLoad';

import NavBar from './components/navbar';

const App = () => {
  useEffect(() => {
    // setTimeout(() => {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('loggedin');
    //   localStorage.removeItem('userLevel');
    //   localStorage.removeItem('userId');
    //   localStorage.removeItem('walletId');
    //   localStorage.removeItem('coinId');
    //   window.location = '/login';
    //   window.location.reload();
    // }, 1000000);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/navbar" component={NavBar} />
        {/* USER ROUTES --------------------------------*/}
        <AuthRoute path="/dashboard" component={Dashboard} />
        <AuthRoute path="/coins" component={Coins} />
        <AuthRoute path="/inorder/:id" component={InOrder} />
        <AuthRoute path="/deposit/:id" component={Deposit} />
        <AuthRoute path="/withdraw/:id" component={Withdraw} />
        <AuthRoute path="/transaction" component={Transaction} />
        <AuthRoute path="/credentials/:id" component={Credentials} />

        <AuthRoute path="/stake" component={Stake} />
        <AuthRoute path="/profile" component={Profile} />
        <AuthRoute path="/alert" component={Alert} />

        {/* AUTH ROUTES --------------------------------*/}
        <Route path="/:id/page-load" component={PageLoad} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/change-password" component={ChangePassword} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Redirect from="/" exact to="/login" />
        {/* <Redirect to={`/${slug}/page-load`} /> */}
      </Switch>

      {/* ADMIN ROUTES --------------------------------*/}
      <Router>
        <Switch>
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/logout" component={Logout} />
          <ProtectedRoute path="/admin" component={Admin} />
          <ProtectedRoute path="/admin-users" component={UsersAdmin} />
          <ProtectedRoute path="/admin-coins" component={CoinsAdmin} />
          <ProtectedRoute
            path="/admin-coins-edit/:id"
            component={CoinsEditAdmin}
          />
          <ProtectedRoute
            path="/admin-coins-create"
            component={CoinsCreateAdmin}
          />
          <ProtectedRoute
            path="/admin-coins-create"
            component={CoinsCreateAdmin}
          />
          <ProtectedRoute path="/admin-stakes" component={StakeAdmin} />
          <ProtectedRoute
            path="/admin-transactions"
            component={TransactionAdmin}
          />
          <Redirect from="/" exact to="/login" />
          {/* <Redirect to={`/${slug}/page-load`} /> */}
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default App;
