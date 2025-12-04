import { FiUserPlus, FiEdit, FiTrash2, FiMail } from 'react-icons/fi'
import DataTable from './common/DataTable'

function AdminTeachers() {
  const teachers = [
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
      id: 5,
      name: 'Prof. Le Van E',
      email: 'levane@fpt.edu.vn',
      role: 'Teacher',
      status: 'Active',
      joinedDate: '2021-03-20',
      lastActive: '3 hours ago'
    }
  ]

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
          <button className="btn-icon edit">
            <FiEdit size={16} />
          </button>
          <button className="btn-icon delete">
            <FiTrash2 size={16} />
          </button>
        </div>
      )
    }
  ]

  return (
    <div style={{ padding: '24px' }}>
      <div className="dashboard-header" style={{ marginBottom: '24px' }}>
        <div className="dashboard-welcome">
          <h1>Teacher Management</h1>
          <p>Manage teachers and assignments.</p>
        </div>
      </div>

      <DataTable
        title="All Teachers"
        data={teachers}
        columns={columns}
        onCreate={() => alert('Add Teacher clicked')}
        createLabel="Add Teacher"
        onImport={() => alert('Import Excel clicked')}
        selectable={true}
      />
    </div>
  )
}

export default AdminTeachers
