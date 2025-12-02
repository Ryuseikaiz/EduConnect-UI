import { FiArrowLeft, FiMail, FiPhone, FiMapPin, FiBook, FiAward, FiCalendar } from 'react-icons/fi'

function StudentProfile({ student, onBack }) {
  const courses = [
    { id: 1, name: 'Software Engineering', code: 'SWE101', grade: 88, credits: 3 },
    { id: 2, name: 'Database Systems', code: 'DBS202', grade: 85, credits: 3 },
    { id: 3, name: 'Web Development', code: 'WEB301', grade: 90, credits: 3 },
    { id: 4, name: 'Mobile App Development', code: 'MAD401', grade: 87, credits: 3 }
  ]

  const calculateGPA = () => {
    const total = courses.reduce((sum, course) => sum + course.grade, 0)
    return (total / courses.length).toFixed(2)
  }

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <button onClick={onBack} className="btn btn-secondary" style={{ marginBottom: '12px' }}>
            <FiArrowLeft size={16} /> Back
          </button>
          <h1>{student?.name || 'Nguyen Van An'}</h1>
          <p>Student ID: {student?.id || 'SE12345'}</p>
        </div>
      </div>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">{calculateGPA()}</div>
              <div className="stat-label">GPA</div>
            </div>
            <div className="stat-icon orange">
              <FiAward />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">{courses.length}</div>
              <div className="stat-label">Courses</div>
            </div>
            <div className="stat-icon blue">
              <FiBook />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">95%</div>
              <div className="stat-label">Attendance</div>
            </div>
            <div className="stat-icon green">
              <FiCalendar />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">12</div>
              <div className="stat-label">Credits</div>
            </div>
            <div className="stat-icon purple">
              <FiBook />
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-main">
          {/* Enrolled Courses */}
          <div className="section">
            <div className="section-header">
              <h2>Enrolled Courses</h2>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600' }}>Course</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600' }}>Code</th>
                  <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600' }}>Credits</th>
                  <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600' }}>Grade</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                    <td style={{ padding: '16px', fontSize: '14px', fontWeight: '500' }}>{course.name}</td>
                    <td style={{ padding: '16px', fontSize: '13px', color: 'var(--gray-600)' }}>{course.code}</td>
                    <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px' }}>{course.credits}</td>
                    <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: '600', color: 'var(--fpt-orange)' }}>{course.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Academic Performance */}
          <div className="section">
            <div className="section-header">
              <h2>Academic Performance</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div style={{ padding: '20px', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '13px', color: 'var(--gray-600)', marginBottom: '8px' }}>Current Semester GPA</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--fpt-orange)' }}>{calculateGPA()}</div>
              </div>
              <div style={{ padding: '20px', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '13px', color: 'var(--gray-600)', marginBottom: '8px' }}>Cumulative GPA</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--success)' }}>3.65</div>
              </div>
              <div style={{ padding: '20px', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '13px', color: 'var(--gray-600)', marginBottom: '8px' }}>Total Credits</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--gray-900)' }}>48</div>
              </div>
              <div style={{ padding: '20px', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '13px', color: 'var(--gray-600)', marginBottom: '8px' }}>Class Rank</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--gray-900)' }}>12/150</div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-sidebar">
          {/* Personal Information */}
          <div className="section">
            <div className="section-header">
              <h2>Personal Info</h2>
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FiMail size={16} color="var(--gray-500)" />
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>Email</div>
                  <div>an.nguyen@fpt.edu.vn</div>
                </div>
              </div>
              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FiPhone size={16} color="var(--gray-500)" />
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>Phone</div>
                  <div>+84 123 456 789</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FiMapPin size={16} color="var(--gray-500)" />
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>Address</div>
                  <div>Hanoi, Vietnam</div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Info */}
          <div className="section">
            <div className="section-header">
              <h2>Academic Info</h2>
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '12px' }}>
                <strong>Major:</strong><br />
                Software Engineering
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Year:</strong><br />
                3rd Year
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Enrollment Date:</strong><br />
                September 2022
              </div>
              <div>
                <strong>Expected Graduation:</strong><br />
                June 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentProfile
