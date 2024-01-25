import ScissorsCalendar from '../../components/scissorsCalendar/scissorsCalendar';
import "./style.css";
import FleetSpecificationData from '../../data/fleetSpecificationData.json';

function Scissors() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <ScissorsCalendar />
          </div>
          <div className="col-6">
          <h1 className="--text-center">Scissors Lift</h1>
          <p className="info">
          Discover stability and adaptability with Mak-Lift's Scissors Lifts. These robust platforms are designed for secure vertical elevation, providing a stable and spacious workspace. The key advantage lies in their reliability for elevated tasks with a larger working area. If stability and a broad working surface are your priorities, Scissors Lifts are the optimal choice. Alternatively, explore our Tracked Spider Lifts, offering exceptional manoeuvrability and access on challenging terrains.
          </p>
            <p className="info">
              Max working height: {FleetSpecificationData[1].maxWorkingHeight}
            </p>
            <p className="info">
              Platform capacity: {FleetSpecificationData[1].platformCapacity}
            </p>
            <p className="info">
              Raised platform height: {FleetSpecificationData[1].raisedPlatformHeight}
            </p>
            <p className="info">
              Working outreach: {FleetSpecificationData[1].workingOutreach}
            </p>
            <p className="info">
              Width:  {FleetSpecificationData[1].windth}
            </p>
            <p className="info">
              Length: {FleetSpecificationData[1].length}
            </p>
            <p className="info">
              Weight: {FleetSpecificationData[1].weight}
            </p>
            <p className="info">
              Power source:  {FleetSpecificationData[1].powerSource}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scissors;
