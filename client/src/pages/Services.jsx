import { useAuthContext } from "../store/contextsAndEffects_provider";
import("./services.css");

export const Services = () => {
  const { services } = useAuthContext();
  console.log("Services from context:", services);

  return (
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
