import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          placeholder="Search for Assignments"
          id="wd-search-assignment"
          className="form-control me-3"
          style={{ maxWidth: '300px' }}
        />
        <div>
          <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-2">
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            + Assignment
          </button>
        </div>
      </div>
      
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 id="wd-assignments-title" className="mb-0">
            ASSIGNMENTS 40% of Total
          </h3>
          <button className="btn btn-outline-secondary btn-sm">+</button>
        </div>
        <ul id="wd-assignment-list" className="list-group list-group-flush">
          <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-start">
            <div className="border-start border-4 border-success ps-3">
              <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none fw-bold">
                A1 - ENV + HTML
              </Link>
              <br />
              <small className="text-muted">
                Multiple Modules | Not available until May 6 at 12:00am |<br />
                Due May 13 at 11:59pm | 100 pts
              </small>
            </div>
            <button className="btn btn-sm btn-outline-secondary">Edit</button>
          </li>
          <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-start">
            <div className="border-start border-4 border-success ps-3">
              <Link href="/Courses/1234/Assignments/124" className="wd-assignment-link text-decoration-none fw-bold">
                A2 - CSS + BOOTSTRAP
              </Link>
              <br />
              <small className="text-muted">
                Multiple Modules | Not available until May 13 at 12:00am |<br />
                Due May 20 at 11:59pm | 100 pts
              </small>
            </div>
            <button className="btn btn-sm btn-outline-secondary">Edit</button>
          </li>
          <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-start">
            <div className="border-start border-4 border-success ps-3">
              <Link href="/Courses/1234/Assignments/125" className="wd-assignment-link text-decoration-none fw-bold">
                A3 - JAVASCRIPT + REACT
              </Link>
              <br />
              <small className="text-muted">
                Multiple Modules | Not available until May 20 at 12:00am |<br />
                Due May 27 at 11:59pm | 100 pts
              </small>
            </div>
            <button className="btn btn-sm btn-outline-secondary">Edit</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
