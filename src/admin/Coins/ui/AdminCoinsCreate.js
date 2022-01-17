import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CoinsBloc from '../bloc/CoinsBloc';

import UploadFile from '../../static/images/Group.svg';

import NavBar from '../../../admin/components/NavBar';
import SideBar from '../../../admin/components/SideBar';
import Title from '../../../components/title';
import Footer from '../../../admin/components/Footer';

import '../../static/css/cred.css';

const AdminCoinsCreate = () => {
  const history = useHistory();
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [abbr, setAbbr] = useState('');
  const [address, setAddress] = useState('');

  const onCoinsForm = async (e) => {
    e.preventDefault();
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append('image', icon);

    // CREATE IMG
    const isCoins = await CoinsBloc.createImg(formData);

    if (isCoins.success) {
      // GET IMAGE
      const icon = isCoins.data.image;

      // CREATE TEXT
      await CoinsBloc.createText({
        icon,
        name,
        abbr,
        address
      });
      history.push('/admin-coins');
    }
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Create a Coin" />
        <section className="section-two">
          <div className="row">
            <form onSubmit={onCoinsForm} style={{ margin: 'auto' }}>
              <div className="img-upload">
                <p>Upload Coin Image</p>
                <div className="file-u">
                  <input
                    type="file"
                    id="icon"
                    onChange={(e) => setIcon(e.target.files[0])}
                  />
                  <div className="img-ico">
                    <img
                      aria-describedby="images-info"
                      src={icon ?? UploadFile}
                      alt="upload"
                    />
                  </div>
                </div>
                <small
                  style={{ width: 170, textAlign: 'center' }}
                  id="images-info"
                >
                  <span style={{ color: 'red' }}>*</span> The uploaded images
                  must be 500px wide and 500px long
                </small>
              </div>
              <div className="cred-form">
                <div className="form-group">
                  <label htmlFor="name">Coin Name</label>
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="abbr">Coin Abbr Text</label>
                  <input
                    type="text"
                    id="abbr"
                    onChange={(e) => setAbbr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Coin Address</label>
                  <input
                    aria-describedby="ssndesc"
                    type="text"
                    id="address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <button className="site-btn" type="submit">
                  Create Coin
                </button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AdminCoinsCreate;
