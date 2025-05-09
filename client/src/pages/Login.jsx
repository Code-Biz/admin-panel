import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../store/contextsAndEffects_provider";
// import "./login.css";
import { toast } from "react-toastify";

const url = "http://localhost:3000/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // here above the name and value referes to the name of field calling this handleinput method i.e email and its value,  pass and its value
    setUser({
      ...user,
      [name]: value,
    });
    // alert(user);
  };

  const navigator = useNavigate();
  const { storeTokenInLS } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //This below is the same thing that we do using postman i.e make some request to backend. Here we doing it from frontend using fetch or axios could be used as well.
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const res_asJSON = await response.json();
      if (response.ok) {
        storeTokenInLS(res_asJSON.token);

        toast.success("Login Successful");
        setUser({ email: "", pass: "" });
        // The below log workss
        // console.log("User Loged In: " + `${user.username}`);
        navigator("/Home");
      } else {
        console.log(res_asJSON);
        toast.error(res_asJSON);
      }
    } catch (error) {}
  };

  return (
    // min-w-full means that the minimum width in all scenarios will be full or u can set fit as well

    <section className="m-0 max-w-full min-w-fit bg-purple-100">
      <div className=" m-0 flex max-w-full min-w-fit ">
        <div className=" m-0 bg-purple-200 max-w-[50%] min-w-[50%]">
          <img
            src="Images\register-form.png"
            className="max-sm:min-w-[50%] size-150"
            id="log-image"
          />
        </div>

        <div className="max-sm:min-w-[5%] w-120">
          <h1 className="flex justify-center font-black text-6xl text-purple-600 ">
            Login
          </h1>
          <br />

          <form
            onSubmit={handleSubmit}
            className=" container py-10 bg-blue-100 flex-col border-purple-500 shadow-purple-600 shadow-md rounded-2xl"
          >
            <div className="flex flex-col items-center">
              <div className="container">
                <label
                  htmlFor="email"
                  className="font-bold text-2xl  text-purple-600 mr-0"
                >
                  Email :
                </label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
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
                  Password :
                </label>
                <input
                  type="password"
                  name="pass"
                  value={user.pass}
                  required
                  placeholder="Password ..."
                  onChange={handleInput}
                  autoComplete="off"
                  className="inputs m-0"
                />
              </div>

              <button
                type="submit"
                className="btn-lg btn  hover:bg-purple-900 rounded-full w-110 h-15 btn-primary bg-purple-600 mt-8"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
