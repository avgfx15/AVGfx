import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import { Outlet } from 'react-router';
import FooterComponent from '../components/FooterComponent';

const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default MainLayout;
