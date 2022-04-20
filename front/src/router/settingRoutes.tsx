import { AccountInfoSetting, CreditCardInfoSetting, Page404, ProfileSetting, PurchaseHistory } from '../pages';
import { settingRoute } from '../types';

export const settingRoutes: Array<settingRoute> = [
  {
    index: true,
    path: '/',
    element: <Page404 />,
  },
  {
    index: false,
    path: 'account',
    element: <AccountInfoSetting />,
  },
  {
    index: false,
    path: 'billing',
    element: <CreditCardInfoSetting />,
  },
  {
    index: false,
    path: 'payments_history',
    element: <PurchaseHistory />,
  },
  {
    index: false,
    path: 'profile',
    element: <ProfileSetting />,
  },
  {
    index: false,
    path: '*',
    element: <Page404 />,
  },
];
