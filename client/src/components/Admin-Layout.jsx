import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <section className="flex justify-around w-full my-20">
      <div className="flex flex-col w-fit ml-8 border-2 rounded-2xl  border-purple-500 mt-8">
        <h1 className="font-bold text-4xl w-fit   text-purple-600 border-0 border-b rounded-b-none rounded-2xl bg-purple-200 border-purple-400 p-2">
          Admin <br />
          Controls
        </h1>
        <nav class="w-full my-2">
          <ul class="w-gull m-0 flex flex-col">
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
                to="contacts/all"
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

      <div className="w-fit sm:max-w-full mt-10 ml-10 mb-10">
        <Outlet />
      </div>
    </section>
  );
};
