import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CoinsBloc from '../bloc/CoinsBloc';

import { CoinContext } from '../../../CoinProvider';

import UploadFile from '../../static/images/Group.svg';

import NavBar from '../../../admin/components/NavBar';
import SideBar from '../../../admin/components/SideBar';
import Title from '../../../admin/components/Title';
import Footer from '../../components/Footer';

import '../../static/css/cred.css';

const AdminCoinsEdit = () => {
  const history = useHistory();
  const coinId = history.location.pathname.split('/')[2];

  const { fetchOneCoin } = useContext(CoinContext);

  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [abbr, setAbbr] = useState('');
  const [address, setAddress] = useState('');

  // GET SINGLE COIN
  // TODO FIX RELOAD CASES GET THE SINGLE COIN VALUES oneCoin[0].icon
  useEffect(() => {
    fetchOneCoin(coinId); // eslint-disable-next-line
  }, []);

  const onCoinsForm = async (e) => {
    e.preventDefault();
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append('image', icon);

    // CREATE IMG
    const isCoins = await CoinsBloc.createImg(formData);

    // UPDATE TEXT
    if (isCoins.success) {
      const icon = isCoins.data.image;

      await CoinsBloc.updateText({
        coinId,
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
        <Title title="Edit Coin" />
        <section className="section-two">
          <div className="row">
            <form onSubmit={onCoinsForm} style={{ margin: 'auto' }}>
              <div className="img-upload">
                <p>Coin Image</p>
                <div className="file-u">
                  <input
                    type="file"
                    id="photo"
                    onChange={(e) => setIcon(e.target?.files[0])}
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
                  <label htmlFor="phonenumber">Coin Abbr Text</label>
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
                  Edit Coin
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

export default AdminCoinsEdit;
