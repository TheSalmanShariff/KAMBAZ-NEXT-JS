import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs" className="container mt-4">
      <h1 className="mb-4 text-center">Lab Exercises and Kambaz</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Salman Shariff - Full Stack Web Development - Section 5</h5>
          <p className="card-text">Navigate to different lab exercises and the Kambaz application</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h3>Lab Assignments</h3>
        <div className="list-group">
          <Link href="/Labs/Lab1" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="wd-lab1-link">
            Lab 1: HTML Examples
            <span className="badge bg-primary rounded-pill">HTML</span>
          </Link>
          <Link href="/Labs/Lab2" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="wd-lab2-link">
            Lab 2: CSS Basics
            <span className="badge bg-success rounded-pill">CSS</span>
          </Link>
          <Link href="/Labs/Lab3" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
            <span className="badge bg-warning rounded-pill">JS</span>
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <h3>Application & Repository</h3>
        <div className="list-group">
          <Link href="/" className="list-group-item list-group-item-action list-group-item-info" id="wd-kambaz-link">
            Kambaz Learning Management System
          </Link>
          <a href="https://github.com/TheSalmanShariff/KAMBAZ-NEXT-JS" 
             className="list-group-item list-group-item-action list-group-item-dark" 
             id="wd-github"
             target="_blank"
             rel="noopener noreferrer">
            My GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}