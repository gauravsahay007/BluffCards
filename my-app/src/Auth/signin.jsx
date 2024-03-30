
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { signin } from '../Api/auth.jsx';
import "../styles/global.css"
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../Context/user.jsx';
import { useDispatch } from 'react-redux';
import { updateUser } from '../features/userSlice.jsx';

export default function SigninForm() {
  const {state,setState}=useUserData();
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      
    },
    onSubmit: async(values) => {
        try{
          await signin(values).then((querySnapshot) =>{
            querySnapshot.forEach(element => {
              // console.log(element.data().uid);
              const {name,email,cards,pic,uid} = element.data();
              // console.log(uid);
              const values = {
                name: name,
                email: email,
                cards: cards,
                pic : pic,
                uid:uid
              }
             console.log(values);
              dispatch(updateUser(values));

              navigate("/dashboard");
              
            });
          });
        }
        catch(err){
           console.error(err);
        }
    },

  }); 


  return (
    <div className="flex flex-col justify-center items-center h-screen bg-reqLblue">
      <p className="text-white text-2xl font-semibold mb-4 ">Sign In</p>
      <form onSubmit={formik.handleSubmit} className="w-40 sm:w-1/2 bg-reqDblue p-8 rounded-lg">
        
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
