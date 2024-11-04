import React, { useState } from 'react';

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email, password)
    // console.log(`The Email is ${email} and Password is ${password}`)
    setEmail("")
    setPassword("")
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center '>
      <div className='flex flex-col items-center justify-between border-2 border-green-500 px-14 py-40 rounded-xl relative'>
        <h1 className='text-4xl absolute top-8 left-50'>Login Here</h1>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='gap-5 flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            required className='bg-[#222] border-2 border-green-500  px-16 py-4 rounded-lg text-2xl outline-none  text-white' type="email" placeholder='Enter your Email' />
          <input 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required className='bg-[#222] border-2 border-green-500 px-16 py-4 rounded-lg text-2xl outline-none  text-white' type="password" placeholder='Enter password' />
            <button className='bg-green-500 px-[11vw] py-3 text-2xl rounded-lg'>Log in</button>
        </form>
          </div>
    </div>
  );
};

export default Login;