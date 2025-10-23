"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { courses } from "../../Database";
import { FaAlignJustify } from "react-icons/fa6";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const pathname = usePathname();
  const course = courses.find((course) => course._id === cid);
  
  // Get the current page name from pathname
  const getPageName = () => {
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    
    // Map route segments to display names
    const pageNames: { [key: string]: string } = {
      'Home': 'Home',
      'Modules': 'Modules',
      'Assignments': 'Assignments',
      'Quizzes': 'Quizzes',
      'Grades': 'Grades',
      'People': 'People',
      'Piazza': 'Piazza',
      'Zoom': 'Zoom',
    };
    
    return pageNames[lastSegment] || lastSegment;
  };

  const currentPage = getPageName();

  return (
    <div id="wd-courses">
      <h2 className="text-danger d-flex align-items-center">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        <Link 
          href={`/Courses/${cid}`} 
          className="text-danger text-decoration-none hover-underline"
        >
          {course && course.name}
        </Link>
        <span className="mx-2">&gt;</span>
        <Link 
          href={pathname} 
          className="text-danger text-decoration-none hover-underline"
        >
          {currentPage}
        </Link>
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
