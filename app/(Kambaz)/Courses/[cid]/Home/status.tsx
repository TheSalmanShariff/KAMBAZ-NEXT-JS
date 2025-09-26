export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="card">
      <div className="card-body">
        <h5 className="card-title">Course Status</h5>
        <div className="d-grid gap-2">
          <button className="btn btn-outline-secondary">Unpublish</button>
          <button className="btn btn-success">Publish</button>
          <hr />
          <button className="btn btn-outline-primary">Import Existing Content</button>
          <button className="btn btn-outline-primary">Import from Commons</button>
          <button className="btn btn-outline-primary">Choose Home Page</button>
          <button className="btn btn-outline-primary">View Course Stream</button>
          <button className="btn btn-outline-primary">New Announcement</button>
          <button className="btn btn-outline-primary">New Analytics</button>
          <button className="btn btn-outline-primary">View Course Notifications</button>
        </div>
      </div>
    </div>
  );
}
