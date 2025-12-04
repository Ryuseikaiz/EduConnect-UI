import { FiUserPlus, FiEdit, FiTrash2, FiMail } from 'react-icons/fi'
import DataTable from './common/DataTable'

function AdminStudents() {
  const students = [
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
      id: 3,
      name: 'Le Van C',
      email: 'levanc@fpt.edu.vn',
      role: 'Student',
      status: 'Active',
      joinedDate: '2023-09-01',
      lastActive: '5 hours ago'
    }
  ]

  const studentColumns = [
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
          <h1>Student Management</h1>
          <p>Manage students.</p>
        </div>
      </div>

      <DataTable
        title="All Students"
        data={students}
        columns={studentColumns}
        onCreate={() => alert('Add Student clicked')}
        createLabel="Add Student"
        onImport={() => alert('Import Excel clicked')}
        selectable={true}
      />
    </div>
  )
}

export default AdminStudents
