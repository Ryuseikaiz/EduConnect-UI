import { FiSearch, FiPlus, FiEdit, FiTrash2, FiUsers } from 'react-icons/fi'

function AdminCourses() {
  const courses = [
    {
      id: 1,
      name: 'Software Engineering',
      code: 'SWE101',
      instructor: 'Prof. Nguyen Van A',
      students: 145,
      sections: 3,
      semester: 'Fall 2024',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Database Systems',
      code: 'DBS202',
      instructor: 'Prof. Tran Thi B',
      students: 128,
      sections: 3,
      semester: 'Fall 2024',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WEB301',
      instructor: 'Prof. Le Van C',
      students: 112,
      sections: 2,
      semester: 'Fall 2024',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Mobile App Development',
      code: 'MAD401',
      instructor: 'Prof. Pham Thi D',
      students: 95,
      sections: 2,
      semester: 'Fall 2024',
      status: 'Active'
    }
  ]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>Course Management</h1>
          <p>Manage courses, instructors, and enrollments.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div className="search-bar">
            <FiSearch />
            <input type="text" placeholder="Search courses..." />
          </div>
          <button className="btn btn-primary">
            <FiPlus style={{ marginRight: '8px' }} />
            Create Course
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">156</div>
              <div className="stat-label">Total Courses</div>
            </div>
            <div className="stat-icon orange">
              <FiPlus />
            </div>
          </div>
          <div className="stat-change positive">+12 this semester</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">480</div>
              <div className="stat-label">Total Students</div>
            </div>
            <div className="stat-icon blue">
              <FiUsers />
            </div>
          </div>
          <div className="stat-change positive">Across all courses</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">10</div>
              <div className="stat-label">Sections</div>
            </div>
            <div className="stat-icon green">
              <FiPlus />
            </div>
          </div>
          <div className="stat-change positive">Fall 2024</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">42</div>
              <div className="stat-label">Instructors</div>
            </div>
            <div className="stat-icon purple">
              <FiUsers />
            </div>
          </div>
          <div className="stat-change positive">Active this semester</div>
        </div>
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2>All Courses</h2>
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
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Course Name</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Code</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Instructor</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Students</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Sections</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Semester</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{course.name}</td>
                  <td style={{ padding: '16px' }}>
                    <span className="badge badge-info">{course.code}</span>
                  </td>
                  <td style={{ padding: '16px', fontSize: '13px', color: 'var(--gray-600)' }}>{course.instructor}</td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: '600', color: 'var(--fpt-orange)' }}>
                    {course.students}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', color: 'var(--gray-700)' }}>
                    {course.sections}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '13px', color: 'var(--gray-600)' }}>
                    {course.semester}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <span className="badge badge-success">{course.status}</span>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 12px' }}>
                        <FiEdit size={14} />
                      </button>
                      <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 12px' }}>
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="btn btn-secondary">Load More Courses</button>
        </div>
      </div>
    </>
  )
}

export default AdminCourses
