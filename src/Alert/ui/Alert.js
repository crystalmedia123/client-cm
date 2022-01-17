import React from 'react';
import { useHistory } from 'react-router-dom';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';
import Footer from '../../admin/components/Footer';

const Alert = () => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push('/dashboard');
  };
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title />
        <section className="section-two done-section">
          <div className="done-p">
            You will receive detail on your information shortly please be
            patient.
          </div>
          <button type="button" onClick={handleSubmit}>
            Dashboard
          </button>
        </section>
        <Footer />
      </main>
      ;
    </>
  );
};

export default Alert;
