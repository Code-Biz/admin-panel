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

    console.log(user);
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
        }
      );

      console.log("Response from Server : ", responseRcvd);

      if (responseRcvd.ok) {
        const res_asJSON = await responseRcvd.json();
        storeTokenInLS(res_asJSON.token);

        //As user has registered now empty the fields
        setUser({ username: "", email: "", phone: "", pass: "" });
        alert("User Registered! Hold on we are navigating you to login page.");
        navigator("/login");
      } else {
        console.log("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
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
