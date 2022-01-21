import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";

//  Custom hook
//  Watches for changes in state and updates the value
//  on change
const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return [value, handleChange];
};

const Login = () => {
  const [username, setUsername] = useInput("");
  const [password, setPassword] = useInput("");

  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(username, password))
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="px-8 py-6 mx-4 mt-4 text-left 
                bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3"
      >
        <h3 className="text-2xl font-bold text-center">Login</h3>
        <form onSubmit={onSubmit}>
          <div className="mt-4">
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter your username"
                onChange={setUsername}
                value={username}
                className="w-full px-4 py-2 mt-2 border 
                                    rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <input
                type="password"
                placeholder="Enter your password"
                onChange={setPassword}
                value={password}
                className="w-full px-4 py-2 mt-2 border 
                                    rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 
                                text-white bg-green-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              <Link className="text-blue-600 hover:underline" to={"/register/"}>
                Don't have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
