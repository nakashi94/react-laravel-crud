import { memo, VFC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Setting, SignIn, SignUp, Tasks, Page404 } from '../pages';
import { HeaderAndFooter, HeaderAndProfileBarAndFooter } from '../components/templates';

export const Router: VFC = memo(() => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="register" element={<SignUp />} />
    <Route
      path="tasks/*"
      element={
        <Routes>
          <Route path="/" element={<HeaderAndProfileBarAndFooter />}>
            <Route index element={<Tasks />} />
          </Route>
          <Route path="setting" element={<HeaderAndFooter />}>
            <Route index element={<Setting />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      }
    />
    <Route path="*" element={<Page404 />} />
  </Routes>
));
