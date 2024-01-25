import MountCalendar from '../../components/mountCalendar/mountCalendar';
import "./style.css";
import FleetSpecificationData from '../../data/fleetSpecificationData.json';

function Mount() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <MountCalendar />
          </div>
          <div className="col-6">
          <h1 className="--text-center">Mount Lift</h1>
          <p className="info">
          Experience efficiency and robustness with Mak-Lift's Truck Mount Lifts. These versatile lifts are mounted on trucks, providing mobility and accessibility for various applications. The key advantage lies in their ability to reach high locations quickly. If you prioritise efficiency and swift access, Truck Mount Lifts are the optimal choice. Alternatively, explore our Boom Lifts for extended outreach and versatility in reaching difficult areas. Choose Mak-Lift for lifting solutions that match your specific needs.
          </p>
            <p className="info">
              Max working height: {FleetSpecificationData[3].maxWorkingHeight}
            </p>
            <p className="info">
              Platform capacity: {FleetSpecificationData[3].platformCapacity}
            </p>
            <p className="info">
              Raised platform height: {FleetSpecificationData[3].raisedPlatformHeight}
            </p>
            <p className="info">
              Working outreach: {FleetSpecificationData[3].workingOutreach}
            </p>
            <p className="info">
              Width:  {FleetSpecificationData[3].windth}
            </p>
            <p className="info">
              Length: {FleetSpecificationData[3].length}
            </p>
            <p className="info">
              Weight: {FleetSpecificationData[3].weight}
            </p>
            <p className="info">
              Power source:  {FleetSpecificationData[3].powerSource}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mount;
