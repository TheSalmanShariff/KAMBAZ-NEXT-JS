'use client'

import { Table } from "react-bootstrap"
import { FaUserCircle } from "react-icons/fa"

export default function People() {
  const users = [
    {
      _id: "121",
      firstName: "Tony",
      lastName: "Stark",
      loginId: "001234561S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-10-01",
      totalActivity: "10:21:32",
    },
    {
      _id: "122",
      firstName: "Bruce",
      lastName: "Wayne",
      loginId: "001234562S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-10-02",
      totalActivity: "12:45:22",
    },
    {
      _id: "123",
      firstName: "Steve",
      lastName: "Rogers",
      loginId: "001234563S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-10-03",
      totalActivity: "8:15:47",
    },
        {
      _id: "129",
      firstName: "Salman",
      lastName: "Shariff",
      loginId: "001234534S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-10-02",
      totalActivity: "12:45:22",
    },
        {
      _id: "1",
      firstName: "Jose",
      lastName: "Annuzio",
      loginId: "001234569S",
      section: "S101",
      role: "FACULTY",
      lastActivity: "2020-10-02",
      totalActivity: "12:45:22",
    },
  ]

  return (
    <div id="wd-people-table">
      {/* Renders as shown - Table format from textbook page 76-77 */}
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}