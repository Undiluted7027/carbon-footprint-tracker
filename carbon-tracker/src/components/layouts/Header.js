import { LogoutIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import Logout from "../accounts/Logout";
import ThemeToggler from "./ThemeToggler";
// import Nav from "../../Nav";
import '../../Nav.css';
import auth from "../../config/firebase";
// Correct file name and path
import Group16Image from './Group_16.png';



export default function Header() {
  const [modal, setModal] = useState(false);

  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        const token = user && (await user.getIdToken());
        const payloadHeader = {
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            "Authorization": `Bearer ${token}`,
          },
        };
        // console.log(payloadHeader);
        const response = await fetch("http://localhost:3001", payloadHeader);
        console.log(await response.text());
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="navContainer">
        <Link to="/" className="navTab">
          <img className = "navLogo" src={Group16Image} />
        </Link>
          <Link to = "/" className='navTab'> Home </Link>
          <p className='navTab'> Leaderboard</p>
        </div>
        <div className="navDivider">
          <ThemeToggler />
          {currentUser && (
            <>
              <button
                className="myCustomButton text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
                // style={{ backgroundColor: "#96db8d" }}
                onClick={() => setModal(true)}
              >
                <LogoutIcon className="h-8 w-8" aria-hidden="true" />
              </button>
              <Link
                to="/profile"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-full text-sm p-2.5"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={currentUser.photoURL}
                  alt=""
                />
              </Link>
            </>
          )}
        </div>
        {/* </div> */}
      </nav>
      {modal && <Logout modal={modal} setModal={setModal} />}
    </>
  );
}
