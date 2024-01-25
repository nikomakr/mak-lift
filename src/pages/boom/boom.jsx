import BoomCalendar from '../../components/boomCalendar/boomCalendar';
import "./style.css";
import FleetSpecificationData from '../../data/fleetSpecificationData.json';

function Boom() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <BoomCalendar />
          </div>
          <div className="col-6">
          <h1 className="--text-center">Boom Lift</h1>
          <p className="info">
              Experience unmatched versatility with Mak-Lift's Boom Lifts. These aerial workhorses offer exceptional reach and flexibility, making them ideal for construction and maintenance tasks at height. The key advantage lies in their extended outreach, allowing you to access difficult areas with precision. If you seek unparalleled height and reach, our Boom Lifts are the perfect choice. For alternative needs, explore our Scissors Lifts, known for stable elevation and adaptability.
            </p>
            <p className="info">
              Max working height: {FleetSpecificationData[0].maxWorkingHeight}
            </p>
            <p className="info">
              Platform capacity: {FleetSpecificationData[0].platformCapacity}
            </p>
            <p className="info">
              Raised platform height: {FleetSpecificationData[0].raisedPlatformHeight}
            </p>
            <p className="info">
              Working outreach: {FleetSpecificationData[0].workingOutreach}
            </p>
            <p className="info">
              Width:  {FleetSpecificationData[0].windth}
            </p>
            <p className="info">
              Length: {FleetSpecificationData[0].length}
            </p>
            <p className="info">
              Weight: {FleetSpecificationData[0].weight}
            </p>
            <p className="info">
              Power source:  {FleetSpecificationData[0].powerSource}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Boom;
