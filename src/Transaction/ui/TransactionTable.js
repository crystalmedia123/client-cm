import React, { useEffect, useContext } from 'react';
import { CoinContext } from '../../CoinProvider';

import Loader from 'react-loader-spinner';

const TransactionTable = () => {
  const { myTransactions, getMyTransactions, getUser, loading } =
    useContext(CoinContext);

  useEffect(() => {
    trans(); // eslint-disable-next-line
  }, []);

  const trans = async () => {
    await getUser();
    const userId = localStorage.getItem('userId');
    await getMyTransactions(userId);
  };

  // FORMAT DATE
  const date = (data) => new Date().toISOString().slice(0, 10);

  return (
    <>
      <section className="boder-black-trans">
        <h3>Transactions</h3>
        <div className="scrollit">
          <table className="table table2">
            {loading ? (
              <tbody>
                <tr className="start">
                  <th>Date</th>
                  <th>Transaction ID</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Transaction Type</th>
                  <th>Status</th>
                </tr>

                {/* ROW */}
                {myTransactions?.map((trans, index) => (
                  <tr key={index} className="row">
                    <td>{date(trans.createdAt)}</td>
                    <td>{trans._id}</td>
                    <td>{trans.owner.name}</td>
                    <td>{trans.amount}</td>
                    <td>{trans.transactionType}</td>
                    <td className="status">
                      {' '}
                      <span className={`${trans.transactionStatus}`}>
                        {trans.transactionStatus}
                      </span>
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
      </section>
    </>
  );
};

export default TransactionTable;
