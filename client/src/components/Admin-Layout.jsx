import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <section className="flex justify-around w-full py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 min-h-screen">
      <div className="flex flex-col w-70 ml-8 border-2 rounded-2xl  border-purple-500 mt-8">
        <h1 className="font-bold pl-5 text-4xl w-full   text-purple-600 border-0 border-b rounded-b-none rounded-2xl bg-purple-200 border-purple-400 p-2">
          Admin <br />
          Controls
        </h1>
        <nav class="w-full my-2">
          <ul class="w-gull m-0 flex flex-col">
            <li className="w-full p-4 pl-6 ">
              <NavLink
                to="users"
                className=" btn btn-link p-0   font-semibold text-[20px] text-purple-600"
              >
                USERS -❯
              </NavLink>
            </li>
            <li className="w-full p-4 pl-6  border-purple-300 border-t-1">
              <NavLink
                to="contacts/all"
                className="btn  btn-link p-0   font-semibold text-[20px] text-purple-600"
              >
                CONTACTS -❯
              </NavLink>
            </li>
            <li className="w-full p-4 pl-6  border-purple-300 border-t-1">
              <NavLink
                to="/services"
                className="btn  btn-link p-0   font-semibold text-[20px] text-purple-600"
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
