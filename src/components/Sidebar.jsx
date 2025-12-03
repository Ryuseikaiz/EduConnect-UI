import {
  FiGrid, FiBook, FiMessageSquare, FiCalendar,
  FiBarChart2, FiBookOpen, FiSettings, FiLogOut,
  FiUsers, FiFileText, FiAward, FiPieChart,
  FiClipboard, FiDatabase, FiMenu, FiX
} from 'react-icons/fi'

function Sidebar({ currentRole, activeMenu, setActiveMenu, isOpen, toggleSidebar }) {
  const menuItems = {
    student: [
      { id: 'dashboard', label: 'Dashboard', icon: FiGrid },
      { id: 'courses', label: 'My Courses', icon: FiBook },
      { id: 'forums', label: 'Forums', icon: FiMessageSquare },
      { id: 'schedule', label: 'Exam Schedule', icon: FiCalendar },
      { id: 'grades', label: 'Grades', icon: FiBarChart2 }
    ],
    teacher: [
      { id: 'dashboard', label: 'Dashboard', icon: FiGrid },
      { id: 'classes', label: 'My Classes', icon: FiUsers },
      { id: 'assignments', label: 'Assignments', icon: FiFileText },
      { id: 'analytics', label: 'Analytics', icon: FiPieChart },
    ],
    admin: [
      { id: 'dashboard', label: 'Dashboard', icon: FiGrid },
      { id: 'users', label: 'User Management', icon: FiUsers },
      { id: 'courses', label: 'Course Management', icon: FiBook },
      { id: 'exams', label: 'Exam Management', icon: FiClipboard },
      { id: 'reports', label: 'Reports', icon: FiPieChart },
      { id: 'database', label: 'Database', icon: FiDatabase },
    ]
  }

  const currentMenuItems = menuItems[currentRole] || menuItems.student

  return (
    <div className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-logo">
            <FiBook />
          </div>
          {isOpen && (
            <div className="sidebar-brand-text">
              <h3>EduConnect</h3>
              <p>www.fpt.edu.vn</p>
            </div>
          )}
        </div>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className="sidebar-menu">
        {isOpen && <div className="menu-label">MENU</div>}
        {currentMenuItems.map(item => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.id)}
              title={!isOpen ? item.label : ''}
            >
              <Icon />
              {isOpen && <span>{item.label}</span>}
            </div>
          )
        })}
      </div>

      <div className="sidebar-footer">
        <div className="menu-item" title={!isOpen ? 'Settings' : ''}>
          <FiSettings />
          {isOpen && <span>Settings</span>}
        </div>
        <div className="menu-item" title={!isOpen ? 'Logout' : ''}>
          <FiLogOut />
          {isOpen && <span>Logout</span>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
