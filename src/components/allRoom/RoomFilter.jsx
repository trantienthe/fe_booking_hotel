import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';

const RoomFilter = ({ room }) => {
  return (
    <div className="rounded-[30px] border-2 px-3 py-5 shadow mb-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3">
          <img src={`http://127.0.0.1:8000${room?.thumbnail}`} alt={room?.room_type} className="w-full h-[200px] object-cover rounded-lg" />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold mb-3">{room?.room_type || 'Room Type'}</h2>
          <div className="text-sm text-gray-600 mb-2">
            {room?.hotel?.address} {''}
            {room?.area?.name}
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {room?.utilities?.length > 0 ? (
              room.utilities.map((utility, index) => (
                <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                  {utility.name}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">No utilities listed</span>
            )}
          </div>
          {/* <p className="text-sm text-gray-500 mb-3">{room?.description || 'No description available'}</p> */}
          <div className="flex flex-wrap gap-2 mb-3">
            {room?.amenities?.length > 0 ? (
              room.amenities.map((amenity, index) => (
                <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                  {amenity}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">No amenities listed</span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(room?.price_per_night || 0)} / Phòng</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700" title="Book this room now">
              Đặt ngay
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomFilter;
