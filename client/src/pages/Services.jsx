import { useAuthContext } from "../store/contextsAndEffects_provider";
import("./services.css");

export const Services = () => {
  const { services } = useAuthContext();
  console.log("Services from context:", services);

  return (
    //Here the section is the one top level element
    //Alternatively, you can use a "fragment" i.e <></> to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.

    <section className="services-section">
      <div className="services-container">
        <h1 id="services-h1">Services</h1>
        <div className="services-catalouge">
          {services.map((currentServ, index) => {
            const { service, description, price, provider } = currentServ;
            return (
              <div className="service-card" key={index}>
                <div className="service-img">
                  <img src="Images/register-form.png" alt="" id="s-img" />
                </div>
                <div className="s-details">
                  <h2>{service}</h2>
                  <p>{description}</p>
                  <p>{provider}</p>
                  <h3>{price}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

//To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead source https://www.w3schools.com/react/react_jsx.asp
