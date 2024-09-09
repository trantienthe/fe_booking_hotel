import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const MainLayout = ({ children }) => {
  return (
    <div className="relative ">
      <Header />
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
