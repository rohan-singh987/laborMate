import { getDocs } from 'firebase/firestore';
import React from 'react'
import { useState, useEffect } from 'react'
import { Circles } from 'react-loader-spinner';
import ReactStars from 'react-stars';
import { employeeRef } from '../firebase/firebase';

const LaborCards = () => {

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getData = async () => {
        setLoading(true);

        const _data = await getDocs(employeeRef);
        _data.forEach((doc) => {
          setDetail((prevData) => [...prevData, {...(doc.data()), id:doc.id}])
        })

        setLoading(false);
    }

    getData()
  }, [])


  return (

    <div className='flex flex-wrap justify-between p-3  bg-gradient-to-r from-[#cebff3] via-[#c4cdd9e8] to-[#ebf5b3de] '>
      { loading ? <div className='w-full flex justify-center items-center'> <Circles width={80} color="black" /> </div> :

        detail.map((element, index) => {
          return (
            <div key={index} className='m-5 bg-gradient-to-r from-[#8785A2] via-[#DBE2EF] to-[#AEE1E1] truncate shadow-lg text-white cursor-pointer text-lg font-medium hover:scale-110 transition delay-5 duration-500 ease-in-out' >
            <img src={element.img } alt="worker" className='m-0 w-72 m-1' />
            
            <div className='flex flex-col justify-center content-center items-center text-black'>
            <h1>Name:
            <span className='text-[#3282B8]  no-underline hover:underline font-bold'>{element.name}</span>
            </h1>
            
            <h1>Post:
            <span className='text-[#3282B8]  no-underline hover:underline font-bold'>{element.post}</span>
            </h1>
            
            <h1>Visiting Charges :
            <span className='text-[#3282B8]  no-underline hover:underline font-bold'>{element.charges}</span>
            </h1>
            
            <h1>Experience:
            <span className='text-[#3282B8]  no-underline hover:underline font-bold'>{element.exp}</span>
            </h1>
            
            
            <h1 className='flex bg-[#769FCD] px-2 my-3 items-center'>Rating:
            <ReactStars
            size={20}
            half={true}
            value={5}
            edit={false}
            className="ml-2 " />
            </h1>
            </div>
            </div>
            )
          })
      }
    </div>
  )
}

export default LaborCards