import { useState } from "react";
import("./login.css");
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../store/contexts_provider";

const url = "http://localhost:3000/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  const navigator = useNavigate();
  const { storeTokenInLS } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_asJSON = await response.json();
        storeTokenInLS(res_asJSON.token);

        alert("Login Successful");
        setUser({ email: "", pass: "" });
        console.log("User Loged In: " + `${user.username}`);
        navigator("/");
      } else {
        console.log("Invalid Credentials from frontend");
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img src="Images\register-form.png" alt="" id="log-image" />
              </div>

              <div className="login-form">
                <h1>Login</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div className="div-email">
                    <label htmlFor="email">Email : </label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      required
                      placeholder="Email ..."
                      onChange={handleInput}
                      autoComplete="off"
                    />
                  </div>
                  <div className="div-pass">
                    <label htmlFor="pass">Password : </label>
                    <input
                      type="pass"
                      name="pass"
                      value={user.pass}
                      required
                      placeholder="Password ..."
                      onChange={handleInput}
                      autoComplete="off"
                    />
                  </div>
                  <br />
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
