import { NavLink, Outlet } from "react-router-dom";
import { useAuthContext } from "../store/contextsAndEffects_provider";
import { useState } from "react";
import { useEffect } from "react";

export const AdminContacts = () => {
  const { authorization } = useAuthContext();
  const [data, setData] = useState([]);
  const [admin, toggleAdmin] = useState(true);

  const getContacts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/admin/contacts/all",
        {
          method: "GET",
          headers: { Authorization: authorization },
        }
      );
      const res_asJSON = await response.json();

      if (res_asJSON.isAdmin === false) {
        console.log(res_asJSON.isAdmin);
        console.log(
          "response rcvd is an access denied msg and not an array of contacts therefore toggling the isAdmin Value to false"
        );
        toggleAdmin(!isAdmin);
        setData(res_asJSON.msg);
      }
      setData(res_asJSON);
      console.log(
        "response rcvd is not an access denied msg instead its an array of contacts therefore saving in contacts state"
      );
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return admin === true ? (
    <div className="overflow-y-auto max-h-[320px] overflow-x-hidden rounded-xl border-purple-500 border-1  border-t-2 ">
      <table class="table w-250 text-[1rem]">
        <thead class="bg-purple-200 text-[1rem]">
          <tr>
            <th className="thead-admin-users">S.No </th>
            <th className="thead-admin-users">Name</th>
            <th className="thead-admin-users">Email</th>
            <th className="thead-admin-users">Message</th>
            <th className="thead-admin-users">..Edit..</th>
            <th className="thead-admin-users border-r-0">..Delete.. </th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((curData, index) => {
            return (
              <tr className="border-purple-400 border-b" key={index}>
                <th>{index + 1}</th>
                <td>{curData.username}</td>
                <td>{curData.email}</td>
                <td>{curData.message}</td>
                <td>Edit</td>
                <td>
                  <button
                    class="btn btn-outline btn-error outline-red-600 text-red-500 hover:text-white hover:bg-red-600"
                    onClick={() => {
                      !usersData.isAdmin //isAdmin here gives false value as default and then with ! its turned into true
                        ? deleteUser(curUser._id) //On true of if condition this value runs always
                        : alert("Sorry, Admin can't be deleted!"); //On false of if condition this value runs always
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div role="alert" className="p-10 text-lg font-medium alert alert-warning">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>{data}</span>
    </div>
  );
};
