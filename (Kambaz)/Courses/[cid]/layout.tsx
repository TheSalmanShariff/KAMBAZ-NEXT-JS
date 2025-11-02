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
  
  // Build breadcrumb path
  const getBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean);
    // segments example: ['Courses', 'RS101', 'Assignments', 'A101']
    
    const breadcrumbs = [];
    
    // Start from index 2 (skip 'Courses' and course ID)
    for (let i = 2; i < segments.length; i++) {
      const segment = segments[i];
      const path = '/' + segments.slice(0, i + 1).join('/');
      
      // Map segment names to display names
      const displayNames: { [key: string]: string } = {
        'Home': 'Home',
        'Modules': 'Modules',
        'Assignments': 'Assignments',
        'Quizzes': 'Quizzes',
        'Grades': 'Grades',
        'People': 'People',
        'Piazza': 'Piazza',
        'Zoom': 'Zoom',
      };
      
      breadcrumbs.push({
        name: displayNames[segment] || segment,
        path: path,
        isLast: i === segments.length - 1
      });
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div id="wd-courses">
      <h2 className="text-danger d-flex align-items-center">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        <Link 
          href={`/Courses/${cid}`} 
          className="text-danger text-decoration-none"
          style={{ cursor: 'pointer' }}
        >
          {course && course.name}
        </Link>
        
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            <span className="mx-2">&gt;</span>
            {crumb.isLast ? (
              <span>{crumb.name}</span>
            ) : (
              <Link 
                href={crumb.path} 
                className="text-danger text-decoration-none"
                style={{ cursor: 'pointer' }}
              >
                {crumb.name}
              </Link>
            )}
          </span>
        ))}
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