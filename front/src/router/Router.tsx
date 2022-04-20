import { memo, VFC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignIn, SignUp, Tasks, Page404 } from '../pages';
import { HeaderAndFooter, HeaderAndProfileBarAndFooter } from '../components/templates';
import { settingRoutes } from './settingRoutes';

export const Router: VFC = memo(() => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="register" element={<SignUp />} />
    <Route
      path="setting/*"
      element={
        <Routes>
          <Route path="/" element={<HeaderAndFooter />}>
            {settingRoutes.map((route) => (
              <Route key={route.path} index={route.index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      }
    />
    <Route
      path="tasks/*"
      element={
        <Routes>
          <Route path="/" element={<HeaderAndProfileBarAndFooter />}>
            <Route index element={<Tasks />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      }
    />
    <Route path="*" element={<Page404 />} />
  </Routes>
));
