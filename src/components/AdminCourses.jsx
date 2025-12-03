import { FiEdit, FiTrash2 } from 'react-icons/fi'
import DataTable from './common/DataTable'

function AdminCourses() {
  const courses = [
    {
      id: 1,
      name: 'Software Engineering',
      code: 'SWE101',
      instructor: 'Prof. Nguyen Van A',
      students: 145,
      sections: 3,
      semester: 'Fall 2024',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Database Systems',
      code: 'DBS202',
      instructor: 'Prof. Tran Thi B',
      students: 128,
      sections: 3,
      semester: 'Fall 2024',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WEB301',
      instructor: 'Prof. Le Van C',
      students: 112,
      sections: 2,
      semester: 'Fall 2024',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Mobile App Development',
      code: 'MAD401',
      instructor: 'Prof. Pham Thi D',
      students: 95,
      sections: 2,
      semester: 'Fall 2024',
      status: 'Active'
    }
  ]

  const columns = [
    { header: 'Course Name', accessor: 'name', sortable: true, filterable: true },
    {
      header: 'Code',
      accessor: 'code',
      sortable: true,
      filterable: true,
      render: (item) => <span className="badge badge-info">{item.code}</span>
    },
    { header: 'Instructor', accessor: 'instructor', sortable: true, filterable: true },
    {
      header: 'Students',
      accessor: 'students',
      sortable: true,
      align: 'center',
      render: (item) => <span style={{ fontWeight: '600', color: 'var(--fpt-orange)' }}>{item.students}</span>
    },
    { header: 'Sections', accessor: 'sections', sortable: true, align: 'center' },
    { header: 'Semester', accessor: 'semester', sortable: true, align: 'center' },
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
          <h1>Course Management</h1>
          <p>Manage courses, instructors, and enrollments.</p>
        </div>
      </div>

      <DataTable
        title="All Courses"
        data={courses}
        columns={columns}
        onImport={() => alert('Import Excel clicked')}
        onCreate={() => alert('Create Course clicked')}
        createLabel="Create Course"
        selectable={true}
      />
    </div>
  )
}

export default AdminCourses
