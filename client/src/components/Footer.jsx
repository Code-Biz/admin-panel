import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer border-0  border-t-2 border-purple-700   sm:footer-horizontal bg-purple-200 font-md text-2xl  text-purple-800  p-10">
        <aside>
          <div className="m-0 my-2 max-sm:ml-2 max-sm:mr-3">
            <NavLink
              to="Home"
              className=" font-bold text-6xl border-2 rounded-xl p-2 bg-blue-50 text-purple-500"
            >
              DentoCare
            </NavLink>
          </div>
          <p className="ml-1 mt-2">
            Dento Care Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title font-bold opacity-200  text-2xl  text-purple-800">
            Services
          </h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold opacity-100 text-2xl  text-purple-800">
            Company
          </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold opacity-100 text-2xl  text-purple-800">
            Legal
          </h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">. . .</a>
        </nav>
      </footer>
    </>
  );
};
