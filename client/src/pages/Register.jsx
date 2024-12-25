import { useState } from "react";
import("./register.css");

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
    });

    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered: " + `${user.username}`);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registeration">
            <div className="container grid grid-two-cols">
              <div className="registeration-image">
                {/* <img src="/client/public/Images/register-form.png" alt="" /> */}
              </div>

              <div className="registration-form">
                <h1>Registeration Form</h1>

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
