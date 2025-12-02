import { FiSearch, FiCheckCircle, FiClock, FiFileText } from 'react-icons/fi'

function TeacherGrading() {
  const pendingSubmissions = [
    {
      id: 1,
      student: 'Nguyen Van A',
      studentId: 'SE160001',
      assignment: 'Database Design Project',
      course: 'DBS202',
      submittedAt: '2024-05-10 14:30',
      dueDate: '2024-05-10 23:59',
      status: 'On Time'
    },
    {
      id: 2,
      student: 'Tran Thi B',
      studentId: 'SE160002',
      assignment: 'React Component Assignment',
      course: 'WEB301',
      submittedAt: '2024-05-11 08:15',
      dueDate: '2024-05-10 23:59',
      status: 'Late'
    },
    {
      id: 3,
      student: 'Le Van C',
      studentId: 'SE160003',
      assignment: 'Software Requirements Document',
      course: 'SWE101',
      submittedAt: '2024-05-09 20:45',
      dueDate: '2024-05-10 23:59',
      status: 'On Time'
    },
    {
      id: 4,
      student: 'Pham Thi D',
      studentId: 'SE160004',
      assignment: 'Mobile UI Design',
      course: 'MAD401',
      submittedAt: '2024-05-10 22:00',
      dueDate: '2024-05-10 23:59',
      status: 'On Time'
    }
  ]

  const gradedSubmissions = [
    {
      id: 5,
      student: 'Hoang Van E',
      assignment: 'Midterm Exam',
      course: 'DBS202',
      gradedAt: '2024-05-08',
      score: 85,
      maxScore: 100
    },
    {
      id: 6,
      student: 'Vo Thi F',
      assignment: 'Lab Report 3',
      course: 'SWE101',
      gradedAt: '2024-05-07',
      score: 92,
      maxScore: 100
    }
  ]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>Grading</h1>
          <p>Review and grade student submissions.</p>
        </div>
        <div className="search-bar">
          <FiSearch />
          <input type="text" placeholder="Search submissions..." />
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">{pendingSubmissions.length}</div>
              <div className="stat-label">Pending Grading</div>
            </div>
            <div className="stat-icon orange">
              <FiClock />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">{gradedSubmissions.length}</div>
              <div className="stat-label">Graded Today</div>
            </div>
            <div className="stat-icon green">
              <FiCheckCircle />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">156</div>
              <div className="stat-label">Total This Week</div>
            </div>
            <div className="stat-icon blue">
              <FiFileText />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">2.5h</div>
              <div className="stat-label">Avg. Grading Time</div>
            </div>
            <div className="stat-icon purple">
              <FiClock />
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2>Pending Submissions</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '8px 16px' }}>
              All Courses
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '8px 16px' }}>
              Sort by Date
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Student</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Assignment</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Course</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Submitted</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingSubmissions.map(submission => (
                <tr key={submission.id} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                  <td style={{ padding: '16px' }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{submission.student}</div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{submission.studentId}</div>
                  </td>
                  <td style={{ padding: '16px', fontSize: '14px', color: 'var(--gray-900)' }}>{submission.assignment}</td>
                  <td style={{ padding: '16px' }}>
                    <span className="badge badge-info">{submission.course}</span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '13px', color: 'var(--gray-600)' }}>
                    {new Date(submission.submittedAt).toLocaleString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <span className={`badge ${submission.status === 'On Time' ? 'badge-success' : 'badge-warning'}`}>
                      {submission.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <button className="btn btn-primary" style={{ fontSize: '13px', padding: '6px 16px' }}>
                      Grade Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2>Recently Graded</h2>
          <a href="#">View All</a>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Student</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Assignment</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Course</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Graded Date</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Score</th>
              </tr>
            </thead>
            <tbody>
              {gradedSubmissions.map(submission => (
                <tr key={submission.id} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{submission.student}</td>
                  <td style={{ padding: '16px', fontSize: '14px', color: 'var(--gray-900)' }}>{submission.assignment}</td>
                  <td style={{ padding: '16px' }}>
                    <span className="badge badge-info">{submission.course}</span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '13px', color: 'var(--gray-600)' }}>
                    {new Date(submission.gradedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '16px', fontWeight: '600', color: 'var(--fpt-orange)' }}>
                    {submission.score}/{submission.maxScore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TeacherGrading
