import { memo, VFC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../organisms/layout/Footer';
import { Header } from '../organisms/layout/Header';
import { ProfileBar } from '../organisms/layout/ProfileBar';

export const HeaderAndProfileBarAndFooter: VFC = memo(() => (
  <>
    <Header />
    <ProfileBar />
    <Outlet />
    <Footer />
  </>
));
