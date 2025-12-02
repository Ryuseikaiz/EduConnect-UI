import { FiArrowLeft, FiUsers, FiCalendar, FiFileText, FiBarChart, FiPlus } from 'react-icons/fi'

function ClassDetails({ classItem, onBack }) {
  const students = [
    { id: 1, name: 'Nguyen Van A', email: 'a.nguyen@fpt.edu.vn', attendance: 95, grade: 88 },
    { id: 2, name: 'Tran Thi B', email: 'b.tran@fpt.edu.vn', attendance: 92, grade: 85 },
    { id: 3, name: 'Le Van C', email: 'c.le@fpt.edu.vn', attendance: 88, grade: 90 },
    { id: 4, name: 'Pham Thi D', email: 'd.pham@fpt.edu.vn', attendance: 90, grade: 87 }
  ]

  const assignments = [
    { id: 1, title: 'Assignment 1: Requirements', submitted: 42, total: 45, avgGrade: 85 },
    { id: 2, title: 'Assignment 2: Design Patterns', submitted: 38, total: 45, avgGrade: 82 },
    { id: 3, title: 'Midterm Project', submitted: 45, total: 45, avgGrade: 88 }
  ]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <button onClick={onBack} className="btn btn-secondary" style={{ marginBottom: '12px' }}>
            <FiArrowLeft size={16} /> Back to Classes
          </button>
          <h1>{classItem?.name || 'Software Engineering'}</h1>
          <p>{classItem?.code || 'SWE101'} - {classItem?.section || 'Section A'}</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-primary">
            <FiPlus size={16} /> Create Assignment
          </button>
          <button className="btn btn-secondary">Post Announcement</button>
        </div>
      </div>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">{classItem?.students || 45}</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-icon orange">
              <FiUsers />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">{classItem?.attendance || 92}%</div>
              <div className="stat-label">Avg. Attendance</div>
            </div>
            <div className="stat-icon green">
              <FiCalendar />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">{classItem?.avgGrade || 84}</div>
              <div className="stat-label">Avg. Grade</div>
            </div>
            <div className="stat-icon blue">
              <FiBarChart />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">12</div>
              <div className="stat-label">Assignments</div>
            </div>
            <div className="stat-icon purple">
              <FiFileText />
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-main">
          {/* Student Roster */}
          <div className="section">
            <div className="section-header">
              <h2>Student Roster</h2>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600' }}>Name</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600' }}>Email</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600' }}>Attendance</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600' }}>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                      <td style={{ padding: '16px', fontSize: '14px', fontWeight: '500' }}>{student.name}</td>
                      <td style={{ padding: '16px', fontSize: '13px', color: 'var(--gray-600)' }}>{student.email}</td>
                      <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: '600', color: 'var(--success)' }}>{student.attendance}%</td>
                      <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: '600', color: 'var(--fpt-orange)' }}>{student.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Assignments */}
          <div className="section">
            <div className="section-header">
              <h2>Assignments</h2>
            </div>
            {assignments.map(assignment => (
              <div key={assignment.id} className="card" style={{ padding: '20px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>{assignment.title}</h3>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--gray-600)' }}>
                      <span>Submitted: {assignment.submitted}/{assignment.total}</span>
                      <span>Avg. Grade: {assignment.avgGrade}</span>
                    </div>
                  </div>
                  <button className="btn btn-secondary">View Submissions</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-sidebar">
          {/* Quick Actions */}
          <div className="section">
            <div className="section-header">
              <h2>Quick Actions</h2>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', marginBottom: '8px' }}>
              Take Attendance
            </button>
            <button className="btn btn-secondary" style={{ width: '100%', marginBottom: '8px' }}>
              Grade Assignments
            </button>
            <button className="btn btn-secondary" style={{ width: '100%' }}>
              View Analytics
            </button>
          </div>

          {/* Class Info */}
          <div className="section">
            <div className="section-header">
              <h2>Class Info</h2>
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '12px' }}>
                <strong>Schedule:</strong><br />
                {classItem?.schedule || 'Mon, Wed 8:00 AM'}
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Room:</strong><br />
                {classItem?.room || 'Room 301'}
              </div>
              <div>
                <strong>Semester:</strong><br />
                Fall 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClassDetails
