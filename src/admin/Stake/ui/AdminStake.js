import React, { useEffect, useState } from 'react';
import StakeBloc from '../../../Stake/bloc/StakeBloc';

import axios from 'axios';
import Swal from 'sweetalert2';

import NavBar from '../../../admin/components/NavBar';
import SideBar from '../../../admin/components/SideBar';
import Title from '../../../components/title';

import AdminStakeView from './AdminStakeView';

const Admin = () => {
  const [modalStake, setModalStake] = useState({});
  const [stake, setStake] = useState([]);
  useEffect(() => {
    const allStake = async () => {
      const isStake = await StakeBloc.getAllStake();

      setStake(isStake);
    };
    allStake();
  }, []);

  // onClick of user, get stakeId
  // MODAL FUNC
  const modalPop = (id) => async () => {
    const stakeId = id;

    // history.push(`${history.location.pathname}/${stakeId}`);

    // Get the modal
    var modal = document.getElementById('myModal');
    // var modal = document.getElementById('myModal').classList.add(`id${uId}`);

    // ADD id to modal class
    // document.querySelector('[data="id"]').classList.add(`${stakeId}`);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

    // When the user clicks on the button, open the modal
    modal.style.display = 'block';

    // REVIEW START

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
      title: 'Fetch Stake Data',
      icon: 'warning',
      buttons: true,
      background: '#121007',
      width: '50em'
    }).then((willGet) => {
      if (willGet) {
        axios({
          method: 'get',
          url: `https://bitsquadtraders-api.herokuapp.com/api/v1/otherwallets/${stakeId}`,
          headers: headers.headers
        })
          .then((response) => {
            setModalStake(response?.data);

            if (response.status === 200) {
              Swal.fire({
                icon: 'success',
                title: 'Fetch complete',
                background: '#121007',
                width: '50em'
              });
            } else {
              Swal.fire({
                title: 'Something went wrong!',
                background: '#121007',
                width: '50em'
              });
            }
          })

          .catch((e) => {
            Swal.fire({
              text: e.response.data.msg,
              icon: 'error',
              background: '#121007',
              width: '50em'
            });
          });
      }
    });
    // REVIEW END

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

  // FORMAT DATE
  const date = (data) => new Date().toISOString().slice(0, 10);
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Imported Wallets" />
        <section className="table-sec">
          <h3>Transactions</h3>
          <table className="table2 table">
            <tbody>
              <tr className="start">
                <th>Date</th>
                <th>Wallet Name</th>
              </tr>
              {/* ROW */}
              {stake.data?.map((stake, index) => (
                <tr key={index} className="row mouse-not-allowed">
                  <td>{date(stake.createdAt)}</td>
                  <td>{stake.wallet}</td>
                  <td>
                    <i
                      onClick={modalPop(stake._id)}
                      className="fa fa-th mouse-pointer"
                    />
                  </td>
                </tr>
              ))}
              {/* ROW END */}
            </tbody>
          </table>
          <AdminStakeView modalStake={modalStake} />
        </section>
      </main>
    </>
  );
};

export default Admin;
