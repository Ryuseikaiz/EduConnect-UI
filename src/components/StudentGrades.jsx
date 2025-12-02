import { FiSearch, FiTrendingUp, FiAward, FiBarChart2, FiCheckCircle, FiChevronDown } from 'react-icons/fi'
import { useState } from 'react'

function StudentGrades() {
  const [currentSemester, setCurrentSemester] = useState('Fall 2024')
  const [showSemesterDropdown, setShowSemesterDropdown] = useState(false)

  const semesters = ['Fall 2024', 'Summer 2024', 'Spring 2024', 'Fall 2023', 'Summer 2023']

  const gradesSummary = [
    { label: 'GPA', value: '3.65', icon: FiTrendingUp, color: 'orange' },
    { label: 'Credits Earned', value: '48', icon: FiAward, color: 'blue' },
    { label: 'Courses Completed', value: '12', icon: FiCheckCircle, color: 'green' },
    { label: 'Current Semester', value: '4.0', icon: FiBarChart2, color: 'purple' }
  ]

  const courses = [
    {
      id: 1,
      name: 'Software Engineering',
      code: 'SWE101',
      semester: 'Fall 2024',
      assignments: 85,
      midterm: 78,
      final: 88,
      overall: 84,
      grade: 'B+',
      credits: 4
    },
    {
      id: 2,
      name: 'Database Systems',
      code: 'DBS202',
      semester: 'Fall 2024',
      assignments: 92,
      midterm: 85,
      final: null,
      overall: 89,
      grade: 'In Progress',
      credits: 4
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WEB301',
      semester: 'Fall 2024',
      assignments: 88,
      midterm: 90,
      final: null,
      overall: 89,
      grade: 'In Progress',
      credits: 3
    },
    {
      id: 4,
      name: 'Data Structures',
      code: 'DSA201',
      semester: 'Spring 2024',
      assignments: 95,
      midterm: 92,
      final: 94,
      overall: 94,
      grade: 'A',
      credits: 4
    }
  ]

  const getGradeColor = (grade) => {
    if (grade === 'A' || grade === 'A+') return 'var(--success)'
    if (grade === 'B+' || grade === 'B') return 'var(--info)'
    if (grade === 'In Progress') return 'var(--fpt-orange)'
    return 'var(--gray-600)'
  }

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>My Grades</h1>
          <p>Track your academic performance and progress.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div className="search-bar">
            <FiSearch />
            <input type="text" placeholder="Search courses..." />
          </div>
          
          {/* Semester Selector */}
          <div style={{ position: 'relative' }}>
            <button 
              className="semester-selector-btn"
              onClick={() => setShowSemesterDropdown(!showSemesterDropdown)}
            >
              <span>{currentSemester}</span>
              <FiChevronDown size={14} />
            </button>
            
            {showSemesterDropdown && (
              <div className="semester-dropdown-menu">
                {semesters.map(semester => (
                  <div
                    key={semester}
                    className={`semester-option ${currentSemester === semester ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentSemester(semester)
                      setShowSemesterDropdown(false)
                    }}
                  >
                    {semester}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="stats-grid">
        {gradesSummary.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="stat-card">
              <div className="stat-header">
                <div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                <div className={`stat-icon ${stat.color}`}>
                  <Icon />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2>Course Grades</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '8px 16px' }}>
              Fall 2024
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '8px 16px' }}>
              All Semesters
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Course</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Code</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Assignments</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Midterm</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Final</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Overall</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Grade</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Credits</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id} style={{ borderBottom: '1px solid var(--gray-100)', transition: 'background var(--transition-fast)' }} 
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--gray-50)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{course.name}</td>
                  <td style={{ padding: '16px', fontSize: '13px', color: 'var(--gray-600)' }}>{course.code}</td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{course.assignments}</td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{course.midterm}</td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>
                    {course.final || <span style={{ color: 'var(--gray-400)' }}>-</span>}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: '600', color: 'var(--fpt-orange)' }}>{course.overall}</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <span style={{ 
                      padding: '4px 12px', 
                      borderRadius: '999px', 
                      fontSize: '13px', 
                      fontWeight: '600',
                      color: getGradeColor(course.grade),
                      background: `${getGradeColor(course.grade)}15`
                    }}>
                      {course.grade}
                    </span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', color: 'var(--gray-700)' }}>{course.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2>Grade Distribution</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {[
            { grade: 'A', count: 3, percentage: 25 },
            { grade: 'B+', count: 4, percentage: 33 },
            { grade: 'B', count: 3, percentage: 25 },
            { grade: 'C+', count: 2, percentage: 17 },
            { grade: 'C', count: 0, percentage: 0 }
          ].map(item => (
            <div key={item.grade} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--fpt-orange)', marginBottom: '8px' }}>
                {item.count}
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--gray-700)', marginBottom: '4px' }}>
                Grade {item.grade}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>
                {item.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default StudentGrades
