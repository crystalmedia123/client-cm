import React from 'react';
import { Link } from 'react-router-dom';

const Table = () => {
  return (
    <>
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
            <tr className="row">
              <td>14/01/2019</td>
              <td>12345678</td>
              <td>Bitcoin</td>
              <td>$2000</td>
              <td className="status">
                {' '}
                <span className="danger">Completed</span>
              </td>
            </tr>
            <tr className="row">
              <td>14/01/2019</td>
              <td>12345678</td>
              <td>Bitcoin</td>
              <td>$2000</td>
              <td className="status">
                {' '}
                <span className="danger">Completed</span>
              </td>
            </tr>
            <tr className="row">
              <td>14/01/2019</td>
              <td>12345678</td>
              <td>Bitcoin</td>
              <td>$2000</td>
              <td className="status">
                {' '}
                <span className="danger">Completed</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="seemore">
          <Link to="#">See More</Link>
        </div>
      </section>
    </>
  );
};

export default Table;
