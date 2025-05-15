import { useAuthContext } from "../store/contextsAndEffects_provider";

export const Services = () => {
  const { services } = useAuthContext();

  return (
    <section className="w-full bg-gradient-to-br from-blue-100 via-purple-100 to-blue-100 min-h-screen py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of dental services designed to meet all your
          oral health needs. From routine checkups to advanced procedures, we
          have you covered.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6">
        {services.map((currentServ, index) => {
          const { service, description, price, provider } = currentServ;
          return (
            <div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:border-2 hover:border-purple-500  transition-shadow duration-300"
              key={index}
            >
              <div className="mb-4">
                <img
                  src="Images/register-form.png"
                  alt={service}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                {service}
              </h2>
              <p className="text-gray-600 mb-4">{description}</p>
              <p className="text-sm text-gray-500 mb-2">Provider: {provider}</p>
              <h3 className="text-xl font-bold text-blue-600">{price}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}; //To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead source https://www.w3schools.com/react/react_jsx.asp
