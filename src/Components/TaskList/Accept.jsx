import React from 'react';

const AcceptTask = ({data}) => {
    console.log(data)
    return (
        <div>
            <div className='w-[19vw] flex-shrink-0 bg-[#B3C8CF] h-[19vw] rounded-xl p-6'>
                <div className='flex items-center w-[100%] justify-between'>
                    <h2 className='text-xl bg-red-500 px-4 py-1 rounded-xl'>{data.cetegory}</h2>
                    <h2 className='text-sm rounded-xl text-black font-semibold'>{data.TaskDate}</h2>
                </div>
                <h1 className='mt-6 text-blue-700 font-semibold text-xl'>{data.Title}</h1>
                <p className='text-sm text-black my-3'>
                    {data.Description}
                </p>
                <div className='w-[100%] flex flex-col justify-around items-center px-4 gap-y-2'>
                    <button className='w-[100%] bg-green-500 px-4 py-1 rounded-lg'>Mark as Completed</button>
                    <button className='w-[100%] bg-red-500 px-4 py-1 rounded-lg'>Mark as Failed</button>
                </div>
            </div>
        </div>
    );
};

export default AcceptTask;