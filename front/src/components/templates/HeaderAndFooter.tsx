import { memo, VFC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';

export const HeaderAndFooter: VFC = memo(() => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
));
