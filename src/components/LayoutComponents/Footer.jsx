import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-900 md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <figure className="flex items-center justify-center">
          <img
            className="w-32 rounded"
            src="/logo.png
        "
            alt=""
          />
        </figure>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Your best place to hangout with your friends and build your network
          with a strong community.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6  text-white">
          <li>
            <Link to={"/"} className="mr-4 hover:underline md:mr-6 ">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/gallery"} className="mr-4 hover:underline md:mr-6">
              Gallery
            </Link>
          </li>
          <li>
            <Link to={"/speakers"} className="mr-4 hover:underline md:mr-6 ">
              Our Speakers
            </Link>
          </li>
          <li>
            <Link to={"/register"} className="mr-4 hover:underline md:mr-6">
              Register
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="mr-4 hover:underline md:mr-6">
              Login
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022-2023 <Link className="hover:underline">The Mingle™</Link>. All
          Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
