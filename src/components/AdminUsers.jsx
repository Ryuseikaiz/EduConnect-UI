import { FiSearch, FiUserPlus, FiEdit, FiTrash2, FiMail } from 'react-icons/fi'

function AdminUsers() {
  const users = [
    {
      id: 1,
      name: 'Nguyen Van A',
      email: 'nguyenvana@fpt.edu.vn',
      role: 'Student',
      status: 'Active',
      joinedDate: '2023-09-01',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Prof. Tran Thi B',
      email: 'tranthib@fpt.edu.vn',
      role: 'Teacher',
      status: 'Active',
      joinedDate: '2020-01-15',
      lastActive: '1 hour ago'
    },
    {
      id: 3,
      name: 'Le Van C',
      email: 'levanc@fpt.edu.vn',
      role: 'Student',
      status: 'Active',
      joinedDate: '2023-09-01',
      lastActive: '5 hours ago'
    },
    {
      id: 4,
      name: 'Admin Pham D',
      email: 'phamd@fpt.edu.vn',
      role: 'Admin',
      status: 'Active',
      joinedDate: '2019-06-10',
      lastActive: '30 minutes ago'
    }
  ]

  const getRoleBadgeClass = (role) => {
    if (role === 'Student') return 'badge-info'
    if (role === 'Teacher') return 'badge-success'
    return 'badge-orange'
  }

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>User Management</h1>
          <p>Manage users, roles, and permissions.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div className="search-bar">
            <FiSearch />
            <input type="text" placeholder="Search users..." />
          </div>
          <button className="btn btn-primary">
            <FiUserPlus style={{ marginRight: '8px' }} />
            Add User
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">2,456</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-icon blue">
              <FiUserPlus />
            </div>
          </div>
          <div className="stat-change positive">+127 this month</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">342</div>
              <div className="stat-label">Teachers</div>
            </div>
            <div className="stat-icon green">
              <FiUserPlus />
            </div>
          </div>
          <div className="stat-change positive">+8 this month</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">49</div>
              <div className="stat-label">Admins</div>
            </div>
            <div className="stat-icon orange">
              <FiUserPlus />
            </div>
          </div>
          <div className="stat-change positive">+2 this month</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-value">2,847</div>
              <div className="stat-label">Total Users</div>
            </div>
            <div className="stat-icon purple">
              <FiUserPlus />
            </div>
          </div>
          <div className="stat-change positive">+137 this month</div>
        </div>
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2>All Users</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '8px 16px' }}>
              All Roles
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '8px 16px' }}>
              Active Only
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Name</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Email</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Role</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Joined</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Last Active</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{user.name}</td>
                  <td style={{ padding: '16px', fontSize: '13px', color: 'var(--gray-600)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiMail size={14} />
                      {user.email}
                    </div>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <span className={`badge ${getRoleBadgeClass(user.role)}`}>{user.role}</span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <span className="badge badge-success">{user.status}</span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '13px', color: 'var(--gray-600)' }}>
                    {new Date(user.joinedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '13px', color: 'var(--gray-600)' }}>
                    {user.lastActive}
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
          <button className="btn btn-secondary">Load More Users</button>
        </div>
      </div>
    </>
  )
}

export default AdminUsers
