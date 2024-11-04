import React from 'react';
import Header from '../Others/Header';
import CreateTask from '../Others/CreateTask';
import AllTasks from '../Others/AllTasks';

const AdminDashboard = ({data}) => {
    console.log(data)
    return (
        <div className='p-10'>
            <Header data={data} />
            <CreateTask />
            <h1 className='mb-8 text-3xl '>All Tasks</h1>
            <AllTasks />
        </div>
    );
};

export default AdminDashboard;