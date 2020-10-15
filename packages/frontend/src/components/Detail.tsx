import React from "react";

export default function Detail() {
  return (
    <div className='bg-white text-black rounded-lg shadow-lg relative bottom-0 h-32 flex -mt-12 px-10 space-x-16 z-20'>
      <div className='flex flex-col space-y-2 text-left w-1/4  py-6 pr-5 '>
        <div className='uppercase text-xs text-gray-600'>IP Address</div>
        <div className='text-xl font-bold'>192.212.174.101</div>
      </div>
      <div className='flex flex-col space-y-2 text-left w-1/4 h-full py-6'>
        <div className='uppercase text-xs text-gray-600'>Location</div>
        <div className='text-xl font-bold'>Brooklyn, NY 10001</div>
      </div>
      <div className='flex flex-col space-y-2 text-left w-1/4 h-full py-6'>
        <div className='uppercase text-xs text-gray-600'>Timezone</div>
        <div className='text-xl font-bold'>UTC -05:00</div>
      </div>
      <div className='flex flex-col space-y-2 text-left w-1/4 h-full py-6'>
        <div className='uppercase text-xs text-gray-600'>ISP</div>
        <div className='text-xl font-bold'>SpaceX Starlink</div>
      </div>
    </div>
  );
}
