import { FiMinus, FiMaximize2, FiX } from 'react-icons/fi'

function TitleBar({ currentView, setCurrentView }) {
  const viewLabels = {
    student: 'Student',
    teacher: 'Teacher',
    admin: 'Admin',
    login: 'Login'
  }

  return (
    <div className="title-bar">
      <div className="title-bar-left">
        <div className="title-bar-logo">E</div>
        <span className="title-bar-title">Cái phần trên này không có trong app á nha</span>
      </div>
      
      <div className="role-switcher">
        {Object.keys(viewLabels).map(view => (
          <button
            key={view}
            className={`role-btn ${currentView === view ? 'active' : ''}`}
            onClick={() => setCurrentView(view)}
          >
            {viewLabels[view]}
          </button>
        ))}
      </div>

      <div className="window-controls">
        <button className="window-btn" title="Minimize">
          <FiMinus size={14} />
        </button>
        <button className="window-btn" title="Maximize">
          <FiMaximize2 size={14} />
        </button>
        <button className="window-btn close" title="Close">
          <FiX size={16} />
        </button>
      </div>
    </div>
  )
}

export default TitleBar
