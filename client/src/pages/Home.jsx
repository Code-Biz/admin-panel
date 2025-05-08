import { toast } from "react-toastify";
import { useAuthContext } from "../store/contextsAndEffects_provider";

//A home component
const Home = () => {
  const { userData } = useAuthContext();

  return (
    <section className="flex-col w-full bg-amber-300">
      {/* <h1>
        .......................... Welcome! Doctor {userData.username}{" "}
        ..........................
      </h1> */}

      <div id="Carousel-Div" className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full h-120"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="ml-5 btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className=" mr-15 btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full h-120"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className=" ml-15 btn btn-circle ">
              ❮
            </a>
            <a href="#slide3" className=" mr-15 btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full h-120"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className=" ml-15 btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="  mr-15 btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full h-120"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className=" ml-15 btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="  mr-15 btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* ****************************************************************** */}
        {/* ****************************************************************** */}
        <div
          id="Articles-Div"
          className="absolute mt-110 w-full carousel flex "
        >
          <div
            id="slide-A"
            className="carousel-item relative w-full justify-center"
          >
            <div className="mx-15 card bg-white w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="mx-15 card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="mx-15 card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide-C" className=" ml-15 btn btn-circle">
                ❮
              </a>
              <a href="#slide-B" className="  mr-15 btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide-B"
            className="carousel-item relative w-full justify-center"
          >
            <div className="mx-15 card bg-white w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="mx-15 card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="mx-15 card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide-A" className=" ml-15 btn btn-circle">
                ❮
              </a>
              <a href="#slide-C" className="  mr-15 btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide-C"
            className="carousel-item relative w-full justify-center"
          >
            <div className="mx-15 card bg-white w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="mx-15 card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="mx-15 card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide-B" className=" ml-15 btn btn-circle">
                ❮
              </a>
              <a href="#slide-A" className="  mr-15 btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//An about component
const About = () => {
  return <h1>About Page</h1>;
};

//A contact component
const Contact = () => {
  const { userData } = useAuthContext();
  return (
    <>
      <section className="m-0  max-w-full min-w-fit bg-purple-100">
        <div className=" m-0 flex max-w-full min-w-fit justify-start">
          <div className=" m-0 bg-purple-200 max-w-[50%] min-w-[50%]">
            <img
              src="Images\register-form.png"
              className="max-sm:min-w-[50%] size-150"
              id="log-image"
            />
          </div>

          <div className="max-sm:min-w-[5%] w-120">
            <h1 className="flex justify-center font-black text-6xl text-purple-600 ">
              Contact Us
            </h1>
            <br />

            <form
              // onSubmit={handleSubmit}
              className=" container py-4 bg-blue-100 flex-col border-purple-500 shadow-purple-600 shadow-md rounded-2xl"
            >
              <div className="flex flex-col items-center">
                <div className="container">
                  <label
                    htmlFor="username"
                    className="font-bold text-2xl  text-purple-600 mr-0"
                  >
                    Username :
                  </label>
                  <input
                    type="text"
                    name="username"
                    readOnly
                    placeholder={userData.username}
                    className="inputs mx-0"
                    // The above line states that maximum width will be 50 and till the maximum of small screen it will be 20
                  />
                </div>
                <div className="container">
                  <label
                    htmlFor="email"
                    className="font-bold text-2xl text-purple-600 mr-0"
                  >
                    Email :
                  </label>
                  <input
                    type="password"
                    name="pass"
                    placeholder={userData.email}
                    readOnly
                    className="inputs m-0"
                  />
                </div>

                <div className="container">
                  <label
                    htmlFor="email"
                    className="font-bold text-2xl text-purple-600 mt-0 min-w-fit mr-0"
                  >
                    Message :
                  </label>
                  <textarea
                    type="text"
                    placeholder="Your message here ..."
                    className=" border-purple-500 placeholder-purple-600 focus:outline-none focus:border-2 font-medium text-[1rem] text-purple-800 textarea m-0 textarea-primary bg-purple-50 h-50 w-70 "
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="btn-lg btn hover:bg-purple-900 rounded-full w-108 h-15 btn-primary bg-purple-600 my-6"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export { Home, About, Contact };

//Click in forn of the Services and press Ctrl D again and again to select all occurrences of term services written anywhere in this file

//const [user, setUser] = useState({})
// Above line can be thoguht as of const [userState, setUserState] = useState({})

// ... to preservate the initial values/state
