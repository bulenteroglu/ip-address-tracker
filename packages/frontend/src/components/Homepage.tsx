import React from "react";
import Image from "../../assets/pattern-bg.png";
import Detail from "./Detail";
import MapPage from "./MapPage";

export default function Homepage() {
  return (
    <div className='flex flex-col items-center  h-screen'>
      <div className='flex flex-col items-center justify-center'>
        <div>
          <img
            className='w-full shadow-xl object-contain'
            src={Image}
            alt='background-image'
          />
          <div className='absolute top-0 flex flex-col items-center justify-center w-full mt-6 space-y-8'>
            <div className='text-3xl text-white'>IP Address Tracker</div>
            <div className='flex w-full justify-center items-center'>
              <input
                style={{ width: "30rem" }}
                className='rounded-l-lg pl-8 py-2 focus:outline-none'
                type='text'
                placeholder='Search for any IP address or domain'
              />
              <i className='bg-black py-2 rounded-r-lg w-12 text-white flex items-center justify-center'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </i>
            </div>
          </div>
        </div>
        <div className='absolute top-0 flex items-center justify-center'>
          <Detail />
        </div>
      </div>
      <MapPage />
    </div>
  );
}
