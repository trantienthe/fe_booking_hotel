import MainLayout from './layouts/MainLayout';
import LoginRegisterLayout from './layouts/LoginRegisterLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import RoomDetail from './pages/RoomDetail';

export const mainRouters = [
  {
    path: '/',
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/chi-tiet-phong',
    component: RoomDetail,
    layout: MainLayout,
  },
  {
    path: '/register',
    component: Register,
    layout: LoginRegisterLayout,
  },
  {
    path: '/login',
    component: Login,
    layout: LoginRegisterLayout,
  },
];
