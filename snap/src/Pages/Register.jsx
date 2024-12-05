import React, { useState } from 'react';
import logo from "../assets/logo.svg"
import { Link, Navigate } from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (
    <div className="flex items-center justify-center lg:h-screen bg-[#4cb2da79]">
    <div className="bg-white p-4 rounded-lg shadow-md w-[800px]">
      <div>
        <Link to="/">
          <img src={logo}  className='mt-[1rem]' alt=''></img>
        </Link>
      </div>

      <h1 className='text-[#919191] text-[20px] mt-[2rem] text-center'>Welcome! Kindly provide us your details</h1>

      <form className='mt-[2rem]' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-[gray] text-[16px] font-[400] mb-[10px]"> Fullname</label>
          <div className='lg:w-[700px] sm:w-[600px] md:w-[700px] w-[350px]'>
            <input type="text" id="fullname" className="border border-gray-300 rounded-md p-2 w-full" value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          </div>
        </div>

        <div className="mb-[1rem]">
          <label htmlFor="password" className="block text-[gray] text-[16px] font-[400px] mb-2"> Password</label>
          <div className='lg:w-[700px] sm:w-[600px] md:w-[700px] w-[350px]'>
            <input type="text" id="password" className="border border-gray-300 rounded-md p-2 w-full" 
            value={password} onChange={(e) => setPassword(e.target.value)}/>

          </div>
        </div>

        <div className=''>
          <label htmlFor='dob' className='block text-[gray] text-[16px] font-[400] mb-2'>Date Of Birth</label>
          <div className='lg:w-[700px] sm:w-[600px] md:w-[700px] w-[350px]'>
            <input type="date" id="dob" className="border border-gray-300 rounded-md p-2 w-full"></input>
          </div>
        </div>

        <div className="mt-[1rem]">
          <label htmlFor="email" className="block text-[gray] text-[16px] font-[400] mb-[10px]"> Email address</label>
          <div className='lg:w-[700px] sm:w-[600px] md:w-[700px] w-[350px]'>
            <input type="email" id="email" className="border border-gray-300 rounded-md p-2 w-full" rules={[
              { required: true, message: "Email is required" },
              {
                type: "email",
                message: "Invalid email address",
              },
            ]} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        <div className='mt-[1rem]'>
          <label htmlFor='phonenumber' className='block text-[gray] text-[16px] font-[400] mb-2'>Phone_Number</label>
          <div className='lg:w-[700px] sm:w-[600px] md:w-[700px] w-[350px]'>
            <input type="phonenumber" id="phonenumber" placeholder='+234' className="border border-gray-300 rounded-md p-2 w-full" rules={[
              { required: true, message: "Phone number is required" },
              {
                pattern:
                  /^\+?[1-9]\d{1,14}$|^(\+?[0-9]{1,3})?[-.\s]?\(?[0-9]{1,4}?\)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/,
                message: "Invalid phone number",
              },
            ]}></input>
          </div>
        </div>

        <div className='mt-[1rem]'>
          <label htmlFor='location' className='block text-[gray] text-[16px] font-[400] mb-2'>Location</label>
          <div className='lg:w-[700px] sm:w-[600px] md:w-[700px] w-[350px]'>
            <input type="text" id="location" className="border border-gray-300 rounded-md p-2 w-full"></input>
          </div>
        </div>

        <div className='mt-[1rem]'>
          <button type="submit" className="bg-[black] hover:bg-[#959595] text-white font-bold py-2 px-4 rounded" >Register</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register