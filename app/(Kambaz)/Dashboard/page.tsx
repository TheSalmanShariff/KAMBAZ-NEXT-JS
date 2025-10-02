import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="container-fluid p-4">
      <h1 id="wd-dashboard-title" className="mb-3">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published" className="mb-3">Published Courses (6)</h2>
      <hr />
      
      <div id="wd-dashboard-courses" className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="wd-dashboard-course card h-100">
            <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none">
              <img src="/images/reactjs.png" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} alt="React Course" />
              <div className="card-body">
                <h5 className="card-title">CS1234 React JS</h5>
                <p className="wd-dashboard-course-title card-text">Full Stack software developer</p>
                <button className="btn btn-primary btn-sm">Go</button>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="wd-dashboard-course card h-100">
            <Link href="/Courses/1235" className="wd-dashboard-course-link text-decoration-none">
              <img src="/images/nodejs.jpg" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} alt="Node.js Course" />
              <div className="card-body">
                <h5 className="card-title">CS1235 Node.js</h5>
                <p className="wd-dashboard-course-title card-text">Backend Development with Node.js</p>
                <button className="btn btn-primary btn-sm">Go</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="wd-dashboard-course card h-100">
            <Link href="/Courses/1236" className="wd-dashboard-course-link text-decoration-none">
              <img src="/images/mongodb.png" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} alt="MongoDB Course" />
              <div className="card-body">
                <h5 className="card-title">CS1236 MongoDB</h5>
                <p className="wd-dashboard-course-title card-text">NoSQL Database Management</p>
                <button className="btn btn-primary btn-sm">Go</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="wd-dashboard-course card h-100">
            <Link href="/Courses/1237" className="wd-dashboard-course-link text-decoration-none">
              <img src="/images/html.png" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} alt="HTML Course" />
              <div className="card-body">
                <h5 className="card-title">CS1237 HTML/CSS</h5>
                <p className="wd-dashboard-course-title card-text">Web Fundamentals</p>
                <button className="btn btn-primary btn-sm">Go</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="wd-dashboard-course card h-100">
            <Link href="/Courses/1238" className="wd-dashboard-course-link text-decoration-none">
              <img src="/images/python.png" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} alt="Python Course" />
              <div className="card-body">
                <h5 className="card-title">CS1238 Python</h5>
                <p className="wd-dashboard-course-title card-text">Introduction to Python Programming</p>
                <button className="btn btn-primary btn-sm">Go</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="wd-dashboard-course card h-100">
            <Link href="/Courses/1239" className="wd-dashboard-course-link text-decoration-none">
              <img src="/images/java.png" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} alt="Java Course" />
              <div className="card-body">
                <h5 className="card-title">CS1239 Java</h5>
                <p className="wd-dashboard-course-title card-text">Object-Oriented Programming</p>
                <button className="btn btn-primary btn-sm">Go</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="wd-dashboard-course card h-100">
            <Link href="/Courses/1240" className="wd-dashboard-course-link text-decoration-none">
              <img src="/images/javascript.png" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} alt="JavaScript Course" />
              <div className="card-body">
                <h5 className="card-title">CS1240 JavaScript</h5>
                <p className="wd-dashboard-course-title card-text">Modern JavaScript Development</p>
                <button className="btn btn-primary btn-sm">Go</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
