
import { useContext } from 'react';
import { useState } from 'react'
import {query, where, getDocs} from 'firebase/firestore'
import { TailSpin } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { Appstate } from "../App";
import swal from "sweetalert";
import { usersRef } from '../firebase/firebase';
// import bg from '../assets/polotno.png'


const Login = () => {

  const navigate = useNavigate();
  const useAppstate = useContext(Appstate);
  const [form, setForm] = useState({
    mobile: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      const quer = query(usersRef, where('mobile', '==', form.mobile))
      const querySnapshot = await getDocs(quer);

      querySnapshot.forEach((doc) => {
        const _data = doc.data();
        const isUser = form.password === _data.password;
        if(isUser) {
          useAppstate.setLogin(true);
          useAppstate.setUserName(_data.name);
          swal({
            title: "Logged In",
            icon: "success",
            buttons: false,
            timer: 3000
          })
          navigate('/')
        } else {
          swal({
            title: "Invalid Credentials",
            icon: "error",
            buttons: false,
            timer: 3000
          })
        }
      })
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000
      })
    }
    setLoading(false);
  }


  return (
    <div className="w-full text-black h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#B7B7B7] via-[#B9E9FC] to-[#F6F1F1] ">
    <h1 className="text-2xl font-bold">Login</h1>
    <div class="m-2 w-full md:w-1/3">
      <div class="relative">
        <label for="message" class="leading-7 text-sm text-bold">
          Mobile No.
        </label>
        <input
          type={"number"}
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
    <div class="p-2 w-full md:w-1/3">
      <div class="relative">
        <label for="message" class="leading-7 text-sm text">
          Password
        </label>
        <input
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
    <div class="p-2 w-full">
      <button
      onClick={login}
        class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
      >
        {loading ? <TailSpin height={25} color="white" /> : "Login"}
      </button>
    </div>
    <div>
      <p>Do not have account? <Link to={'/signup'}><span className="text-blue-500">Sign Up</span></Link></p>
    </div>
  </div>
  )
}

export default Login