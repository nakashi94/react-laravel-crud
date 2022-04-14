import { memo, VFC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';
import { ProfileBar } from '../organisms/ProfileBar';

export const HeaderAndProfileBarAndFooter: VFC = memo(() => (
  <>
    <Header />
    <ProfileBar />
    <Outlet />
    <Footer />
  </>
));
