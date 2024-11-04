import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AllTasks = () => {
  const allData = useContext(AuthContext)
  console.log(allData.employees)
  return (
    <div id='alltasks' className='flex flex-col gap-2'>
      <div className='w-full h-16 bg-red-400 rounded-xl flex-shrink-0 flex items-center justify-between px-6'>
        <h2 className='text-xl w-1/5 font-medium'>Employee</h2>
        <h2 className='text-xl w-1/5 font-medium'>New Tasks</h2>
        <h2 className='text-xl w-1/5 font-medium'>Active</h2>
        <h2 className='text-xl w-1/5 font-medium'>Complete</h2>
        <h2 className='text-xl w-1/5 font-medium'>Failed</h2>
      </div>
      <div className='flex flex-col gap-2 h-full'>
        {allData.employees.map((elem) => {
          return <div className='w-full h-16 border-green-400 border-2 rounded-xl flex-shrink-0 flex items-center justify-between px-6'>
            <h2 className='text-xl w-1/5 text-white font-medium'>{elem.firstName}</h2>
            <h2 className='text-xl w-1/5 text-blue-500 font-medium'>{elem.taskCounts.new}</h2>
            <h2 className='text-xl w-1/5 text-yellow-400 font-medium'>{elem.taskCounts.active}</h2>
            <h2 className='text-xl w-1/5 text-green-400 font-medium '>{elem.taskCounts.completed}</h2>
            <h2 className='text-xl w-1/5 text-red-400 font-medium'>{elem.taskCounts.failed}</h2>
          </div>
        })}
      </div>
    </div>
  );
};

export default AllTasks;