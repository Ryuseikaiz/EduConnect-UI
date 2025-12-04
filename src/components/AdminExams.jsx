import { FiEdit, FiTrash2, FiClock, FiCalendar } from 'react-icons/fi'
import DataTable from './common/DataTable'

function AdminExams({ title = 'Exam Management' }) {
  const exams = [
    {
      id: 1,
      name: 'Mid-term Exam',
      course: 'Software Engineering',
      date: '2023-10-15',
      duration: '90 mins',
      status: 'Scheduled'
    },
    {
      id: 2,
      name: 'Final Exam',
      course: 'Web Development',
      date: '2023-12-20',
      duration: '120 mins',
      status: 'Draft'
    },
    {
      id: 3,
      name: 'Quiz 1',
      course: 'Introduction to AI',
      date: '2023-09-30',
      duration: '45 mins',
      status: 'Completed'
    }
  ]

  const columns = [
    { header: 'Exam Name', accessor: 'name', sortable: true, filterable: true },
    { header: 'Course', accessor: 'course', sortable: true, filterable: true },
    {
      header: 'Date',
      accessor: 'date',
      sortable: true,
      align: 'center',
      render: (item) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FiCalendar size={14} color="var(--gray-500)" />
          {new Date(item.date).toLocaleDateString()}
        </div>
      )
    },
    {
      header: 'Duration',
      accessor: 'duration',
      align: 'center',
      render: (item) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FiClock size={14} color="var(--gray-500)" />
          {item.duration}
        </div>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      align: 'center',
      render: (item) => {
        let badgeClass = 'badge-gray'
        if (item.status === 'Scheduled') badgeClass = 'badge-info'
        if (item.status === 'Completed') badgeClass = 'badge-success'
        if (item.status === 'Draft') badgeClass = 'badge-orange'
        return <span className={`badge ${badgeClass}`}>{item.status}</span>
      }
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
          <h1>{title}</h1>
          <p>Schedule and manage examinations.</p>
        </div>
      </div>

      <DataTable
        title="All Exams"
        data={exams}
        columns={columns}
        onCreate={() => alert('Create Exam clicked')}
        createLabel="Schedule Exam"
        onImport={() => alert('Import Excel clicked')}
        selectable={true}
      />
    </div>
  )
}

export default AdminExams
