import { FiEdit, FiTrash2, FiLayers } from 'react-icons/fi'
import DataTable from './common/DataTable'

function AdminClasses() {
  const classes = [
    {
      id: 1,
      name: 'SE1701',
      course: 'Software Engineering',
      students: 30,
      teacher: 'Prof. Tran Thi B',
      status: 'Active'
    },
    {
      id: 2,
      name: 'SE1702',
      course: 'Web Development',
      students: 28,
      teacher: 'Prof. Nguyen Van A',
      status: 'Active'
    }
  ]

  const classColumns = [
    { header: 'Class Name', accessor: 'name', sortable: true, filterable: true },
    { header: 'Course', accessor: 'course', sortable: true, filterable: true },
    { header: 'Students', accessor: 'students', sortable: true, align: 'center' },
    { header: 'Teacher', accessor: 'teacher', sortable: true },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      align: 'center',
      render: (item) => <span className="badge badge-success">{item.status}</span>
    },
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
          <h1>Class Management</h1>
          <p>Manage classes and schedules.</p>
        </div>
      </div>

      <DataTable
        title="All Classes"
        data={classes}
        columns={classColumns}
        onCreate={() => alert('Add Class clicked')}
        createLabel="Add Class"
        onImport={() => alert('Import Excel clicked')}
        selectable={true}
      />
    </div>
  )
}

export default AdminClasses
