import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TransactionsBloc from '../../../Transaction/bloc/TransactionBloc';

import Swal from 'sweetalert2';

import NavBar from '../../../admin/components/NavBar';
import SideBar from '../../../admin/components/SideBar';
import Title from '../../../components/title';
import AdminTransactionView from './AdminTransactionView';

import Loader from 'react-loader-spinner';

const AdminTransaction = () => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [transactionWallet, setTransactionWallet] = useState([]);
  const [transactionMyCoin, setTransactionMyCoin] = useState([]);
  const [walletId, setWalletId] = useState('');
  const [coinAddressId, setCoinAddressId] = useState('');
  useEffect(() => {
    allTransactions();
  }, [walletId, coinAddressId]);

  const allTransactions = async () => {
    const isTransactions = await TransactionsBloc.getAllTransactions();

    setTransactions(isTransactions.data);
    setLoading(true);
  };

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

  const handleDelete = (transId) => async () => {
    await Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this record!',
      icon: 'warning',
      background: '#121007',
      width: '50em'
    });

    const isDeletTrans = await TransactionsBloc.deleteTrans(transId);
    if (isDeletTrans) {
      Swal.fire(' Your record has been deleted!', {
        icon: 'success',
        background: '#121007',
        width: '50em'
      });
      setInterval(() => {
        window.location.reload();
      }, 3000);
    } else {
      Swal.fire({
        title: 'Something went wrong!',
        background: '#121007',
        width: '50em'
      });
    }
  };
  // FORMAT DATE
  const date = (data) => new Date().toISOString().slice(0, 10);
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title />
        <section className="table-sec">
          <h3>Transactions</h3>
          <table className="table2 table">
            {loading ? (
              <tbody>
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
                    <td>{date(trans.createdAt)}</td>
                    <td>{trans._id}</td>
                    <td>{trans.owner.name}</td>
                    <td>{trans.owner.email}</td>
                    <td>{trans.amount}</td>
                    <td>{trans.transactionType}</td>
                    <td className="status">
                      {' '}
                      <span className={`${trans.transactionStatus}`}>
                        {trans.transactionStatus}
                      </span>
                    </td>
                    <td>
                      walletID
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
          <div className="seemore">
            <Link to="#">See More</Link>
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
