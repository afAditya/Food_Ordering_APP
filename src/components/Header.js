import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg bg-gray-200">
      <div className="logo-container">
        <img
          className="w-32"
          src="https://img.freepik.com/free-vector/delivery-logo-template_23-2147880262.jpg?size=626&ext=jpg"
        />
      </div>
      <div className="flex item items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
            className="login-btn"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
