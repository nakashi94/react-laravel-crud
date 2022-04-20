import { memo, VFC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../organisms/layout';

export const HeaderAndFooter: VFC = memo(() => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
));
