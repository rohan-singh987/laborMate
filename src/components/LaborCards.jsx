import React from 'react'
import { useState } from 'react'
import ReactStars from 'react-stars';

const LaborCards = () => {

  const [detail, setDetail] = useState([
    {
      img: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: "Ramesh",
      post: 'Worker',
      charges: '400',
      exp: '4',
      rating: '4',
    },
    {
      img: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: "Ramesh",
      post: 'Worker',
      charges: '400',
      exp: '4',
      rating: '4',
    },
    {
      img: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: "Ramesh",
      post: 'Worker',
      charges: '400',
      exp: '4',
      rating: '4',
    },
  ]);

  return (

    <div className='flex flex-wrap justify-between p-3 mt-2'>
      {detail.map((element, index) => {
        return (
          <div key={index} className='m-5 bg-gradient-to-r from-[#8785A2] via-[#DBE2EF] to-[#AEE1E1] truncate shadow-lg text-white cursor-pointer text-lg font-medium hover:scale-110 transition delay-5 duration-500 ease-in-out' >
            <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="worker" className='m-0 w-72 m-1' />

            <div className='flex flex-col justify-center content-center items-center text-black'>
              <h1>Name: <span className='text-[#3282B8]  no-underline hover:underline font-bold'>{element.name}</span> </h1>
              <h1>Post: <span className='text-[#3282B8]  no-underline hover:underline font-bold'>{element.post}</span></h1>
              <h1>Visiting Charges : <span className='text-[#3282B8]  no-underline hover:underline font-bold'>{element.charges}</span></h1>
              <h1>Experience: <span className='text-[#3282B8]  no-underline hover:underline font-bold'>{element.exp}</span> </h1>
              <h1 className='flex bg-[#769FCD] px-2 my-3 items-center'>Rating: 
                <ReactStars 
                  size={20}
                  half={true}
                  value={element.rating}
                  edit={false}
                  className="ml-2 "
                /></h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LaborCards