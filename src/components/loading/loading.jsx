import React from 'react';
import { RingLoader } from 'react-spinners';
import './loading.css';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <RingLoader color="#36d7b7" size={60} />
    </div>
  );
};

export default Loading;
