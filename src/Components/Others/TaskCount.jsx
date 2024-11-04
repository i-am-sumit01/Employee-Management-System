import React from 'react';

const TaskCount = ({data}) => {
  return (
    <div>
      {
        data? (
          <div className='w-full flex justify-between mt-14'>
            <div className='bg-blue-500 py-6 px-10 w-[24%] rounded-xl'>
              <h1 className='text-[3vw] font-semibold'>{data.taskCounts.new}</h1>
              <h1 className='text-[1.4vw] font-medium'>New Task</h1>
            </div>
            <div className='bg-yellow-500 py-6 px-10 w-[24%] rounded-xl'>
              <h1 className='text-[3vw] font-semibold'>{data.taskCounts.active}</h1>
              <h1 className='text-[1.4vw] font-medium'>Active Task</h1>
            </div>
            <div className='bg-green-500 py-6 px-10 w-[24%] rounded-xl'>
              <h1 className='text-[3vw] font-semibold'>{data.taskCounts.completed}</h1>
              <h1 className='text-[1.4vw] font-medium'>Completed Task</h1>
            </div>
            <div className='bg-red-500 py-6 px-10 w-[24%] rounded-xl'>
              <h1 className='text-[3vw] font-semibold'>{data.taskCounts.failed}</h1>
              <h1 className='text-[1.4vw] font-medium'>Failed Task</h1>
            </div>
          </div>
        ) : (
            null
                )}
    </div>
  );
};

export default TaskCount;