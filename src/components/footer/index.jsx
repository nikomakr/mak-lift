import React from 'react';
import logo from '../../images/logoMak-Lift.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text center" style={{backgroundColor: "#0F0202"}}>

      {/* main footer */}
      <hr className="my-10"/>  
    <div className="container">
      <div className="row">

        {/* Column 1 for logo */}
      <div className="col-md-3 col-sm-6">
      <img src={logo} alt="Logo" />
      </div>

      {/* Column 2 for Head office address and contact */}
        <div className="col-md-3 col-sm-6">
      <h4><i className="bi bi-geo-alt"/>   Head Office:</h4>
      <p>Makridis, Egnatia 51, Giannitsa, 58100, Greece.</p>
      <h5> <i className='bi bi-telephone-outbound-fill'/>   Customer Support:</h5>
      <p>(+30)2382025708</p>
      </div>

      {/* Column 3 for depot address and contact */}
      <div className="col-md-3 col-sm-6">
      <h4><i className="bi bi-geo-alt"/>   Depot:</h4>
      <p>Egnatia 100, Giannitsa, 58100,Greece.</p>
      <h5><i className='bi bi-telephone-outbound-fill'/>   Urgent Calls at: </h5>
      <p>(+30)6976922299 </p>
      </div>

      {/* Column 4 for socials */}
      <div className="col-md-3 col-sm-6">
      <h5><i className="bi bi-envelope-fill"/>    E-mail:</h5>
      <p>
       info@mak-lift.gr
      </p>
      </div>
      </div>

      <hr className="my-15"/>


    </div>
    </footer>
  );
}

export default Footer; 