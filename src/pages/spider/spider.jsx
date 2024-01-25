import SpiderCalendar from '../../components/spiderCalendar/spiderCalendar';
import "./style.css";
import FleetSpecificationData from '../../data/fleetSpecificationData.json';

function Spider() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <SpiderCalendar />
          </div>
          <div className="col-6">
          <h1 className="--text-center">Spider Lift</h1>
          <p className="info">
          Conquer challenging terrains with Mak-Lift's Tracked Spider Lifts. These agile and compact lifts are designed for exceptional manoeuvrability, making them perfect for indoor and outdoor tasks on uneven surfaces. The key advantage is their ability to navigate tight spaces with ease. If you require unmatched manoeuvrability and access on difficult terrains, Tracked Spider Lifts are the ideal solution. Alternatively, explore our Truck Mount Lifts for robustness and efficiency in various work environments.
          </p>
            <p className="info">
              Max working height: {FleetSpecificationData[2].maxWorkingHeight}
            </p>
            <p className="info">
              Platform capacity: {FleetSpecificationData[2].platformCapacity}
            </p>
            <p className="info">
              Raised platform height: {FleetSpecificationData[2].raisedPlatformHeight}
            </p>
            <p className="info">
              Working outreach: {FleetSpecificationData[2].workingOutreach}
            </p>
            <p className="info">
              Width:  {FleetSpecificationData[2].windth}
            </p>
            <p className="info">
              Length: {FleetSpecificationData[2].length}
            </p>
            <p className="info">
              Weight: {FleetSpecificationData[2].weight}
            </p>
            <p className="info">
              Power source:  {FleetSpecificationData[2].powerSource}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spider;
