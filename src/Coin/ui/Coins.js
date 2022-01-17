import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CoinContext } from '../../CoinProvider';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';
import Footer from '../../admin/components/Footer';

import Loader from 'react-loader-spinner';

import '../../static/css/wallet.css';

const Coins = () => {
  const { coins, fetchCoin, loading } = useContext(CoinContext);

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Coin List" />

        {loading ? (
          <section className="grid">
            {coins.map((coin, index) => (
              <div key={index} className="card">
                <Link to={`/inorder/${coin._id}`}>
                  <img src={coin.icon} alt={coin.abbr} />
                  <h3>{coin.name}</h3>
                </Link>{' '}
              </div>
            ))}

            {/* USER LINK TO ADD COIN IMPLEMENTATION */}
            {/* <Link to="#">
              <span>
                {' '}
                <i className="fa fa-plus" />
              </span>
            </Link> */}
          </section>
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
        <Footer />
      </main>
    </>
  );
};

export default Coins;
