import Modules from "../Modules/page";

export default function Home() {
  return (
    <div id="wd-home">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-secondary me-2">Collapse All</button>
        <button className="btn btn-secondary me-2">View Progress</button>
        <button className="btn btn-danger">+ Module</button>
      </div>
      
      <div className="row">
        <div className="col-8">
          <Modules />
        </div>
        <div className="col-4">
          <div id="wd-course-status" className="card">
            <div className="card-body">
              <h5 className="card-title">Course Status</h5>
              <button className="btn btn-outline-secondary me-2">Unpublish</button>
              <button className="btn btn-success">Publish</button>
              <hr />
              <button className="btn btn-outline-primary d-block mb-2">Import Existing Content</button>
              <button className="btn btn-outline-primary d-block mb-2">Import from Commons</button>
              <button className="btn btn-outline-primary d-block mb-2">Choose Home Page</button>
              <button className="btn btn-outline-primary d-block mb-2">View Course Stream</button>
              <button className="btn btn-outline-primary d-block mb-2">New Announcement</button>
              <button className="btn btn-outline-primary d-block">View Course Notifications</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
