

import styles from "./styles.module.css";

export default function Grades() {
  const grades = [
    { name: "A1", category: "ASSIGNMENTS", dueDate: "17 Sep by 23:59", submitted: "17 Sep at 18:24", status: "", score: "-", hasComment: true },
    { name: "Q1", category: "QUIZZES", dueDate: "24 Sep by 23:59", submitted: "20 Sep at 17:32", status: "", score: "-", hasComment: true },
    { name: "A2", category: "ASSIGNMENTS", dueDate: "1 Oct by 23:59", submitted: "", status: "", score: "-" },
    { name: "Q2", category: "QUIZZES", dueDate: "1 Oct by 23:59", submitted: "25 Sep at 16:18", status: "", score: "-", hasComment: true },
    { name: "Q3", category: "QUIZZES", dueDate: "8 Oct by 23:59", submitted: "", status: "", score: "- / 32" },
    { name: "A3", category: "ASSIGNMENTS", dueDate: "15 Oct by 23:59", submitted: "", status: "", score: "-" },
    { name: "Q4", category: "QUIZZES", dueDate: "15 Oct by 23:59", submitted: "", status: "", score: "- / 17" },
    { name: "Q5", category: "QUIZZES", dueDate: "22 Oct by 23:59", submitted: "", status: "", score: "- / 31" },
    { name: "A4", category: "ASSIGNMENTS", dueDate: "29 Oct by 23:59", submitted: "", status: "", score: "-" },
  ];

  const weightGroups = [
    { group: "ASSIGNMENTS", weight: "40%" },
    { group: "QUIZZES", weight: "10%" },
    { group: "EXAMS", weight: "20%" },
    { group: "PROJECT", weight: "30%" },
    { group: "Total", weight: "100%" },
  ];

  return (
    <div className={styles.gradesContainer}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Grades for . Salman Shariff</h1>
        <button className={styles.printBtn}>🖨️ Print Grades</button>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Course</label>
          <select className={styles.filterSelect}>
            <option>CS5610 19730 Web Devel</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Arrange by</label>
          <select className={styles.filterSelect}>
            <option>Due date</option>
            <option>Assignment name</option>
            <option>Module</option>
          </select>
        </div>
        <button className={styles.applyBtn}>Apply</button>
      </div>

      {/* Main Content with Sidebar */}
      <div className={styles.mainContent}>
        {/* Grades Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.gradesTable}>
            <thead>
              <tr>
                <th className={styles.thName}>Name</th>
                <th className={styles.thDue}>Due</th>
                <th className={styles.thSubmitted}>Submitted</th>
                <th className={styles.thStatus}>Status</th>
                <th className={styles.thScore}>Score</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td className={styles.tdName}>
                    <div className={styles.assignmentName}>
                      <a href="#" className={styles.assignmentLink}>{grade.name}</a>
                    </div>
                    <div className={styles.assignmentCategory}>{grade.category}</div>
                  </td>
                  <td className={styles.tdDue}>{grade.dueDate}</td>
                  <td className={styles.tdSubmitted}>{grade.submitted || '-'}</td>
                  <td className={styles.tdStatus}>{grade.status}</td>
                  <td className={styles.tdScore}>
                    <div className={styles.scoreWrapper}>
                      {grade.score}
                      <div className={styles.scoreIcons}>
                        {grade.hasComment && (
                          <span className={styles.icon}>💬</span>
                        )}
                        {grade.hasRubric && (
                          <span className={styles.icon}>📊</span>
                        )}
                        {grade.hasSubmission && (
                          <span className={styles.iconWithBadge}>
                            <span className={styles.icon}>📎</span>
                            <span className={styles.badge}>{grade.hasSubmission}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.totalScore}>
              <div className={styles.totalLabel}>Total: 100%</div>
            </div>

            <div className={styles.sidebarSection}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} />
                Show saved 'what-if' scores
              </label>
            </div>

            <div className={styles.sidebarSection}>
              <button className={styles.showDetailsBtn}>Show all details</button>
            </div>

            <div className={styles.weightSection}>
              <h3 className={styles.weightTitle}>Assignments are weighted by group:</h3>
              <table className={styles.weightTable}>
                <thead>
                  <tr>
                    <th>Group</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {weightGroups.map((group, index) => (
                    <tr key={index} className={group.group === "Total" ? styles.totalRow : ''}>
                      <td>{group.group}</td>
                      <td>{group.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.infoText}>
              <p>You can view your grades based on What-if scores so that you know how grades will be affected by upcoming, or resubmitted assignments. You can test scores for an assignment that already includes a score, or an assignment that has yet to be graded.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}