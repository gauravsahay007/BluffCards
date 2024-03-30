import React, { useEffect,useState } from 'react';
import { useFormik } from 'formik';
import { registerUser } from '../Api/auth.jsx';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../Context/user.jsx';

import { updateUser } from '../features/userSlice.jsx';

import { getAuth } from 'firebase/auth';
import { useDispatch} from 'react-redux';

export default function SignupForm() {

  const [uid,setUid] = useState("");

  const dispatch = useDispatch();

  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      pic: null,
      cards:[],
      uid:""
    },
    onSubmit: async(values) => {
      try{
        registerUser(values).then((res)=>{
          if(res) {
            dispatch(updateUser(res));
          }
        }
        );
        navigate('/dashboard');
      }
      catch{
        console.error("Error");
      }
    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-reqLblue">
      <p className="text-white text-2xl font-semibold mb-4 ">Sign Up</p>
      <form onSubmit={formik.handleSubmit} className="w-40 sm:w-1/2 bg-reqDblue p-8 rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange} 
            value={formik.values.name}
            className="w-full bg-white rounded-md p-2"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-white">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange} 
            value={formik.values.email}
            className="w-full bg-white rounded-md p-2"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-white">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange} 
            value={formik.values.password}
            className="w-full bg-white rounded-md p-2"
          />
        </div> 
        
        <button type="submit" className="bg-reqLblue text-white px-4 py-2 rounded-md font-semibold">Submit</button>
      </form>
    </div>
  );
}
