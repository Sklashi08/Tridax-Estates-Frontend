import "./Services.css";
import sales from "../assets/img/Tridax1.jpeg";
import management from "../assets/img/Tridax2.jpeg";
import advisory from "../assets/img/Tridax3.jpeg";

function Services() {
  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <h2>Our Services</h2>

        <div className="cards">
         
         
         <div className="card">
<img src={sales} alt="" />

<div className="card-body">

<h3>Property Sales</h3>

<p>
Residential and commercial property sales with market insights.
</p>

</div>

 </div>

          <div className="card">
            <img src={management} alt="" />

            <div className="card-body">
              <h3>Property Management</h3>

              <p>Efficient management services for landlords and investors.</p>
            </div>
          </div>

          <div className="card">
            <img src={advisory} alt="" />

            <div className="card-body">
              <h3>Investment Advisory</h3>

              <p>Portfolio analysis and opportunity scouting.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
