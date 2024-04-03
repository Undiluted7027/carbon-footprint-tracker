import { LogoutIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import Logout from "../accounts/Logout";
import ThemeToggler from "./ThemeToggler";
// import Nav from "../../Nav";
import '../../Nav.css';


export default function Header() {
  const [modal, setModal] = useState(false);

  const { currentUser } = useAuth();

  return (
    <>
      <nav className="nav">
        <div className="navContainer">
          <Link to="/" className="navTab">Chat App</Link>
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
