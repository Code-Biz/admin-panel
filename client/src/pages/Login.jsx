import { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Loged In: " + `${user.username}`);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img src="Images\register-form.jpeg" alt="" />
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
