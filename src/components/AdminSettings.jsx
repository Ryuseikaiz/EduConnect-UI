import { FiBook } from 'react-icons/fi'

function AdminSettings() {
  return (
    <div style={{ padding: '24px' }}>
      <div className="dashboard-header" style={{ marginBottom: '24px' }}>
        <div className="dashboard-welcome">
          <h1>Settings</h1>
          <p>System configuration and preferences.</p>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2>Course Settings</h2>
        </div>
        <div style={{ padding: '16px', color: 'var(--gray-600)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <FiBook size={24} color="var(--primary)" />
            <div>
              <h4 style={{ margin: 0, color: 'var(--gray-900)' }}>Course Management</h4>
              <p style={{ margin: 0, fontSize: '14px' }}>Configure default course settings and templates.</p>
            </div>
          </div>
          {/* Placeholder for course settings content */}
          <p>Course settings content will appear here.</p>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings
