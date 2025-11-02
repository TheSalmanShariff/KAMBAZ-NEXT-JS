"use client";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaTrash, FaPencil } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { addAssignment, deleteAssignment } from "./reducer";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";

export default function Assignments() {
  const params = useParams();
  const courseId = params?.cid ? String(params.cid) : "";
  
  const dispatch = useDispatch();
  const assignmentsState = useSelector((state: any) => state.assignmentsReducer);
  const allAssignments = assignmentsState?.assignments || [];

  const createAssignment = () => {
    console.log("Creating assignment for course:", courseId);
    const newAssignment = {
      _id: uuidv4(),
      title: "New Assignment",
      course: courseId,
      description: "New Assignment Description",
      points: 100,
      dueDate: "2024-05-13",
      availableFromDate: "2024-05-06",
      availableUntilDate: "2024-05-20",
    };
    dispatch(addAssignment(newAssignment));
  };

  const removeAssignment = (assignmentId: string) => {
    console.log("Deleting assignment:", assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const courseAssignments = allAssignments.filter(
    (assignment: any) => assignment.course === courseId
  );

  console.log("Course ID:", courseId);
  console.log("All assignments:", allAssignments);
  console.log("Filtered assignments:", courseAssignments);

  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          placeholder="Search for Assignments"
          id="wd-search-assignment"
          className="form-control w-50"
        />
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            + Group
          </button>
          <button
            id="wd-add-assignment"
            className="btn btn-danger"
            onClick={createAssignment}
          >
            <FaPlus className="me-2" />
            Assignment
          </button>
        </div>
      </div>

      <h3 id="wd-assignments-title" className="border-bottom border-secondary pb-2">
        ASSIGNMENTS 40% of Total <Button variant="link">+</Button>
      </h3>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        {courseAssignments.length === 0 && (
          <li className="list-group-item text-muted">
            No assignments found for this course.
          </li>
        )}
        {courseAssignments.map((assignment: any) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item list-group-item p-3 ps-1 border-start border-success border-3"
          >
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href={`/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  {assignment.title}
                </Link>
                <div className="text-muted small mt-1">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> {assignment.availableFromDate} |{" "}
                  <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
                </div>
              </div>
              <div>
                <Link href={`/Courses/${courseId}/Assignments/${assignment._id}`}>
                  <FaPencil className="text-primary me-3" style={{ cursor: "pointer" }} />
                </Link>
                <FaTrash
                  className="text-danger"
                  onClick={() => removeAssignment(assignment._id)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}