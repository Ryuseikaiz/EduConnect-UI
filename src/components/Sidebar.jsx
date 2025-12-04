import { useState } from 'react'
import {
  FiGrid, FiBook, FiMessageSquare, FiCalendar,
  FiBarChart2, FiBookOpen, FiSettings, FiLogOut,
  FiUsers, FiFileText, FiAward, FiPieChart,
  FiClipboard, FiDatabase, FiMenu, FiX, FiLayers,
  FiChevronDown, FiChevronRight, FiUser, FiClock
} from 'react-icons/fi'

function Sidebar({ currentRole, activeMenu, setActiveMenu, isOpen, toggleSidebar }) {
  const [expandedMenus, setExpandedMenus] = useState({})

  const toggleSubMenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }))
  }

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
      { 
        id: 'student_mgmt', 
        label: 'Student Management', 
        icon: FiUsers,
        subItems: [
          { id: 'students', label: 'Students', icon: FiUsers },
          { id: 'classes', label: 'Classes', icon: FiLayers }
        ]
      },
      { id: 'teachers', label: 'Teacher Management', icon: FiUsers },
      { 
        id: 'exams', 
        label: 'Exam Management', 
        icon: FiClipboard,
        subItems: [
          { id: 'midterm', label: 'Midterm', icon: FiClock },
          { id: 'final_exam', label: 'Final Exam', icon: FiFileText },
          { id: 'practical_exam', label: 'Practical Exam', icon: FiLayers }
        ]
      },
      { id: 'reports', label: 'Reports', icon: FiPieChart },
      { id: 'database', label: 'Database', icon: FiDatabase },
      { 
        id: 'settings', 
        label: 'Settings', 
        icon: FiSettings,
        subItems: [
          { id: 'courses', label: 'Courses', icon: FiBook }
        ]
      },
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
          const isExpanded = expandedMenus[item.id]
          const isActive = activeMenu === item.id || (item.subItems && item.subItems.some(sub => sub.id === activeMenu))

          return (
            <div key={item.id}>
              <div
                className={`menu-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  if (item.subItems) {
                    toggleSubMenu(item.id)
                  } else {
                    setActiveMenu(item.id)
                  }
                }}
                title={!isOpen ? item.label : ''}
              >
                <Icon />
                {isOpen && (
                  <>
                    <span style={{ flex: 1 }}>{item.label}</span>
                    {item.subItems && (
                      <span style={{ fontSize: '10px', display: 'flex', alignItems: 'center' }}>
                        {isExpanded ? <FiChevronDown /> : <FiChevronRight />}
                      </span>
                    )}
                  </>
                )}
              </div>
              
              {/* Sub-menu */}
              {isOpen && item.subItems && isExpanded && (
                <div className="sub-menu" style={{ 
                  paddingLeft: '12px', 
                  marginLeft: '25px', 
                  borderLeft: '1px solid #E5E7EB', // var(--gray-200)
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '4px',
                  marginTop: '4px',
                  marginBottom: '4px'
                }}>
                  {item.subItems.map(sub => {
                    const SubIcon = sub.icon
                    return (
                      <div
                        key={sub.id}
                        className={`menu-item ${activeMenu === sub.id ? 'active' : ''}`}
                        onClick={() => setActiveMenu(sub.id)}
                        style={{ padding: '8px 12px', fontSize: '13px' }}
                      >
                        {SubIcon && <SubIcon size={14} />}
                        <span>{sub.label}</span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="sidebar-footer">
        <div className="menu-item" title={!isOpen ? 'Profile' : ''}>
          <FiUser />
          {isOpen && <span>Profile</span>}
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
