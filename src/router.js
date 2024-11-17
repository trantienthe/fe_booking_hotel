import LoginRegisterLayout from './layouts/LoginRegisterLayout';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import AboutBranch from './pages/AboutBranch';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import HistoryDetails from './pages/HistoryDetails';
import HistoryOrder from './pages/HistoryOrder';
import Home from './pages/Home';
import Instruct from './pages/Instruct';
import Login from './pages/Login';
import Register from './pages/Register';
import RoomDetail from './pages/RoomDetail';
import SearcRoom from './pages/SearcRoom';
import Voucher from './pages/Voucher';

export const mainRouters = [
  {
    path: '/lịch-sử-chi-tiết/:orderId',
    component: HistoryDetails,
    layout: MainLayout,
  },
  {
    path: '/lịch-sử-đặt-phòng',
    component: HistoryOrder,
    layout: MainLayout,
  },
  {
    path: '/mã-khuyến-mãi',
    component: Voucher,
    layout: MainLayout,
  },
  {
    path: '/hướng-dẫn-đặt-phòng',
    component: Instruct,
    layout: MainLayout,
  },
  {
    path: '/thanh-toán',
    component: Checkout,
    layout: MainLayout,
  },
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
    path: '/gioi-thieu-chi-nhanh/:hotelId',
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
    component: SearcRoom,
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
