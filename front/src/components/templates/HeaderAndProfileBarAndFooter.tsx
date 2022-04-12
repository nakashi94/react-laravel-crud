import { memo, VFC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';
import { ProfileBar } from '../organisms/PropfileBar';

export const HeaderAndProfileBarAndFooter: VFC = memo(() => {
  return (
    <>
      <Header />
      <ProfileBar />
      <Outlet />
      <Footer />
    </>
  );
});
