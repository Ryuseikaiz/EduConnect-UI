import { FiUserPlus, FiEdit, FiTrash2, FiMail } from 'react-icons/fi'
import DataTable from './common/DataTable'

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

  const columns = [
    { header: 'Name', accessor: 'name', sortable: true, filterable: true },
    {
      header: 'Email',
      accessor: 'email',
      sortable: true,
      filterable: true,
      render: (item) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FiMail size={14} color="var(--gray-500)" />
          {item.email}
        </div>
      )
    },
    {
      header: 'Role',
      accessor: 'role',
      sortable: true,
      align: 'center',
      render: (item) => <span className={`badge ${getRoleBadgeClass(item.role)}`}>{item.role}</span>
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      align: 'center',
      render: (item) => <span className="badge badge-success">{item.status}</span>
    },
    {
      header: 'Joined',
      accessor: 'joinedDate',
      sortable: true,
      align: 'center',
      render: (item) => new Date(item.joinedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },
    { header: 'Last Active', accessor: 'lastActive', align: 'center' },
    {
      header: 'Actions',
      accessor: 'actions',
      align: 'center',
      render: () => (
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 12px' }}>
            <FiEdit size={14} />
          </button>
          <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 12px' }}>
            <FiTrash2 size={14} />
          </button>
        </div>
      )
    }
  ]

  return (
    <div style={{ padding: '24px' }}>
      <div className="dashboard-header" style={{ marginBottom: '24px' }}>
        <div className="dashboard-welcome">
          <h1>User Management</h1>
          <p>Manage users, roles, and permissions.</p>
        </div>
      </div>

      <DataTable
        title="All Users"
        data={users}
        columns={columns}
        onImport={() => alert('Import Excel clicked')}
        onCreate={() => alert('Add User clicked')}
        createLabel="Add User"
        selectable={true}
      />
    </div>
  )
}

export default AdminUsers
