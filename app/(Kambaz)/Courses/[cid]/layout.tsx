"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { courses } from "../../Database";
import { FaAlignJustify } from "react-icons/fa6";
import { usePathname, useParams } from "next/navigation";

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
    
    // Return the mapped name or the segment itself
    return pageNames[lastSegment] || lastSegment;
  };

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course && course.name} &gt; {getPageName()}
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
