import { FiSearch, FiUsers, FiBook, FiActivity, FiServer, FiTrendingUp, FiAlertCircle } from 'react-icons/fi'

function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '2,847', icon: FiUsers, color: 'orange', change: '+127 this month' },
    { label: 'Active Courses', value: '156', icon: FiBook, color: 'blue', change: '12 new courses' },
    { label: 'System Uptime', value: '99.9%', icon: FiActivity, color: 'green', change: 'Last 30 days' },
    { label: 'Storage Used', value: '67%', icon: FiServer, color: 'purple', change: '2.4 TB / 3.6 TB' }
  ]

  const userStats = [
    { role: 'Students', count: 2456, percentage: 86, color: 'var(--fpt-orange)' },
    { role: 'Teachers', count: 342, percentage: 12, color: 'var(--info)' },
    { role: 'Admins', count: 49, percentage: 2, color: 'var(--success)' }
  ]

  const recentActivities = [
    { id: 1, action: 'New user registered', user: 'student_2847@fpt.edu.vn', time: '5 minutes ago', type: 'user' },
    { id: 2, action: 'Course created', user: 'Prof. Nguyen Van A', time: '1 hour ago', type: 'course' },
    { id: 3, action: 'Exam scheduled', user: 'Prof. Tran Thi B', time: '2 hours ago', type: 'exam' },
    { id: 4, action: 'System backup completed', user: 'System', time: '3 hours ago', type: 'system' }
  ]

  const systemAlerts = [
    { id: 1, message: 'Database backup scheduled for tonight at 2:00 AM', severity: 'info' },
    { id: 2, message: 'Server maintenance on May 15th, 2024', severity: 'warning' },
    { id: 3, message: 'High CPU usage detected on Server 2', severity: 'warning' }
  ]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>System Administration</h1>
          <p>Monitor and manage the EduConnect platform.</p>
        </div>
        <div className="search-bar">
          <FiSearch />
          <input type="text" placeholder="Search users, courses, logs..." />
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
          {/* User Distribution */}
          <div className="section">
            <div className="section-header">
              <h2>User Distribution</h2>
              <a href="#">View Details</a>
            </div>
            {userStats.map(stat => (
              <div key={stat.role} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--gray-900)' }}>
                    {stat.role}
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--gray-700)' }}>
                    {stat.count} ({stat.percentage}%)
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${stat.percentage}%`,
                      background: stat.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activities */}
          <div className="section">
            <div className="section-header">
              <h2>Recent Activities</h2>
              <a href="#">View All Logs</a>
            </div>
            {recentActivities.map(activity => (
              <div key={activity.id} className="deadline-item">
                <div className="deadline-icon">
                  {activity.type === 'user' && <FiUsers />}
                  {activity.type === 'course' && <FiBook />}
                  {activity.type === 'exam' && <FiActivity />}
                  {activity.type === 'system' && <FiServer />}
                </div>
                <div className="deadline-content">
                  <h4>{activity.action}</h4>
                  <p>{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-sidebar">
          {/* System Alerts */}
          <div className="section">
            <div className="section-header">
              <h2>System Alerts</h2>
            </div>
            {systemAlerts.map(alert => (
              <div key={alert.id} className="deadline-item">
                <div className="deadline-icon" style={{ 
                  background: alert.severity === 'warning' ? '#FEF3C7' : '#DBEAFE',
                  color: alert.severity === 'warning' ? '#F59E0B' : '#3B82F6'
                }}>
                  <FiAlertCircle />
                </div>
                <div className="deadline-content">
                  <p style={{ fontSize: '13px', color: 'var(--gray-700)' }}>{alert.message}</p>
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
              Add New User
            </button>
            <button className="btn btn-secondary" style={{ width: '100%', marginBottom: '8px' }}>
              Create Course
            </button>
            <button className="btn btn-secondary" style={{ width: '100%', marginBottom: '8px' }}>
              System Settings
            </button>
            <button className="btn btn-secondary" style={{ width: '100%' }}>
              View Reports
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
