import React from "react";

interface IDetails {
  ip?: string;
  location: {
    city?: string;
    timezone?: string;
  };
  isp?: string;
}

export default function Detail({ data }: { data: IDetails }) {
  console.log(data);

  return (
    <div className='bg-white text-black rounded-lg shadow-lg relative bottom-0 h-32 flex -mt-12 px-10 space-x-16 z-20'>
      <div className='flex flex-col space-y-2 text-left w-1/4  py-6 pr-5 '>
        <div className='uppercase text-xs text-gray-600'>IP Address</div>
        <div className='text-xl font-bold'>{data && data.ip}</div>
      </div>
      <div className='flex flex-col space-y-2 text-left w-1/4 h-full py-6'>
        <div className='uppercase text-xs text-gray-600'>Location</div>
        <div className='text-xl font-bold'>{data && data.location.city}</div>
      </div>
      <div className='flex flex-col space-y-2 text-left w-1/4 h-full py-6'>
        <div className='uppercase text-xs text-gray-600'>Timezone</div>
        <div className='text-xl font-bold'>
          UTC {data && data.location.timezone}
        </div>
      </div>
      <div className='flex flex-col space-y-2 text-left w-1/4 h-full py-6'>
        <div className='uppercase text-xs text-gray-600'>ISP</div>
        <div className='text-xl font-bold'>{data && data.isp}</div>
      </div>
    </div>
  );
}
