import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink className=" bg-white hover:bg-orange-100 hover:text-orange-500">
          Keyboard
        </NavLink>
      </li>

      <li>
        <NavLink className="hover:bg-orange-100 hover:text-orange-500">
          Keykaps
        </NavLink>
      </li>

      <li>
        <NavLink className="hover:bg-orange-100 hover:text-orange-500">
          Switches
        </NavLink>
      </li>

      <li>
        <NavLink className="hover:bg-orange-100 hover:text-orange-500">
          Accessories
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-white px-28">

        {/* LEFT SIDE */}
        <div className="navbar-start">

          {/* Mobile menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>

          {/* Desktop logo */}
          <button className=" text-xl text-black hidden lg:block">
            <img src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-logo.svg" alt="" />
          </button>
        </div>

        {/* MOBILE LOGO */}
        <div className="navbar-center lg:hidden">
          <img src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-logo.svg" alt="" />
        </div>

        {/* DESKTOP NAVLINKS */}
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal bg-white px-1 gap-4">
            {navlinks}
          </ul>
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="navbar-end">

        <div className="flex items-center gap-3">

    {/* Search - hidden on mobile */}
    <button className="hidden lg:flex btn btn-ghost btn-circle hover:bg-orange-100 hover:text-orange-500">
      <FaSearch className="text-lg" />
    </button>

    {/* Profile - hidden on mobile */}
    <button className="hidden lg:flex btn btn-ghost btn-circle hover:bg-orange-100 hover:text-orange-500">
      <FaUser className="text-lg" />
    </button>

    {/* Like - hidden on mobile */}
    <button className="hidden lg:flex btn btn-ghost btn-circle hover:bg-orange-100 hover:text-orange-500">
      <FaRegHeart className="text-lg" />
    </button>

    {/* Cart - visible on mobile AND desktop */}
    <button className="btn btn-ghost btn-circle hover:bg-orange-100 hover:text-orange-500">
      <FaShoppingCart className="text-lg" />
    </button>

  </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;