
"use client";
import React, { useState, useEffect } from 'react';

export default function Login() {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
  
    const savedUsername = sessionStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const validateForm = () => {
    let valid = true;
    setUsernameError('');
    setPasswordError('');
    if (!name) {
      setUsernameError('Enter Username');
      valid = false;
    }
    if (!password) {
      setPasswordError('Enter Password');
      valid = false;
    }
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });
      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        if (rememberMe) {
          sessionStorage.setItem('username', name);
          sessionStorage.setItem('password', password);
        } else {
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('password');
        }
        setNotification('Login successful');
        setTimeout(() => {
          setNotification('');
        }, 3000);
      } else {
        setPasswordError(data.message || 'Login failed.');
      }
    } catch (error) {
      setLoading(false);
      setPasswordError('An error occurred.');
    }
  };

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    const savedPassword = sessionStorage.getItem('password');
    if (newUsername && savedPassword) {
      setPassword(savedPassword);
    } else {
      setPassword('');
    }
  };

  return (
    <main className="relative">
      {notification && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-green-500 text-white p-2 rounded shadow-lg">
          {notification}
        </div>
      )}
      <div className="w-full lg:flex lg:h-screen">
        <div className="p-10 pb-05 lg:w-1/2 flex flex-col justify-center bg-white lg:pl-10 pt-20">
          <div className="pl-5 text-size-full">
            <img src="/skillcapital.png" alt="Skill Capital" />
          </div>
          <form className="container-sm relative top-10 border rounded max-w-4xl shadow-lg p-10" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-900 text-md mb-2" htmlFor="username">Username</label>
              <input
                className="shadow-sm appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="name"
                placeholder="Enter username"
                value={name}
                onChange={handleUsernameChange}
              />
              {usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-900 text-md mb-2" htmlFor="password">Password</label>
              <input
                className="shadow-sm appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>
            <div className="pt-9 flex items-center">
              <input
                type="checkbox"
                className="h-4 w-5"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="pl-1">Remember me</label>
            </div>
            <div className="pt-9">
              <button
                type="submit"
                className="w-full justify-center rounded-lg bg-gradient-to-r from-orange-300 to-pink-500 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
            <p className="text-gray-600 text-center pt-10">
              ©2024, All rights reserved
            </p>
          </form>
        </div>
        <div className="hidden lg:flex lg:w-2/4 flex-col items-center justify-center bg-white pt-40">
          <h2 className="text-5xl font-bold text-center mb-4 text-[#042D60] text-[2rem]">
            Seamlessly manage all learner <br /> data in a unified platform.
          </h2>
          <p className="text-center text-xl text-gray-700 mb-6">
            Centralize customer data effortlessly. Streamline <br /> communication, sales, and support for seamless growth.
          </p>
          <img src="/1 Skill Capital - Login Page Image (1).png" alt="Skill Capital Login Page" />
        </div>
      </div>
    </main>
  );
}

