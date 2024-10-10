import React from 'react';
import { CiLocationOn, CiStar } from 'react-icons/ci';
import { IoBedOutline } from 'react-icons/io5';

const rooms = [
  {
    id: 1,
    image: '/images/room1.jpg',
    rating: '4.9 (11)',
    location: 'Hải Châu, Đà Nẵng',
    title: 'Phòng Vip 0001 Galaxay 2 Giường cực đẹp siêu siêu đẹp',
    bedType: 'Giường đôi',
  },
  {
    id: 2,
    image: '/images/room1.jpg',
    rating: '4.8 (9)',
    location: 'Sơn Trà, Đà Nẵng',
    title: 'Phòng Deluxe view biển sang trọng tuyệt vời',
    bedType: 'Giường đơn',
  },
  {
    id: 3,
    image: '/images/room1.jpg',
    rating: '4.7 (15)',
    location: 'Hội An, Quảng Nam',
    title: 'Phòng Suite lãng mạn tại Hội An',
    bedType: 'Giường đôi',
  },
  {
    id: 4,
    image: '/images/room1.jpg',
    rating: '5.0 (20)',
    location: 'Mỹ Khê, Đà Nẵng',
    title: 'Phòng Studio phong cách hiện đại',
    bedType: 'Giường đơn',
  },
];

const RoomList = () => {
  return (
    <div className="px-6 md:px-20 mt-20">
      <h2 className="text-xl md:text-3xl font-archivo font-bold">Phòng liên quan</h2>
      <img src="/images/heading-border.webp" alt="" className="mt-5" />
      <div className="mt-5">
        <div className="md:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="border-2 rounded-2xl flex flex-col p-5 bg-white shadow-md">
                <img src={room.image} alt={`Room ${room.id}`} className="w-full h-auto max-w-full rounded-2xl" />
                <div className="flex items-center bg-yellow-500 w-max p-2 rounded-xl mt-[-40px] mb-2">
                  <CiStar className="text-white" />
                  <h2 className="text-sm md:text-base ml-2 text-white">{room.rating} đánh giá</h2>
                </div>
                <div className="flex items-center bg-pink-200 w-max p-2 rounded-xl">
                  <CiLocationOn className="text-black" />
                  <h2 className="text-sm md:text-base ml-2">{room.location}</h2>
                </div>
                <div className="mt-4 text-lg font-archivo font-semibold text-gray-700 h-[120px]">{room.title}</div>
                <div className="flex items-center mt-2">
                  <IoBedOutline className="text-gray-700" />
                  <h2 className="text-sm md:text-base ml-2">{room.bedType}</h2>
                </div>
                <div className="flex justify-center mt-4">
                  <button className="h-10 w-full md:w-36 bg-gray-300 rounded-full hover:bg-red-500 font-archivo font-bold text-gray-700 hover:text-white transition-colors">Xem chi tiết</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomList;
