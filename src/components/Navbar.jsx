import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-[#009FBD] via-blue-100 to-gray-500  flex justify-between justify-items-center content-center p-2'>
        <span className='text-red-100 text-4xl cursor-pointer'>Labour<span className='text-gray-900'>Mate</span></span>

        <div className='flex justify-between justify-items-center items-center cursor-pointer text-xl'>
            <div className='mx-8'>Home</div>
            <div className='mx-8'>about</div>
            <div className='mx-8'>Contact Us</div>
        </div>

        <div className='flex items-center mr-6 bg-gray-200 rounded-2xl'>
            <button className='px-4'>Login/Signup</button>
        </div>
    </div>
  )
}

export default Navbar