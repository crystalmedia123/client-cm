import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

import { CoinContext } from '../../../CoinProvider';
import CoinsBloc from '../bloc/CoinsBloc';

import NavBar from '../../../admin/components/NavBar';
import SideBar from '../../../admin/components/SideBar';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

import '../../static/css/coins.css';
import '../../static/css/admin_edit.css';
import '../../static/css/admin_custom.css';

const CoinsAdmin = () => {
  const { coins, fetchCoin } = useContext(CoinContext);

  useEffect(() => {
    fetchCoin();
    handleDelete();

    // eslint-disable-next-line
  }, []);

  // FIX COLLECT FROM STATE AND SAVE IN A VARIABLE = LOCALSTORAGE, ONCE ERROR, DELETE FROM LOCALSTORAGE;
  // const coinId = coins[0]._id || window.localStorage.getItem('coinId');

  const handleDelete = (coinId) => async () => {
    try {
      await Swal.fire({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this record!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
        background: '#121007',
        width: '50em'
      });
      const isDeleteCoin = await CoinsBloc.deleteText(coinId);

      if (isDeleteCoin) {
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
    } catch (e) {}

    // ________________________
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'Once deleted, you will not be able to recover this record!',
    //   icon: 'warning',
    //   buttons: true,
    //   dangerMode: true
    // }).then((willDelete) => {
    //   if (willDelete) {
    //     const response = CoinsBloc.deleteText(coinId);
    //     if (response) {
    //
    //       Swal.fire(' Your record has been deleted!', {
    //         icon: 'success'
    //       });
    //       setInterval(() => {
    //         window.location.reload();
    //       }, 3000);
    //     } else {
    //       Swal.fire('Something went wrong!');
    //     }
    //   }
    // });
    // history.push('/admin-coins');
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Coin admin page" />
        {/* CONTENT */}
        <form className="form" style={{ margin: 'auto' }}>
          <section className="grid">
            {coins.map((coin, index) => (
              <div key={index} className="card one-card">
                <div className="update-card">
                  {/* TODO */}
                  {/* DELETE IMPEMENTATION */}
                  {/* <Link
                    to="/admin-coins"
                    className="delete-card"
                    onClick={handleDelete(coin._id)}
                  >
                    <p>X</p>
                  </Link> */}
                  <Link to={`/admin-coins-edit/${coin._id}`}>
                    <h3>{coin.name}</h3>
                    <img src={coin.icon} alt={coin.abbr} />
                    <input type="text" placeholder={coin.address} />
                  </Link>
                </div>
              </div>
            ))}
            {/* // TODO */}
            {/* CREATE IMPEMENTATION */}
            {/* <span>
              <Link to={`/admin-coins-create`}>
                <i className="fa fa-plus" />
                <i className="fa fa-check" />
              </Link>
            </span> */}
          </section>
        </form>

        <Footer />
      </main>
    </>
  );
};

export default CoinsAdmin;
