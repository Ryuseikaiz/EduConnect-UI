import { FiSearch, FiUsers, FiBook, FiBarChart, FiCalendar } from 'react-icons/fi'

function TeacherClasses({ onSelectClass }) {
  const classes = [
    {
      id: 1,
      name: 'Software Engineering',
      code: 'SWE101',
      section: 'Section A',
      students: 45,
      schedule: 'Mon, Wed 8:00 AM - 10:00 AM',
      room: 'Room 301',
      semester: 'Fall 2024',
      attendance: 92,
      avgGrade: 84
    },
    {
      id: 2,
      name: 'Database Systems',
      code: 'DBS202',
      section: 'Section B',
      students: 38,
      schedule: 'Tue, Thu 10:00 AM - 12:00 PM',
      room: 'Room 205',
      semester: 'Fall 2024',
      attendance: 88,
      avgGrade: 79
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WEB301',
      section: 'Section C',
      students: 42,
      schedule: 'Wed, Fri 2:00 PM - 4:00 PM',
      room: 'Room 402',
      semester: 'Fall 2024',
      attendance: 95,
      avgGrade: 87
    }
  ]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>My Classes</h1>
          <p>Manage your classes and track student performance.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div className="search-bar">
            <FiSearch />
            <input type="text" placeholder="Search classes..." />
          </div>
          <button className="btn btn-primary">Create Class</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">{classes.length}</div>
              <div className="stat-label">Total Classes</div>
            </div>
            <div className="stat-icon orange">
              <FiBook />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">{classes.reduce((sum, c) => sum + c.students, 0)}</div>
              <div className="stat-label">Total Students</div>
            </div>
            <div className="stat-icon blue">
              <FiUsers />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">92%</div>
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
              <div className="stat-value">83</div>
              <div className="stat-label">Avg. Grade</div>
            </div>
            <div className="stat-icon purple">
              <FiBarChart />
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2>Active Classes</h2>
        </div>

        {classes.map(classItem => (
          <div key={classItem.id} className="card" style={{ padding: '24px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div className="course-icon" style={{ width: '64px', height: '64px', fontSize: '32px' }}>
                  <FiBook size={32} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>{classItem.name}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--gray-500)', marginBottom: '8px' }}>
                    {classItem.code} - {classItem.section}
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="badge badge-orange">{classItem.semester}</span>
                    <span className="badge badge-info">{classItem.students} Students</span>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" onClick={() => onSelectClass?.(classItem)}>Manage Class</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', paddingTop: '20px', borderTop: '1px solid var(--gray-200)' }}>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginBottom: '4px' }}>Schedule</div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{classItem.schedule}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginBottom: '4px' }}>Room</div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{classItem.room}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginBottom: '4px' }}>Attendance Rate</div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--success)' }}>{classItem.attendance}%</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginBottom: '4px' }}>Average Grade</div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--fpt-orange)' }}>{classItem.avgGrade}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              <button className="btn btn-secondary" style={{ fontSize: '13px' }}>View Students</button>
              <button className="btn btn-secondary" style={{ fontSize: '13px' }}>Assignments</button>
              <button className="btn btn-secondary" style={{ fontSize: '13px' }}>Attendance</button>
              <button className="btn btn-secondary" style={{ fontSize: '13px' }}>Grades</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TeacherClasses
