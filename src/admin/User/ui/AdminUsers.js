import React, { useEffect, useContext, useState } from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';
import { CoinContext } from '../../../CoinProvider';

import NavBar from '../../../admin/components/NavBar';
import SideBar from '../../../admin/components/SideBar';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
// import Modal from '../../../components/modal';
import AdminUserView from './AdminUserView';

import '../../static/css/transaction.css';
import '../../../static/css/transaction.css';

const Users = () => {
  const [modalUser, setModalUser] = useState({});
  const { users, allUsers } = useContext(CoinContext);

  // GET ALL USERS LIST
  useEffect(() => {
    allUsers();
    // eslint-disable-next-line
  }, []);

  // FIX pass userId to modal popUp component
  // onClick of user, get userId
  const singleUserId = (id) => async () => {};

  // MODAL FUNC
  const modalPop = (id) => async () => {
    const userId = id;

    // history.push(`${history.location.pathname}/${userId}`);

    // Get the modal
    var modal = document.getElementById('myModal');
    // var modal = document.getElementById('myModal').classList.add(`id${uId}`);

    // ADD id to modal class
    // document.querySelector('[data="id"]').classList.add(`${userId}`);

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
      title: 'Fetch User Data',
      icon: 'warning',
      buttons: true,
      background: '#121007',
      width: '50em'
    }).then((willGet) => {
      if (willGet) {
        axios({
          method: 'get',
          url: `https://bitsquadtraders-api.herokuapp.com/api/v1/users/${userId}`,
          headers: headers.headers
        })
          .then((response) => {
            setModalUser(response?.data);

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
        <Title title="Users" />
        {/* CONTENT HERE */}
        <section className="table-sec">
          <h3>User List</h3>
          <table className="table2 table">
            <tbody>
              <tr className="start">
                <th>Date</th>
                <th>Username</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Address</th>
                <th />
              </tr>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="row mouse-not-allowed"
                  onClick={singleUserId(user._id)}
                >
                  <td>{date(user.createdAt)}</td>
                  <td>{user.name}</td>
                  <td>{user.phonenumber}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  {/* <td className="status">
                    <span className="danger">Completed</span>
                  </td> */}
                  <td>
                    <i
                      onClick={modalPop(user._id)}
                      className="fa fa-th mouse-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="seemore mouse-wait">
            <Link to="#">See More</Link>
          </div>
          {/* MODAL */}
          {/* REVIEW PASS USER RESPONSE TO MODAL */}
          {/* <Modal modalUser={modalUser} /> */}
          <AdminUserView modalUser={modalUser} />
        </section>
        <Footer />
      </main>
    </>
  );
};

// FIX EXPORT singleUserId
export default Users;
