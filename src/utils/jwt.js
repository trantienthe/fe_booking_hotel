import { jwtDecode } from 'jwt-decode';

export const getUserId = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) return null;
  try {
    const decodedToken = jwtDecode(accessToken);
    return decodedToken.user_id;
  } catch (error) {
    console.error('Lỗi khi giải mã token:', error);
    return null;
  }
};
