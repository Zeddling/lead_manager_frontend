import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth";

/**
 *
 * Props:
 * 1. svg file
 */
const Header = ({ logo }) => {

  const auth = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const guestLinks = (
    <div className="hidden md:flex items-center space-x-3 ">
      <Link
        to={"login"}
        className="py-2 px-2 font-medium text-gray-500
                rounded hover:bg-green-500 hover:text-white transition duration-300"
      >
        Log In
      </Link>
      <Link
        to={"register"}
        className="py-2 px-2 font-medium text-white
                bg-green-500 rounded hover:bg-green-400 transition duration-300"
      >
        Register
      </Link>
    </div>
  );

  const authLinks = (
    <div className="hidden md:flex items-center space-x-3 ">
      <div className="flex items-center py-4 px-2">
        <span className="font-semibold text-gray-500 text-sm">
          Welcome <strong>{auth.user ? `${auth.user.username}` : ""}</strong>
        </span>
      </div>
      <button
        className="py-2 px-2 font-medium text-gray-500
                    rounded hover:bg-red-500 hover:text-white transition duration-300"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <Link to={""}>
                <div className="flex items-center py-4 px-2">
                  <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                  <span className="font-semibold text-gray-500 text-lg">
                    Leads Manager
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex space-x-7">
              {auth.isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
