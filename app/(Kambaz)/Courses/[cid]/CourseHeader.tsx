"use client";
import { usePathname } from "next/navigation";

interface CourseHeaderProps {
  courseName: string;
  courseId: string;
}

export default function CourseHeader({ courseName, courseId }: CourseHeaderProps) {
  const pathname = usePathname();
  
  // Extract the current page from the pathname
  const segments = pathname.split('/').filter(Boolean);
  const currentPage = segments[segments.length - 1];
  
  // Map route segments to display names
  const getPageDisplayName = (segment: string): string => {
    const pageNames: { [key: string]: string } = {
      'Home': 'Home',
      'Modules': 'Modules',
      'Assignments': 'Assignments',
      'Quizzes': 'Quizzes',
      'Grades': 'Grades',
      'People': 'People',
      'Piazza': 'Piazza',
      'Zoom': 'Zoom',
      [courseId]: courseName,
    };
    
    return pageNames[segment] || segment;
  };

  const displayName = getPageDisplayName(currentPage);

  return (
    <div className="bg-white border-b-2 border-gray-200 px-6 py-4">
      <div className="flex items-center gap-3">
        <button className="text-red-600 text-2xl hover:bg-gray-100 p-1 rounded">
          ☰
        </button>
        <h1 className="text-2xl text-red-600 font-normal">
          {courseName} &gt; {displayName}
        </h1>
      </div>
    </div>
  );
}