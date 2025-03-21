import { NavLink } from "react-router-dom";
import { useAuthContext } from "../store/contextsAndEffects_provider";

import("./Navbar.css");

export const Navbar = () => {
  const { isLogged } = useAuthContext();
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo-header">
            <NavLink to="Home">Dentiblog</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                {/* not used a tag for links and used Navlink because this make the pages to not load or reload and immediately appear as soon as we shift from one page to another */}
                <NavLink to="Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="About">About</NavLink>
              </li>
              <li>
                <NavLink to="Contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="Services">Services</NavLink>
              </li>
              {isLogged ? (
                <li>
                  <NavLink to="Logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="Register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="Login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
