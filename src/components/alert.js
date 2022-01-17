import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';

const Alert = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title />
        <section className="section-two done-section">
          <div className="done-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quam
            harum sint accusamus necessitatibus sequi officia reiciendis sunt,
            maxime architecto.
          </div>
          <button type="button">OK</button>
        </section>
      </main>
      ;
    </>
  );
};

export default Alert;
