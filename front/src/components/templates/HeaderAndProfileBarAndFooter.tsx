import { memo, VFC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header, ProfileBar } from '../organisms/layout';

export const HeaderAndProfileBarAndFooter: VFC = memo(() => (
  <>
    <Header />
    <ProfileBar />
    <Outlet />
    <Footer />
  </>
));
