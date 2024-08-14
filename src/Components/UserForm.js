import React, { useState } from 'react';
import Input from './Input';
import { useLocation, useNavigate } from 'react-router-dom';

const UserForm = ({ isSignInPage = false }) => {
  const [data, setData] = useState({
    id:Date.now(),
    ...(!isSignInPage && { name: '' }),
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const location = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let users = JSON.parse(localStorage.getItem('usersData')) || [];

    if (isSignInPage) {
      const user = users.find(user => user.email === data.email && user.password === data.password);
      if (user) {
        location.pathname('/');
      } else {
        alert('Invalid email or password');
      }
    } else {
      const existingUser = users.find(user => user.email === data.email);
      if (existingUser) {
        alert('Email is already in use');
      } else {
        users.push(data);
        localStorage.setItem('usersData', JSON.stringify(users));
        navigate('/users/sign_in');
      }
    }

    setData({
      ...(!isSignInPage && { name: '' }),
      email: '',
      password: ''
    });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-dark">
      <div className=" w-[400px] shadow-lg rounded-md bg-dark p-5 flex flex-col">
        <div className="d-flex align-items-center  text-white text-decoration-none justify-center ml-4">
          <img src='/shop.png' alt="" width="100" height="100" className="rounded-circle me-2"/>
        </div>
        <h2 className="text-center font-medium text-3xl mb-2 text-white">
          {isSignInPage ? 'SignIn' : 'SignUp'}
        </h2>
        
        <form className=" w-full flex flex-1 flex-col m-auto" onSubmit={handleSubmit}>
          {!isSignInPage && (
            <Input
              placeholder="Name"
              value={data.name}
              isRequired
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={data.email}
            isRequired
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            value={data.password}
            isRequired
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button
            className="text-white text-decoration-none flex justify-center p-2 rounded-md w-full self-center bg-cyan-800 text-white hover:bg-cyan-900 mt-12"
            type="submit"
          >
            <span>{isSignInPage ? 'Sign In' : 'Sign Up'}</span>
          </button>
        </form>
        <p className="text-sm text-center text-white mt-2">
          {isSignInPage ? 'New Create account?' : 'Already have an account?'}
          <span
            onClick={() => navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'}`)}
            className= "text-rgb(178 183 191) underline hover:text-blue-300 pl-2 cursor-pointer"
          >
            {isSignInPage ? 'SignUp' : 'SignIn'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserForm;
