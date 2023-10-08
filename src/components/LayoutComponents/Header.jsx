import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../Authentications/AuthProvider";
const Header = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
  const [open, setOpen] = useState(false);
  return (
    <div className=" relative z-40 bg-black">
      <nav className="flex py-3   items-center justify-between container mx-auto">
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
              to={"/blog"}
            >
              Blog
            </NavLink>
          </ul>
        </div>
        <div className="order-3">
          {!user && !loading ? (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "     btn    font-bold"
                  : "  text-white   border-white  btn-ghost btn font-bold "
              }
              to={"/login"}
            >
              Log In
            </NavLink>
          ) : (
            <NavLink
              onClick={handleLogOut}
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? "     btn     font-bold"
                  : "  text-white   border-white  btn-ghost btn font-bold "
              }
            >
              Log Out
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
