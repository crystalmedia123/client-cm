import React from 'react';

import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

// import '../../static/css/navs.css';
// import '../../static/css/dashboard.css';
// import '../../static/css/transaction.css';

const Admin = () => {
  return (
    <>
      <div>
        <NavBar />
        <SideBar />
        <main>
          <Title title="Admin Dashboard" />
          {/* CONTENT HERE */}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Admin;
