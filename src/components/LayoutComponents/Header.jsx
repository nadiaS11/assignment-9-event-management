import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";

import { AuthContext } from "../Authentications/AuthProvider";
import Spinner from "./../Private/Spinner";
const Header = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  // console.log(user, "from header");
  const handleLogOut = () => {
    logOut();
  };
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className=" relative z-40 bg-black">
      <nav className="flex py-3 px-2   items-center justify-between lg:container mx-auto">
        <figure className=" order-2 md:order-none">
          <img
            className="w-32 rounded"
            src="/logo.png
        "
            alt=""
          />
        </figure>
        <div className="order-1 md:order-none ">
          <IoMenu
            onClick={() => setOpen(!open)}
            className="md:hidden font-medium text-7xl mr-2 "
          ></IoMenu>
          <ul
            className={`absolute left-2 grid text-right duration-100 z-50   ${
              open
                ? "top-32 bg-base-200 md:bg-none rounded space-y-2"
                : "-top-60"
            } md:static md:flex md:gap-5 py-2  text-xl px-2`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "  btn font-bold"
                  : "    md:text-white font-bold btn-ghost btn"
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "    text-black  font-bold   btn"
                  : "    md:text-white font-bold btn-ghost btn"
              }
              to={"/gallery"}
            >
              Gallery
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "     btn    font-bold"
                  : " md:text-white     font-bold btn-ghost btn"
              }
              to={"/speakers"}
            >
              Our Speakers
            </NavLink>
          </ul>
        </div>
        <div className="order-3">
          {!user ? (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "btn font-bold"
                  : "text-white border-white  btn-ghost btn font-bold "
              }
              to={"/login"}
            >
              Log In
            </NavLink>
          ) : (
            <div className="flex gap-2 items-center  ">
              <CgProfile
                onClick={() => setOpenProfile(!openProfile)}
                className="md:hidden font-medium text-7xl mr-2 "
              ></CgProfile>
              <ul
                className={`absolute right-2 grid text-right duration-100 z-50   ${
                  openProfile
                    ? "top-32 bg-base-200 md:bg-none rounded space-y-2"
                    : "-top-60"
                } md:static md:flex md:gap-5 py-2  text-xl px-2`}
              >
                <li>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user?.photoURL ? user.photoURL : "/user.png"}
                    alt=""
                  />
                </li>
                <li>
                  <h4 className="md:text-white  btn-ghost btn font-bold ">
                    {user?.displayName ? user.displayName : ""}
                  </h4>
                </li>
                <li>
                  <NavLink
                    onClick={handleLogOut}
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive
                        ? " btn  font-bold"
                        : "  btn-ghost  btn md:text-white     border-white font-bold text-right"
                    }
                  >
                    Log Out
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
