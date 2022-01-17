import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TransactionsBloc from '../../../Transaction/bloc/TransactionBloc';

import axios from 'axios';
import Swal from 'sweetalert2';

import NavBar from '../../../admin/components/NavBar';
import SideBar from '../../../admin/components/SideBar';
import Title from '../../../components/title';
import AdminTransactionView from './AdminTransactionView';

import Loader from 'react-loader-spinner';

const AdminTransaction = () => {
  let [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [transactionWallet, setTransactionWallet] = useState([]);
  const [transactionMyCoin, setTransactionMyCoin] = useState([]);
  const [walletId, setWalletId] = useState('');
  const [coinAddressId, setCoinAddressId] = useState('');

  useEffect(() => {
    allTransactions(1);
  }, [walletId, coinAddressId]);

  // ALL TRANSACTIONS
  const allTransactions = async (count) => {
    const isTransactions = await TransactionsBloc.getAllTransactions(count);

    setTransactions(isTransactions.data.docs);
    setLoading(true);
  };

  // ONLOAD GET WALLET && MYCOIN OBJ
  const oneTransaction_Wallet_MyCoin = async (ids) => {
    const walletIdcoinAddressId = ids.split('/');
    let [walletId, coinAddressId] = walletIdcoinAddressId;
    const isTransactionWallet = await TransactionsBloc.getOneTransactionWallet(
      walletId
    );

    setTransactionWallet(isTransactionWallet.data);

    const isTransactionMyCoin = await TransactionsBloc.getOneTransactionMyCoin(
      coinAddressId
    );

    setTransactionMyCoin(isTransactionMyCoin.data);
  };

  //
  //
  //
  //
  //

  // EDIT TRANSACTION MODAL
  const modalPop = (ids) => async () => {
    // GET ID's FROM TRANSACTION TABLE
    //
    const walletIdcoinAddressId = ids.split('/');
    //
    let [walletId, coinAddressId] = walletIdcoinAddressId;
    setCoinAddressId(coinAddressId);
    setWalletId(walletId);
    //
    //
    oneTransaction_Wallet_MyCoin(ids);

    // CALL MODAL
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];
    modal.style.display = 'block';

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  };

  // DELETE TRANSACTION
  const handleDelete = (transId) => async () => {
    // DEFINE HEADER
    var token = window.localStorage.getItem('token') || [];
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      }
    };

    // PROMISE
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this record!',
      icon: 'warning',
      buttons: true
    }).then((willGet) => {
      if (willGet) {
        axios({
          method: 'delete',
          url: `https://bitsquadtraders-api.herokuapp.com/api/v1/transactions/${transId}`,
          headers: headers.headers
        }).then((response) => {
          // setTransactions(response?.data);

          if (response.status === 200) {
            Swal.fire(' Transaction has been deleted!', {
              icon: 'success',
              background: '#121007',
              width: '50em'
            });
            setInterval(() => {
              window.location.reload();
            }, 2000);
          } else {
            Swal.fire({
              title: 'Something went wrong!',
              background: '#121007',
              width: '50em'
            });
          }
        });

        // .catch((e) => {
        //   Swal.fire({ text: e.response.data.msg, icon: 'error' });
        // });
      }
    });
  };

  // FORMAT DATE
  const date = (data) => new Date().toISOString().slice(0, 10);

  // PAGINATION
  const increment = () => {
    setLoading(false);
    count += 1;
    setCount(count);

    allTransactions(count);
  };

  const decrement = () => {
    setLoading(false);
    count -= 1;
    setCount(count);

    allTransactions(count);
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title />
        <section className="boder-black">
          <h3>Transactions</h3>
          <div className="scrollit">
            <table className="table2 table">
              <tr className={loading ? 'page-hide' : 'start'}>
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Transaction Type</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
              {loading ? (
                <tbody className="">
                  <tr className="start">
                    <th>Date</th>
                    <th>Transaction ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Amount</th>
                    <th>Transaction Type</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                  {/* ROW */}
                  {transactions?.map((trans, index) => (
                    <tr key={index} className="row">
                      <td>{date(trans?.createdAt)}</td>
                      <td>{trans?._id}</td>
                      <td>{trans.owner?.name}</td>
                      <td>{trans.owner?.email}</td>
                      <td>{trans?.amount}</td>
                      <td>{trans?.transactionType}</td>
                      <td className={`status ${trans.transactionStatus}`}>
                        {' '}
                        <span className={`${trans.transactionStatus}`}>
                          {trans.transactionStatus}
                        </span>
                      </td>
                      <td>
                        <i
                          onClick={modalPop(
                            `${trans._id}/${trans.coinAddress._id}`
                          )}
                          className="fa fa-th mouse-pointer"
                        />
                      </td>
                      <td>
                        <Link onClick={handleDelete(trans._id)}>DELETE</Link>
                      </td>
                    </tr>
                  ))}
                  {/* ROW END */}
                </tbody>
              ) : (
                <div className="loader">
                  <Loader
                    type="Puff"
                    color="#EFA331"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                  />
                </div>
              )}
            </table>
          </div>
          <div className="page-page">
            <div className={count === 0 ? 'page-hide' : 'seemore page-show'}>
              <Link onClick={decrement} to="#">
                Prev
              </Link>
            </div>
            <div className={count === 0 ? 'page-hide' : 'seemore page-show'}>
              <Link to="#">{count}</Link>
            </div>
            <div className="seemore">
              <Link onClick={increment} to="#">
                Next
              </Link>
            </div>
          </div>
        </section>
        <AdminTransactionView
          transactionWallet={transactionWallet}
          transactionMyCoin={transactionMyCoin}
        />
      </main>
    </>
  );
};

export default AdminTransaction;
