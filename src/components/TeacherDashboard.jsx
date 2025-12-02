import { FiSearch, FiUsers, FiTrendingUp, FiCheckCircle, FiClock, FiBook } from 'react-icons/fi'

function TeacherDashboard() {
  const stats = [
    { label: 'Total Students', value: '342', icon: FiUsers, color: 'orange', change: '+12 this semester' },
    { label: 'Active Classes', value: '8', icon: FiCheckCircle, color: 'green', change: '3 sections' },
    { label: 'Pending Grading', value: '24', icon: FiClock, color: 'blue', change: '2 assignments' },
    { label: 'Avg. Performance', value: '85%', icon: FiTrendingUp, color: 'purple', change: '+5% from last term' }
  ]

  const classes = [
    { 
      id: 1, 
      name: 'Software Engineering', 
      code: 'SWE101', 
      section: 'Section A',
      students: 45, 
      schedule: 'Mon, Wed 8:00 AM'
    },
    { 
      id: 2, 
      name: 'Database Systems', 
      code: 'DBS202', 
      section: 'Section B',
      students: 38, 
      schedule: 'Tue, Thu 10:00 AM'
    },
    { 
      id: 3, 
      name: 'Web Development', 
      code: 'WEB301', 
      section: 'Section C',
      students: 42, 
      schedule: 'Wed, Fri 2:00 PM'
    }
  ]

  const recentSubmissions = [
    { id: 1, student: 'Nguyen Van A', assignment: 'SWE101 - Assignment 2', time: '2 hours ago', status: 'pending' },
    { id: 2, student: 'Tran Thi B', assignment: 'DBS202 - Lab Report 3', time: '5 hours ago', status: 'pending' },
    { id: 3, student: 'Le Van C', assignment: 'WEB301 - Project Milestone', time: '1 day ago', status: 'graded' },
    { id: 4, student: 'Pham Thi D', assignment: 'SWE101 - Quiz 4', time: '1 day ago', status: 'graded' }
  ]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>Welcome back, Professor!</h1>
          <p>Manage your classes and track student progress.</p>
        </div>
        <div className="search-bar">
          <FiSearch />
          <input type="text" placeholder="Search students, assignments, classes..." />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => {
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
              <div className="stat-change positive">{stat.change}</div>
            </div>
          )
        })}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-main">
          {/* My Classes */}
          <div className="section">
            <div className="section-header">
              <h2>My Classes</h2>
              <a href="#">View All</a>
            </div>
            {classes.map(classItem => (
              <div key={classItem.id} className="course-card">
                <div className="course-header">
                  <div className="course-icon">
                    <FiBook size={24} />
                  </div>
                  <div className="course-info">
                    <h3>{classItem.name}</h3>
                    <p>{classItem.code} - {classItem.section}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                  <div>
                    <span className="badge badge-info">{classItem.students} Students</span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--gray-600)' }}>
                    {classItem.schedule}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-sidebar">
          {/* Recent Submissions */}
          <div className="section">
            <div className="section-header">
              <h2>Recent Submissions</h2>
            </div>
            {recentSubmissions.map(submission => (
              <div key={submission.id} className="deadline-item">
                <div className="deadline-icon">
                  {submission.status === 'pending' ? <FiClock /> : <FiCheckCircle />}
                </div>
                <div className="deadline-content">
                  <h4>{submission.student}</h4>
                  <p>{submission.assignment}</p>
                  <p style={{ fontSize: '11px', marginTop: '4px' }}>
                    {submission.time} • 
                    <span className={`badge ${submission.status === 'pending' ? 'badge-warning' : 'badge-success'}`} style={{ marginLeft: '6px' }}>
                      {submission.status}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="section">
            <div className="section-header">
              <h2>Quick Actions</h2>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', marginBottom: '8px' }}>
              Create Assignment
            </button>
            <button className="btn btn-secondary" style={{ width: '100%', marginBottom: '8px' }}>
              Schedule Exam
            </button>
            <button className="btn btn-secondary" style={{ width: '100%' }}>
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherDashboard
