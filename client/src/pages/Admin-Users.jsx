import { useEffect, useState } from "react";
import { useAuthContext } from "../store/contextsAndEffects_provider";

export const AdminUsers = () => {
  const { authorization } = useAuthContext();
  const [usersData, setUserData] = useState([]);
  const [updateUser, setupdateUser] = useState({});

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

  const handleInput = async (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setupdateUser({ ...updateUser, [name]: value });
    console.log(updateUser);
  };

  const handleUpdate = async (id) => {
    console.log(id);

    try {
      const res = await fetch(
        `http://localhost:3000/api/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authorization,
            "Content-Type": "application/json",
            // SOMETIME THE DATA ISN"T RECIEEVD TO THE BACKEND IF THE ABOVE CONTENT TYPE ISN"T DEFINED
          },
          body: JSON.stringify(updateUser),
        }
      );
      // console.log(updateUser);
      const res_asJSON = await res.json();
      console.log(res_asJSON);

      setupdateUser({ username: "", email: "", phone: "" });
      getAllUsersData();
    } catch (error) {}
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
    } catch (error) {
      console.log(error);
    }
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

                <td>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    class="button-primary "
                    onClick={() => {
                      !usersData.isAdmin
                        ? (setupdateUser(curUser),
                          document.getElementById("my_modal_1").showModal())
                        : "";
                    }}
                  >
                    EDIT
                  </button>
                </td>
                <td>
                  <button
                    class="btn btn-outline bg-red-100  btn-error outline-red-600 text-red-500 hover:text-white hover:bg-red-600"
                    onClick={() => {
                      !curUser.isAdmin //isAdmin here gives false value as default and then with ! its turned into true
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

      {updateUser && (
        <dialog id="my_modal_1" className="modal ">
          <div className="modal-box border-3  border-purple-600">
            <h1 className="flex justify-center underline-offset-2 underline font-black text-2xl text-purple-600 ">
              Update Form
            </h1>
            <div className="modal-action">
              <form method="dialog">
                <div className="container ">
                  <label
                    htmlFor="id"
                    className="font-bold text-2xl  text-purple-600 mr-0"
                  >
                    _Id :
                  </label>
                  <input
                    type="text"
                    name="id"
                    value={updateUser._id}
                    required
                    placeholder="Name ..."
                    autoComplete="off"
                    disabled
                    className=" inputs mx-0"
                    // The above line states that maximum width will be 50 and till the maximum of small screen it will be 20
                  />
                </div>
                <div className="container ">
                  <label
                    htmlFor="username"
                    className="font-bold text-2xl  text-purple-600 mr-0"
                  >
                    Name :
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={updateUser.username}
                    required
                    placeholder="Name ..."
                    onChange={handleInput}
                    autoComplete="off"
                    className="inputs mx-0"
                    // The above line states that maximum width will be 50 and till the maximum of small screen it will be 20
                  />
                </div>
                <div className="container">
                  <label
                    htmlFor="email"
                    className="font-bold text-2xl  text-purple-600 mr-0"
                  >
                    Email :
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={updateUser.email}
                    required
                    placeholder="Email ..."
                    onChange={handleInput}
                    autoComplete="off"
                    className="inputs mx-0"
                    // The above line states that maximum width will be 50 and till the maximum of small screen it will be 20
                  />
                </div>
                <div className="container">
                  <label
                    htmlFor="pass"
                    className="font-bold text-2xl text-purple-600 mr-0"
                  >
                    Phone :
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={updateUser.phone}
                    required
                    placeholder="Phone ..."
                    onChange={handleInput}
                    autoComplete="off"
                    className="inputs m-0"
                  />
                </div>

                {/* if there is a button in form, it will close the modal */}
                <button
                  className="float-end btn-lg btn h-15 hover:bg-purple-900 rounded-full w-110 btn-primary bg-purple-600 mt-8"
                  type="submit"
                  onClick={() => {
                    !usersData.isAdmin //isAdmin here gives false value as default and then with ! its turned into true
                      ? handleUpdate(updateUser._id) //On true of if condition this value runs always
                      : alert("Sorry, Admin can't be deleted!"); //On false of if condition this value runs always
                  }}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
