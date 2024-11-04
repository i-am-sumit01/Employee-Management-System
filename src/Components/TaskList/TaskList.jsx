import React from 'react';
import AcceptTask from './Accept';
import CompletedTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './New';

const TaskList = ({data}) => {
    return (
        
        <div id="tasklist" className='overflow-x-auto flex-nowrap gap-5 w-full h-[55%] mt-10 flex items-center'>
          {
            data? data.Tasks.map((elem)=>{
                    if (elem.Active){
                       return <AcceptTask data={elem} />
                    }
                    if(elem.NewTask){
                      return <NewTask data={elem} />
                    }
                    if (elem.Failed){
                      return <FailedTask data={elem} />
                    }
                    if (elem.Completed){
                      return <CompletedTask data={elem} />
                    }

            }) : null
          }
      </div>
      
    );
};

export default TaskList;