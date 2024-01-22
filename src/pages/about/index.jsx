import "./style.css";
import Image from "../../components/Image";


export default function aboutUs () {
  return (
<>
<div className=" hart text-white rounded ">
  <h1 className="p-5 text-bold">About Us</h1>
  <p>Lorem ipsum...</p>
</div>

<section>
            <div className="container">
               
                <div className="row">
                    <div className="col-6">
                        <Image/>

                    </div>
                    <div className="col-6">
                    <h1 className="--text-center">About Us</h1>
                    
                    <p>Welcome to G Makridis Lifting Solutions, operating under the brand name Mak-Lift, your go-to source for cutting-edge lifting machines. As a leading provider in the lifting equipment industry, we specialise in Boom Lifts, Scissors Lifts, Tracked Spider Lifts, and Truck Mount Lifts. Whether you're seeking reliable aerial work platforms, versatile scissor lifts, or powerful truck-mounted options, Mak-Lift has you covered. Our commitment to quality and customer satisfaction sets us apart. Elevate your operations with our top-notch lifting solutions. Trust Mak-Lift for all your industrial lifting needs, delivering excellence and reliability every time. Explore our diverse fleet and lift your business to new heights.</p>
                 </div>
                </div>
              </div>
        </section>       
       </>
  )
}
