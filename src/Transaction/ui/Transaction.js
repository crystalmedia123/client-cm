import React from 'react';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';
import Footer from '../../admin/components/Footer';
import TransactionTable from './TransactionTable';

const Transaction = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="List of transactions" />
        <TransactionTable />
        <Footer />
      </main>
    </>
  );
};

export default Transaction;
