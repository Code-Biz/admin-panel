import { NavLink } from "react-router-dom";
import { useAuthContext } from "../store/contextsAndEffects_provider";
import { useEffect } from "react";

// import("./Navbar.css");

//Filename of a component always start with an uppercase letter e.g  Navbar.js

// inline exoprt of (arrow) function named Navbar
export const Navbar = () => {
  const { isLogged, userData } = useAuthContext();
  return (
    // the below fragment i.e <></> is not necessary maybe bcz header is alread there whic is serving as the One top-level element
    <>
      <div className=" container py-4 min-w-screen  justify-between bg-purple-200  border-b-2 border-purple-700">
        <div className="my-2 ml-5 max-sm:ml-2 max-sm:mr-3">
          <NavLink
            to="localhost:8000"
            className=" font-bold text-3xl border-2 rounded-xl p-2 bg-blue-50 text-purple-500"
          >
            DentoCare
          </NavLink>
        </div>
        {/* max-sm:mx-3 in below lines means that till the maximum size-range of the sm devices the margin from  right will be 3 */}
        <nav className=" mr-5 max-sm:mr-3 max-sm:ml-2">
          <ul className="flex  w-fit  p-0  flex-wrap">
            <li className="mx-5">
              {/* not used <a><a/> tag for links and used Navlink because this make the pages to not load or reload and immediately appear as soon as we shift from one page to another */}
              <NavLink
                to="Home"
                className="btn btn-link p-0 font-semibold text-[18px] text-purple-600"
              >
                Home
              </NavLink>
            </li>
            <li className="mx-5">
              <NavLink
                to="About"
                className="btn btn-link p-0 font-semibold text-[18px] text-purple-600"
              >
                About
              </NavLink>
            </li>

            <li className="mx-5">
              <NavLink
                to="/services"
                className="btn btn-link p-0 font-semibold text-[18px] text-purple-600"
              >
                Services
              </NavLink>
            </li>
            <li className="mx-5">
              <NavLink
                to="contact"
                className="btn btn-link p-0 font-semibold text-[16px] text-purple-600"
              >
                Contact Us
              </NavLink>
            </li>
            {isLogged ? (
              <>
                {userData.isAdmin ? (
                  <>
                    <li className="mx-2">
                      <NavLink
                        //either you write admin or Admin most of the times it will not do any issue
                        to="admin"
                        className="btn p-0 font-semibold text-[18px] text-purple-600"
                      >
                        <button className="button-primary">Admin Panel </button>
                      </NavLink>
                    </li>
                    <li className="mx-2">
                      <NavLink
                        //either you write admin or Admin most of the times it will not do any issue
                        to="logout"
                        className="btn  p-0 font-semibold text-[18px] text-purple-600"
                      >
                        <button className="button-primary">Log Out </button>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li className="mx-2">
                    <NavLink
                      //either you write admin or Admin most of the times it will not do any issue
                      to="logout"
                      className="btn p-0 font-semibold text-[18px] text-purple-600"
                    >
                      <button className="button-primary">Log Out </button>
                    </NavLink>
                  </li>
                )}
              </>
            ) : (
              <>
                <li className="mx-2">
                  <NavLink
                    to="Register"
                    className="p-0 font-semibold text-[18px] text-purple-600"
                  >
                    <button className="button-primary">Register</button>
                  </NavLink>
                </li>
                <li className="mx-2">
                  <NavLink
                    to="Login"
                    className=" p-0 font-semibold text-[16px] text-purple-600"
                  >
                    <button className="button-primary">Login</button>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
