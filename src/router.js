import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

export const mainRouters = [
  {
    path: '/',
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/introduce',
    component: '',
    layout: '',
  },
  {
    path: '/Contact',
    component: '',
    layout: '',
  },
];
