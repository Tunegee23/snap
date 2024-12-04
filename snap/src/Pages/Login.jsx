import React, { useState } from 'react';
import logo from "../assets/logo.svg"
import { Link, Navigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center h-screen lg:h-screen sm:h-full md:h-screen  bg-[#4cb2da79]">
      <div className="bg-white p-6 rounded-lg h-[460px] w-[350px] sm:w-[600px]  shadow-md xl:w-[1200px] xl:h-[500px] md:w-[600px] lg:w-[800px] ">
        <div className='xl:mt-[3rem]'>
          <div>
            <Link to="/">
              <img src={logo}  className='mt-[1rem]' alt=''></img>
            </Link>
          </div>
          <h1 className='text-[#919191] xl:text-[25px] xl:font-[800] text-[20px] mt-[2rem] text-center'>Welcome Back! login into your account</h1>
          <form className='mt-[2rem]' onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[gray] xl:text-[18px] xl:font-[900] text-[16px] font-[400] mb-[10px]"> Email address</label>
              <input type="email" id="email" className="border border-gray-300 rounded-md p-2 w-full" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-[1rem]">
              <label htmlFor="password" className="block text-[gray] text-[16px] xl:font-[900] font-[400px] mb-2"> Password</label>
              <input type="password" id="password" className="border border-gray-300 rounded-md p-2 w-full" 
              value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="bg-[black] mt-[1rem] hover:bg-[gray] text-white font-bold py-2 px-4 rounded" >Login
            </button>
        </form>

        </div>
     

       

        
      </div>
    </div>
  );
}

export default Login;