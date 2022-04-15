import { memo, VFC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../organisms/layout/Footer';
import { Header } from '../organisms/layout/Header';

export const HeaderAndFooter: VFC = memo(() => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
));
