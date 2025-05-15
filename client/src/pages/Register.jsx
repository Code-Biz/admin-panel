import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../store/contextsAndEffects_provider";
import { toast } from "react-toastify";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseRcvd = await fetch(
        "http://localhost:3000/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          //In above headers we included the Content-type to tell that we are send a content file of the specified type i.e json in the body of this link
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
        //----->IF WE COMMENT THE BELOW LINE IT WILL REMOVE THE LOGOUT PAGE SHOWING AFTER JUST REGISTERING
        // storeTokenInLS(res_asJSON.token);

        //As user has registered now empty the fields
        setUser({ username: "", email: "", phone: "", pass: "" });
        toast.success("Registration Succesful! Heading towards Login Page.");
        navigator("/login");
      } else {
        const errRcvd = res_asJSON;
        console.log("ref: register in register.jsx");
        console.log(errRcvd);
        toast.error(errRcvd);
        // toast.error(errRcvd ? errRcvd : errRcvd.message);
        // toast.error(errRcvd ? errRcvd : errRcvd.message);
      }
    } catch (error) {
      console.log("Fetching Failed Because Of ::" + error);
      toast.error("Please check logs for error!");
    }
  };

  return (
    <>
      <section className="min-h-screen m-0 max-w-full min-w-fit bg-purple-100">
        <div className=" m-0 flex max-w-full min-w-fit justify-start">
          <div className=" m-0 flex min-h-screen bg-purple-200 max-w-[50%] min-w-[50%]">
            <img
              src="Images\register-form.png"
              className="max-sm:min-w-[50%] size-150"
              id="log-image"
            />
          </div>

          <div className="max-sm:min-w-[5%] w-120">
            <h1 className="flex justify-center font-black text-6xl text-purple-600 ">
              Registration
            </h1>
            <br />

            <form
              onSubmit={handleSubmit}
              className=" container py-10 bg-blue-100 flex-col  border-purple-500 shadow-purple-600 shadow-md rounded-2xl"
            >
              <table>
                <tbody>
                  <tr className="tr-reg">
                    <td className="td-reg-labels">
                      <label
                        htmlFor="username"
                        className="font-bold text-2xl w-fit  text-purple-600"
                      >
                        Username :
                      </label>

                      <input
                        type="text"
                        name="username"
                        value={user.username}
                        required
                        placeholder="Username ..."
                        onChange={handleInput}
                        autoComplete="off"
                        className="inputs"
                        // The above line states that maximum width will be 50 and till the maximum of small screen it will be 20
                      />
                    </td>
                  </tr>
                  <tr className="tr-reg">
                    <td className="td-reg-labels">
                      <label
                        htmlFor="email"
                        className="font-bold text-2xl text-purple-600"
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
                        className="inputs"
                      />
                    </td>
                  </tr>

                  <tr className="tr-reg">
                    <td className="td-reg-labels">
                      <label
                        htmlFor="pass"
                        className="font-bold text-2xl text-purple-600"
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
                        className="inputs"
                      />
                    </td>
                  </tr>
                  <tr className="tr-reg">
                    <td className="td-reg-labels">
                      <label
                        htmlFor="phone"
                        className="font-bold text-2xl  text-purple-600"
                      >
                        Phone :
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        required
                        placeholder="Phone"
                        onChange={handleInput}
                        autoComplete="off"
                        className="inputs"

                        // The above line states that maximum width will be 50 and till the maximum of small screen it will be 20
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="">
                <button
                  type="submit"
                  className="btn-lg btn h-15 hover:bg-purple-900 rounded-full w-110 btn-primary bg-purple-600 mt-8"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
