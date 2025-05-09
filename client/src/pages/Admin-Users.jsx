import { useEffect, useState } from "react";
import { useAuthContext } from "../store/contextsAndEffects_provider";

export const AdminUsers = () => {
  const { authorization } = useAuthContext();
  const [usersData, setUserData] = useState([]);

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/users", {
        method: "GET",
        headers: { Authorization: authorization },
      });
      const data = await response.json();
      console.log(`UsersData: ${data} => Admin-Users`);
      setUserData(data);

      //Using template literal to show array of objects in condole
    } catch (error) {
      console.log(error + " => Admin-Users");
    }
  };

  const deleteUser = async (id) => {
    console.log(id);

    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: authorization },
        }
      );

      const data = await response.json();
      if (data) {
        console.log(`${data} => Admin-Users-DeleteUser`);
        getAllUsersData();
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <div className="overflow-y-auto max-h-[320px] overflow-x-hidden rounded-xl border-purple-500 border-1  border-t-2 ">
      <table class="table w-250 text-[1rem]">
        <thead class="bg-purple-200 text-[1rem]">
          <tr>
            <th className="thead-admin-users">S. No</th>
            <th className="thead-admin-users">User Id</th>
            <th className="thead-admin-users">Username</th>
            <th className="thead-admin-users">Email</th>
            <th className="thead-admin-users">Phone</th>
            <th className="thead-admin-users">..Edit..</th>
            <th className="thead-admin-users border-r-0">..Delete.. </th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((curUser, index) => {
            return (
              <tr className="border-purple-400 border-b" key={index}>
                <th>{index + 1}</th>
                <td>{curUser._id}</td>
                <td>{curUser.username}</td>
                <td>{curUser.email}</td>
                <td>{curUser.phone}</td>
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
  );
};
