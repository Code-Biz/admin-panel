import { useState } from "react";
import { useNavigate } from "react-router-dom";
import("./register.css");
import { useAuthContext } from "../store/contextsAndEffects_provider";

//THESE PAGES ARE DEALT AS COMPONENTS AS WELL JUST LIKE THE NAVBAR COMPONENT WE CREATED IN COMMPONENTS FOLDERS
export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    pass: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
      // we have used [] in above line to make the name dynamic means it will be dynamically ebing stored in the storaged. untill we press submit and store it permanently
    });

    //2nd way
    //  setUser((prev)=>{
    //   ...prev,
    //   [name]: value,
    // });

    // console.log(user);
  };

  const navigator = useNavigate();
  const { storeTokenInLS } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseRcvd = await fetch(
        "http://localhost:3000/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
          // From   ||1||..here   the enetered data first goes to the   ||2||..regValidator middleware    applied on the above route. If error occurs
          // regValidator passes that error to    ||3||..error-middleware    by using next(err) applied on all routes of server.js, then that
          // error-middleware returns the error as res to this above fetch, if no error occurs and data is valid the regValidator
          // moves to    ||4||..register function/controller    in auth-controller using next() from where some response is then returned to this fetch.
          //next(error) is for middleware and next() is for next function.
        }
      );

      const res_asJSON = await responseRcvd.json();
      // console.log("Response From Server : ", res_asJSON);

      //If responseRcvd.ok is found and is true also then if condition will execute
      // and if its not found then else condition will execute which sends a modified error to
      // error-middleware which is then returned to the route calling that error-middleware i.e the register route.
      // This route than sends this return as res to frontend that called this route.
      if (responseRcvd.ok) {
        //IF WE COMMENT THE BELOW LINE IT WILL REMOVE THE LOGOUT PAGE SHOWING AFTER JUST REGISTERING
        // storeTokenInLS(res_asJSON.token);

        //As user has registered now empty the fields
        setUser({ username: "", email: "", phone: "", pass: "" });
        alert("User Registered! Hold on we are navigating you to login page.");
        navigator("/login");
      } else {
        const errRcvd = res_asJSON;
        console.log("ref: register in register.jsx");
        console.log(errRcvd);
        alert(errRcvd ? errRcvd.issue_message : errRcvd.message);
      }
    } catch (error) {
      console.log("Fetching Failed Because Of ::" + error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registeration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img src="Images/register-form.png" alt="" id="reg-image" />
              </div>

              <div className="registration-form">
                <h1>Registration Form</h1>

                <br />

                <form onSubmit={handleSubmit}>
                  <div id="div-username">
                    <label htmlFor="username">Username: </label>
                    <input
                      type="text"
                      placeholder="Enter username..."
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      id="username"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div id="div-email">
                    <label htmlFor="email">email: </label>
                    <input
                      type="email"
                      placeholder="Enter email..."
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      id="email"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div id="div-phone">
                    <label htmlFor="phone">Phone: </label>
                    <input
                      type="number"
                      placeholder="Enter phone..."
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                      id="phone"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div id="div-pass">
                    <label htmlFor="pass">pass: </label>
                    <input
                      type="password"
                      placeholder="Enter pass..."
                      name="pass"
                      value={user.pass}
                      onChange={handleInput}
                      id="pass"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <br />

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
