import MainLayout from './layouts/MainLayout';
import LoginRegisterLayout from './layouts/LoginRegisterLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import RoomDetail from './pages/RoomDetail';
import AllRoom from './pages/AllRoom';
import About from './pages/About';
import AboutBranch from './pages/AboutBranch';
import Cart from './pages/Cart';

export const mainRouters = [
  {
    path: '/gio-hang',
    component: Cart,
    layout: MainLayout,
  },
  {
    path: '/',
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/gioi-thieu',
    component: About,
    layout: MainLayout,
  },
  {
    path: '/gioi-thieu-chi-nhanh',
    component: AboutBranch,
    layout: MainLayout,
  },
  {
    path: '/chi-tiet-phong/:roomId',
    component: RoomDetail,
    layout: MainLayout,
  },
  {
    path: '/tim-phong-khach-san',
    component: AllRoom,
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
