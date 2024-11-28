import React from 'react'
import logo from "../assets/logo.svg"
import image from "../assets/image.png"
import { Link } from 'react-router-dom'


function Homepage() {


  return (
    <div className='  bg-[#4cb2da79] '>

      <div className='mx-auto px-4 py-6 justify-between  flex items-center '>

        <img src={logo} alt='' ></img>

        <div className=' items-center space-x-20 justify-center '>

          <ul className='md:flex hidden text-[#000000d1]  md:space-x-20  '>
            <li>Features</li>
            <li>Company</li>
            <li>Career</li>
            <li>About</li>
          </ul>
        </div>

        <div className=' space-x-8 flex '>
          <div className=' text-center text-[#000000d1] '>
            <Link to="./login" >Login</Link>
          </div>

          <div className='w-[80px] text-[#000000d1] h-[30px] border-solid  border-[1px] border-[#000000d1] text-center  rounded-[10px] '>
          <Link to="./Register" >Register</Link>
          </div>
         
        </div>

      </div>

      <div className=' xl:flex  xl:mt-[5rem] lg:gap-[6rem] justify-evenly md:gap-[5rem] mt-[2rem] md:mt-[3rem]  px-4 py-6 '>
        <div className='lg:mt-[2rem] md:mt-[3rem]'>
          <h1 className='font-[900]  w-full lg:text-[50px] text-center text-[#000000d1]  leading-[3rem] text-[40px]'>Make remote work</h1>
          <p className=' text-[#000000d1] text-center w-full lg:text-[30px] font-[400] sm:text-[25px] text-[20px] mt-[1rem]'>Get your team in sync, no matter your location stramline processes, create team rituals, and watch productivity.</p>
          <div className='flex items-center justify-center'>
            <button className='mt-[1rem] text-[white]  border-[1px] border-[solid] rounded-[10px] bg-[black] w-[100px] h-[40px]'>Learn more</button>
          </div>
          
          
        </div>
        <div className=' flex items-center mt-[2rem] justify-center'>
          <img src={image} className='w-[350px] sm:w-[600px] ' alt=''></img>
        </div>

      </div>
        
        
    </div>
  )
}

export default Homepage