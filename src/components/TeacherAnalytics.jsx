import { FiTrendingUp, FiUsers, FiAward, FiActivity } from 'react-icons/fi'

function TeacherAnalytics() {
  const performanceData = [
    { course: 'SWE101', avgGrade: 84, passRate: 92, attendance: 88 },
    { course: 'DBS202', avgGrade: 79, passRate: 85, attendance: 90 },
    { course: 'WEB301', avgGrade: 87, passRate: 95, attendance: 93 }
  ]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>Analytics</h1>
          <p>Track student performance and course statistics.</p>
        </div>
        <button className="btn btn-primary">Export Report</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">83</div>
              <div className="stat-label">Overall Avg. Grade</div>
            </div>
            <div className="stat-icon orange">
              <FiTrendingUp />
            </div>
          </div>
          <div className="stat-change positive">+5% from last semester</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">91%</div>
              <div className="stat-label">Pass Rate</div>
            </div>
            <div className="stat-icon green">
              <FiAward />
            </div>
          </div>
          <div className="stat-change positive">+3% from last semester</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">90%</div>
              <div className="stat-label">Attendance Rate</div>
            </div>
            <div className="stat-icon blue">
              <FiUsers />
            </div>
          </div>
          <div className="stat-change positive">+2% from last semester</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">125</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-icon purple">
              <FiActivity />
            </div>
          </div>
          <div className="stat-change positive">Across 3 courses</div>
        </div>
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2>Course Performance Overview</h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Course</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Avg. Grade</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Pass Rate</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Attendance</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Performance</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map(course => (
                <tr key={course.course} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                  <td style={{ padding: '16px' }}>
                    <span className="badge badge-info">{course.course}</span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '16px', fontWeight: '600', color: 'var(--fpt-orange)' }}>
                    {course.avgGrade}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: '500', color: 'var(--success)' }}>
                    {course.passRate}%
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: '500', color: 'var(--info)' }}>
                    {course.attendance}%
                  </td>
                  <td style={{ padding: '16px' }}>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${course.avgGrade}%` }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
        <div className="section">
          <div className="section-header">
            <h2>Grade Distribution</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { grade: 'A (90-100)', count: 28, percentage: 22 },
              { grade: 'B (80-89)', count: 45, percentage: 36 },
              { grade: 'C (70-79)', count: 35, percentage: 28 },
              { grade: 'D (60-69)', count: 12, percentage: 10 },
              { grade: 'F (0-59)', count: 5, percentage: 4 }
            ].map(item => (
              <div key={item.grade}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-700)' }}>{item.grade}</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--gray-900)' }}>
                    {item.count} students ({item.percentage}%)
                  </span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Top Performers</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: 'Nguyen Van A', course: 'SWE101', grade: 98 },
              { name: 'Tran Thi B', course: 'WEB301', grade: 96 },
              { name: 'Le Van C', course: 'DBS202', grade: 95 },
              { name: 'Pham Thi D', course: 'SWE101', grade: 94 },
              { name: 'Hoang Van E', course: 'WEB301', grade: 93 }
            ].map((student, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'var(--gray-50)', borderRadius: 'var(--radius)' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{student.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{student.course}</div>
                </div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--fpt-orange)' }}>{student.grade}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherAnalytics
