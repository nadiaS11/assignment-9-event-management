import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../Authentications/AuthProvider";
const Header = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  // console.log(user, "from header");
  const handleLogOut = () => {
    logOut();
  };
  const [open, setOpen] = useState(false);
  const [profileLogOut, setProfileLogOut] = useState(false);

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
              to={"/speakers"}
            >
              Our Speakers
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
            <div
              onClick={() => setProfileLogOut(!profileLogOut)}
              className="flex gap-2 items-center  "
            >
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL ? user.photoURL : "/user.png"}
                alt=""
              />
              <div>
                <h4 className="text-white  btn-ghost btn font-bold ">
                  {user?.displayName ? user.displayName : ""}
                </h4>
                <h4
                  onClick={() => setProfileLogOut(!profileLogOut)}
                  className={`${
                    profileLogOut ? "absolute top-20" : " absolute -top-60"
                  }`}
                >
                  {" "}
                  <NavLink
                    onClick={handleLogOut}
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive
                        ? "     btn     font-bold"
                        : "  text-white   border-white  btn-ghost btn font-bold text-right"
                    }
                  >
                    Log Out
                  </NavLink>
                </h4>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
