import Link from "next/link";
import TOC from "./TOC";

export default function Labs() {
  return (
    <div id="wd-labs" className="container">
      <h1>Labs</h1>
      <p>Salman Shariff - Full stack Web Development</p> {/* Replace with your full name */}
      <TOC />
      <ul className="list-group mt-3">
        <li className="list-group-item">
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/Labs/Lab4" id="wd-lab4-link">
            Lab 4: State Management
          </Link>
        </li>
         <li>
          <Link href="https://github.com/TheSalmanShariff/KAMBAZ-NEXT-JS" id="wd-github">
            My GitHub Repository
          </Link>
        </li>
      </ul>
    </div>
  );
}
