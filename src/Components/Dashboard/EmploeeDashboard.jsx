import React from 'react';
import Header from '../Others/Header';
import TaskCount from '../Others/TaskCount';
import TaskList from '../TaskList/TaskList';

const EmploeeDashboard = ({data}) => {
  return (
      <div className='h-screen bg-[#1c1c1c] p-14'>
      <Header data={data} />
      <TaskCount data={data} />
      <TaskList data={data} />
      </div>
  );
};

export default EmploeeDashboard;