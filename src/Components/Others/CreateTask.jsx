import React from 'react';

const CreateTask = () => {
  return (
      <div className='flex w-full h-[75vh] items-start justify-between py-14'>
          <form className='w-[100%] h-[100%] bg-[#222] flex'>
              <div className='flex w-1/2 flex-col h-[100%] p-6'>
                  <label htmlFor="title" className='text-lg my-1'>Task Title</label>
                  <input className='text-white text-xl mb-2 px-4 py-2 rounded-lg border-2 border-green-400 bg-[#222]' type="text" id='title' name='title' placeholder='Make a UI/UX design' />
                  <label htmlFor="Date" className='text-lg my-1'>Date</label>
                  <input className='text-white text-xl mb-2 px-4 py-2 rounded-lg border-2 border-green-400 bg-[#222]' type="date" id='Date' name='Date' />
                  <label htmlFor="Assign" className='text-lg my-1'>Assign to</label>
                  <input className='text-white text-xl mb-2 px-4 py-2 rounded-lg border-2 border-green-400 bg-[#222]' type="text" id='Assign' name='Assign' placeholder='Joe Smith' />
                  <label htmlFor="cetegory" className='text-lg my-1'>Cetegory</label>
                  <input className='text-white text-xl mb-2 px-4 py-2 rounded-lg border-2 border-green-400 bg-[#222]' type="text" id='cetegory' name='cetegory' placeholder='Dev, Design, SEO etc.' />
              </div>
              <div className='w-1/2 flex flex-col p-10'>
                  <label htmlFor="textarea" className='text-lg my-1'>Description</label>
                  <textarea className='text-white text-xl mb-2 px-4 py-2 rounded-lg border-2 border-green-400 bg-[#222] h-[60%]' name="textarea" id="textarea"></textarea>
                  <button className='mt-5 bg-green-500 py-3'>Create Task</button>
              </div>
          </form>
      </div>
  );
};

export default CreateTask;