import { toast } from "react-toastify";
import { useAuthContext } from "../store/contextsAndEffects_provider";
import { useState } from "react";

//A home component
const Home = () => {
  const { userData } = useAuthContext();

  return (
    <section className="w-full bg-gradient-to-br from-blue-100 via-purple-100 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative pl-10 flex flex-col md:flex-row items-center justify-between  py-16 max-w-7xl mx-auto">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 leading-tight mb-4 drop-shadow-lg">
            Welcome to <span className="text-blue-500">DentoCare</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
            Your smile, our passion. Experience world-class dental care with a
            personal touch.
          </p>
          <a
            href="#services"
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition font-semibold text-lg"
          >
            Explore Services
          </a>
        </div>
        <div className="ml-20 flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src="https://images.pexels.com/photos/6627278/pexels-photo-6627278.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Dental Care"
            className="rounded-xl shadow-2xl w-120 h-80 object-cover border-6 border-white"
          />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="carousel border border-purple-300 rounded-2xl shadow-lg overflow-hidden">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-100 object-cover"
              alt="Slide 1"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide3"
                className="btn btn-circle bg-white text-purple-600 shadow"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-white text-purple-600 shadow"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/5996762/pexels-photo-5996762.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-full h-100 object-cover"
              alt="Slide 2"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide1"
                className="btn btn-circle bg-white text-purple-600 shadow"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-white text-purple-600 shadow"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/7088498/pexels-photo-7088498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-100 object-cover"
              alt="Slide 3"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide2"
                className="btn btn-circle bg-white text-purple-600 shadow"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-white text-purple-600 shadow"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="max-w-7xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center hover:scale-105 transition">
            <img
              src="https://images.pexels.com/photos/7583382/pexels-photo-7583382.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Clinic"
              className="w-42 h-42 rounded-full mb-4 object-cover shadow"
            />
            <h3 className="text-2xl font-semibold text-purple-700 ">
              State-of-the-Art Clinic
            </h3>
            <p className="text-gray-600 text-center">
              Equipped with the latest dental technology for your comfort and
              safety.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center hover:scale-105 transition">
            <img
              src="https://images.pexels.com/photos/11661531/pexels-photo-11661531.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team"
              className="w-40 h-40 rounded-full mb-4 object-cover shadow"
            />
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Experienced Team
            </h3>
            <p className="text-gray-600 text-center">
              Our skilled dentists and hygienists provide personalized care for
              every patient.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center hover:scale-105 transition">
            <img
              src="https://images.pexels.com/photos/5327865/pexels-photo-5327865.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Care"
              className="w-40 h-40 rounded-full mb-4 object-cover shadow"
            />
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Comprehensive Care
            </h3>
            <p className="text-gray-600 text-center">
              From routine checkups to advanced procedures, we cover all your
              dental needs.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-10">
          What Our Patients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-purple-50 rounded-xl p-6 shadow flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Patient"
              className="w-16 h-16 rounded-full mb-3"
            />
            <p className="italic text-gray-700 text-center">
              "Absolutely the best dental experience I've ever had. The team is
              so caring and professional!"
            </p>
            <span className="mt-2 font-semibold text-purple-700">
              — Sarah K.
            </span>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Patient"
              className="w-16 h-16 rounded-full mb-3"
            />
            <p className="italic text-gray-700 text-center">
              "Modern clinic, friendly staff, and painless treatments. Highly
              recommended!"
            </p>
            <span className="mt-2 font-semibold text-purple-700">
              — John D.
            </span>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Patient"
              className="w-16 h-16 rounded-full mb-3"
            />
            <p className="italic text-gray-700 text-center">
              "They truly care about your smile. I felt comfortable and
              well-informed throughout."
            </p>
            <span className="mt-2 font-semibold text-purple-700">
              — Priya S.
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-3xl my-50   py-12 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center shadow-xl max-w-7xl">
        <h2 className="text-4xl font-bold mb-4">Ready for a Brighter Smile?</h2>
        <p className="text-lg mb-6">
          Book your appointment today and experience the DentoCare difference!
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:bg-purple-100 transition text-xl"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-100 via-purple-100 to-blue-100 min-h-screen">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          At DentoCare, we are committed to providing exceptional dental care
          with a focus on innovation, comfort, and trust. Our mission is to make
          every smile brighter and every visit stress-free.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mt-10 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency-systems-regular/48/welfare.png"
                alt="welfare"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Personalized Care
            </h3>
            <p className="text-gray-600">
              Every patient is unique, and so is our approach to their dental
              care.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/material-rounded/48/advanced-search.png"
                alt="welfare"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Advanced Technology
            </h3>
            <p className="text-gray-600">
              We use cutting-edge tools to ensure precision and comfort.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/?size=50&id=10094&format=png"
                alt="welfare"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Relaxing Environment
            </h3>
            <p className="text-gray-600">
              Our clinic is designed to make you feel at ease from the moment
              you walk in.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mxx-auto mt-20 px-6 mb-30">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">
          Meet Our Experts
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center space-x-6 bg-white rounded-xl shadow-lg p-6">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Dr. John Doe"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-purple-700">
                Dr. John Doe
              </h3>
              <p className="text-gray-600">
                Chief Dentist with 15+ years of experience in advanced dental
                procedures.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6 bg-white rounded-xl shadow-lg p-6">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Dr. Sarah Smith"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-purple-700">
                Dr. Sarah Smith
              </h3>
              <p className="text-gray-600">
                Specialist in pediatric dentistry and patient care excellence.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6 bg-white rounded-xl shadow-lg p-6">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Dr. John Doe"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-purple-700">
                Dr. John Doe
              </h3>
              <p className="text-gray-600">
                Chief Dentist with 15+ years of experience in advanced dental
                procedures.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6 bg-white rounded-xl shadow-lg p-6">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Dr. Sarah Smith"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-purple-700">
                Dr. Sarah Smith
              </h3>
              <p className="text-gray-600">
                Specialist in pediatric dentistry and patient care excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//A contact component
const Contact = () => {
  // const { userData } = useAuthContext();
  const [contact, setContact] = useState({
    userName: "",
    userEmail: "",
    userMsg: "",
  });

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    setContact({ ...contact, [fieldName]: value });
    console.log(contact.userName, contact.userEmail, contact.userMsg);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/contacts/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      const res_asJSON = await response.json();

      if (response.ok) {
        alert(`Haha, ${res_asJSON}!, \n Yeh Its Working`);
        console.log(`Haha, ${res_asJSON}!, \n Yeh Its Working`);
        setContact({ userName: "", userEmail: "", userMsg: "" });
      }
    } catch (error) {}
  };
  return (
    <>
      <section className="m-0 max-w-full min-w-fit bg-purple-100">
        <div className="min-h-screen m-0 flex max-w-full min-w-fit justify-start">
          <div className="flex m-0 bg-purple-200 max-w-[50%] min-w-[50%]">
            <img
              src="Images\register-form.png"
              className="max-sm:min-w-[50%] size-150"
              id="log-image"
            />
          </div>

          <div className="max-sm:min-w-[5%] w-120 p-2">
            <h1 className="flex justify-center font-black text-6xl text-purple-600 ">
              Contact Us
            </h1>
            <br />

            <form
              onSubmit={handleSubmit}
              className="mb-5 container py-4 bg-blue-100 flex-col border-purple-500 shadow-purple-600 shadow-md rounded-2xl"
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
                    name="userName"
                    placeholder={"Your Name "}
                    className="inputs mx-0"
                    onChange={handleInput}
                    value={contact.userName}
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
                    type="email"
                    name="userEmail"
                    placeholder={"Your Email "}
                    value={contact.userEmail}
                    className="inputs m-0"
                    onChange={handleInput}
                  />
                </div>

                <div className="container">
                  <label
                    htmlFor="message"
                    className="font-bold text-2xl text-purple-600 mt-0 min-w-fit mr-0"
                  >
                    Message :
                  </label>
                  <textarea
                    id="user-message"
                    name="userMsg"
                    type="text"
                    value={contact.userMsg}
                    placeholder="Your message here ..."
                    className=" border-purple-500 placeholder-purple-600 focus:outline-none focus:border-2 font-medium text-[1rem] text-purple-800 textarea m-0 textarea-primary bg-purple-50 h-50 w-70 "
                    onChange={handleInput}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-lg btn hover:bg-purple-900 rounded-full w-108 h-15 btn-primary bg-purple-600 my-6"
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
