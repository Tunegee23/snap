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
    <div className="flex items-center justify-center h-screen bg-[#4cb2da79]">
      <div className="bg-white p-6 rounded-lg h-[400px] shadow-md w-[500px]">
      <div>
        <Link to="/">
          <img src={logo}  className='' alt=''></img>
        </Link>
      </div>

        <h1 className='text-[#919191] text-[20px] mt-[2rem] text-center'>Welcome Back! login into your account</h1>

        <form className='mt-[2rem]' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[gray] text-[16px] font-[400] mb-[10px]"> Email address</label>
            <input type="email" id="email" className="border border-gray-300 rounded-md p-2 w-full" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="mb-[1rem]">
            <label htmlFor="password" className="block text-[gray] text-[16px] font-[400px] mb-2"> Password</label>
            <input type="password" id="password" className="border border-gray-300 rounded-md p-2 w-full" 
            value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="bg-[black] hover:bg-[gray] text-white font-bold py-2 px-4 rounded" >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;