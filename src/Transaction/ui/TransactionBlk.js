import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import TransactionsRepository from '../bloc/TransactionBloc';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';
import Footer from '../../admin/components/Footer';

const Transaction = () => {
  // REVIEW useState([])
  const [myTransactions, setMyTransactions] = useState({});
  useEffect(() => {
    const getMyTrans = async () => {
      const userId = localStorage.getItem('userId');

      // REVIEW ({userId}) == (params.userId)
      const isTransaction = await TransactionsRepository.getMyTransactions(
        userId
      );

      setMyTransactions(isTransaction);
    };
    getMyTrans();
  }, []);

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="" />
        <section className="table-sec">
          <h3>Transactions</h3>
          <table className="table">
            <tbody>
              <tr className="start">
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
              {/* ROW */}
              {myTransactions.data?.map((trans, index) => (
                <tr key={index} className="row">
                  <td>{trans.createdAt}</td>
                  <td>{trans.coinAddress.balance}</td>
                  <td>{trans.amount}</td>
                  <td>{trans.owner.name}</td>
                  <td className="status">
                    {' '}
                    <span className="danger">{trans.transactionStatus}</span>
                  </td>
                </tr>
              ))}
              {/* ROW END */}
            </tbody>
          </table>
          <div className="seemore">
            <Link to="#">See More</Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Transaction;
