import { FiSearch, FiBook, FiClock, FiUsers, FiPlay } from 'react-icons/fi'

function StudentCourses({ onSelectCourse }) {
  const courses = [
    {
      id: 1,
      name: 'Software Engineering',
      code: 'SWE101',
      instructor: 'Prof. Nguyen Van A',
      schedule: 'Mon, Wed 8:00 AM - 10:00 AM',
      room: 'Room 301',
      progress: 75,
      students: 45,
      status: 'In Progress'
    },
    {
      id: 2,
      name: 'Database Systems',
      code: 'DBS202',
      instructor: 'Prof. Tran Thi B',
      schedule: 'Tue, Thu 10:00 AM - 12:00 PM',
      room: 'Room 205',
      progress: 40,
      students: 38,
      status: 'In Progress'
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WEB301',
      instructor: 'Prof. Le Van C',
      schedule: 'Wed, Fri 2:00 PM - 4:00 PM',
      room: 'Room 402',
      progress: 60,
      students: 42,
      status: 'In Progress'
    },
    {
      id: 4,
      name: 'Mobile App Development',
      code: 'MAD401',
      instructor: 'Prof. Pham Thi D',
      schedule: 'Mon, Thu 1:00 PM - 3:00 PM',
      room: 'Room 108',
      progress: 90,
      students: 35,
      status: 'Almost Complete'
    }
  ]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>My Courses</h1>
          <p>View and manage your enrolled courses.</p>
        </div>
        <div className="search-bar">
          <FiSearch />
          <input type="text" placeholder="Search courses..." />
        </div>
      </div>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">{courses.length}</div>
              <div className="stat-label">Total Courses</div>
            </div>
            <div className="stat-icon orange">
              <FiBook />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">12</div>
              <div className="stat-label">Hours/Week</div>
            </div>
            <div className="stat-icon blue">
              <FiClock />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">160</div>
              <div className="stat-label">Total Students</div>
            </div>
            <div className="stat-icon green">
              <FiUsers />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">66%</div>
              <div className="stat-label">Avg. Progress</div>
            </div>
            <div className="stat-icon purple">
              <FiPlay />
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2>Enrolled Courses</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {courses.map(course => (
            <div key={course.id} className="card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div className="course-icon" style={{ width: '56px', height: '56px', fontSize: '28px' }}>
                    <FiBook size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>{course.name}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '8px' }}>{course.code}</p>
                    <span className="badge badge-success">{course.status}</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '13px', color: 'var(--gray-600)' }}>
                  <FiUsers size={14} />
                  <span>{course.instructor}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '13px', color: 'var(--gray-600)' }}>
                  <FiClock size={14} />
                  <span>{course.schedule}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--gray-600)' }}>
                  <FiBook size={14} />
                  <span>{course.room} • {course.students} students</span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--gray-700)' }}>Course Progress</span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--fpt-orange)' }}>{course.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${course.progress}%` }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => onSelectCourse?.(course)}>View Course</button>
                <button className="btn btn-secondary">Materials</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default StudentCourses
