import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <section className="flex justify-around w-full mt-20">
      <div className="flex flex-col w-50 ml-8 border-2 rounded-2xl border-purple-500 my-5">
        <h1 className="font-bold text-4xl w-full text-purple-600 border-b-2 border-purple-400 p-2">
          Admin <br />
          Controls
        </h1>
        <nav class="w-full">
          <ul class="w-gull m-0 flex flex-col mt-2">
            <li className="w-full p-2">
              <NavLink
                to="users"
                className="btn btn-link p-0 font-semibold text-[16px] text-purple-600"
              >
                USERS -❯
              </NavLink>
            </li>
            <li className="w-full p-2  border-purple-300 border-t-1">
              <NavLink
                to="contacts"
                className="btn btn-link p-0 font-semibold text-[16px] text-purple-600"
              >
                CONTACTS -❯
              </NavLink>
            </li>
            <li className="w-full p-2  border-purple-300 border-t-1">
              <NavLink
                to="/services"
                className="btn btn-link p-0 font-semibold text-[16px] text-purple-600"
              >
                SERVICES -❯
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-fit sm:max-w-full  ml-10">
        <Outlet />
      </div>
    </section>
  );
};
