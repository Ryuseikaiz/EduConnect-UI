import { useState } from 'react'
import { FiSearch, FiUsers, FiBook, FiBarChart, FiCalendar, FiPlus, FiFileText, FiCheckCircle, FiMoreVertical, FiClock, FiAward, FiX } from 'react-icons/fi'
import DataTable from './common/DataTable'

function TeacherClasses() {
  const [selectedClassId, setSelectedClassId] = useState(1)
  const [activeTab, setActiveTab] = useState('roster') // roster, assignments, grading
  const [selectedAssignment, setSelectedAssignment] = useState(null)

  const classes = [
    {
      id: 1,
      name: 'Software Engineering',
      code: 'SWE101',
      section: 'Section A',
      students: 45,
      schedule: 'Mon, Wed 8:00 AM - 10:00 AM',
      room: 'Room 301',
      semester: 'Fall 2024',
      avgGrade: 84,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Database Systems',
      code: 'DBS202',
      section: 'Section B',
      students: 38,
      schedule: 'Tue, Thu 10:00 AM - 12:00 PM',
      room: 'Room 205',
      semester: 'Fall 2024',
      avgGrade: 79,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WEB301',
      section: 'Section C',
      students: 42,
      schedule: 'Wed, Fri 2:00 PM - 4:00 PM',
      room: 'Room 402',
      semester: 'Fall 2024',
      avgGrade: 87,
      status: 'Active'
    }
  ]

  // Mock data for expanded view
  const studentsList = [
    { id: 1, name: 'Nguyen Van A', email: 'a.nguyen@fpt.edu.vn', grade: 88 },
    { id: 2, name: 'Tran Thi B', email: 'b.tran@fpt.edu.vn', grade: 85 },
    { id: 3, name: 'Le Van C', email: 'c.le@fpt.edu.vn', grade: 90 },
    { id: 4, name: 'Pham Thi D', email: 'd.pham@fpt.edu.vn', grade: 87 }
  ]

  const assignmentsList = [
    { id: 1, title: 'Assignment 1: Requirements', submitted: 42, total: 45, avgGrade: 85 },
    { id: 2, title: 'Assignment 2: Design Patterns', submitted: 38, total: 45, avgGrade: 82 },
    { id: 3, title: 'Midterm Project', submitted: 45, total: 45, avgGrade: 88 }
  ]

  const pendingSubmissions = [
    {
      id: 1,
      student: 'Nguyen Van A',
      studentId: 'SE160001',
      assignment: 'Database Design Project',
      course: 'DBS202',
      submittedAt: '2024-05-10 14:30',
      dueDate: '2024-05-10 23:59',
      status: 'On Time'
    },
    {
      id: 2,
      student: 'Tran Thi B',
      studentId: 'SE160002',
      assignment: 'React Component Assignment',
      course: 'WEB301',
      submittedAt: '2024-05-11 08:15',
      dueDate: '2024-05-10 23:59',
      status: 'Late'
    },
    {
      id: 3,
      student: 'Le Van C',
      studentId: 'SE160003',
      assignment: 'Software Requirements Document',
      course: 'SWE101',
      submittedAt: '2024-05-09 20:45',
      dueDate: '2024-05-10 23:59',
      status: 'On Time'
    },
    {
      id: 4,
      student: 'Pham Thi D',
      studentId: 'SE160004',
      assignment: 'Mobile UI Design',
      course: 'MAD401',
      submittedAt: '2024-05-10 22:00',
      dueDate: '2024-05-10 23:59',
      status: 'On Time'
    }
  ]

  const selectedClass = classes.find(c => c.id === selectedClassId) || classes[0]

  // Filter submissions for the selected class (mock logic based on course code)
  const classSubmissions = pendingSubmissions.filter(s => s.course === selectedClass.code)

  // Columns for Student Roster
  const studentColumns = [
    { header: 'Name', accessor: 'name', sortable: true, filterable: true },
    { header: 'Email', accessor: 'email', sortable: true, filterable: true },
    {
      header: 'Grade',
      accessor: 'grade',
      sortable: true,
      align: 'center',
      render: (item) => <span style={{ fontWeight: '600', color: 'var(--fpt-orange)' }}>{item.grade}</span>
    },
    {
      header: 'Actions',
      accessor: 'actions',
      align: 'right',
      render: () => (
        <button className="btn-icon">
          <FiMoreVertical size={16} />
        </button>
      )
    }
  ]

  // Columns for Grading
  const gradingColumns = [
    {
      header: 'Student',
      accessor: 'student',
      sortable: true,
      filterable: true,
      render: (item) => (
        <div>
          <div style={{ fontWeight: '500' }}>{item.student}</div>
          <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{item.studentId}</div>
        </div>
      )
    },
    { header: 'Assignment', accessor: 'assignment', sortable: true, filterable: true },
    {
      header: 'Submitted',
      accessor: 'submittedAt',
      sortable: true,
      align: 'center',
      render: (item) => new Date(item.submittedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      align: 'center',
      render: (item) => (
        <span className={`badge ${item.status === 'On Time' ? 'badge-success' : 'badge-warning'}`}>
          {item.status}
        </span>
      )
    },
    {
      header: 'Action',
      accessor: 'action',
      align: 'center',
      render: () => (
        <button className="btn btn-primary" style={{ fontSize: '12px', padding: '4px 12px' }}>
          Grade
        </button>
      )
    }
  ]

  // Generate mock submission details for the modal
  const getAssignmentDetails = (assignmentId) => {
    // This would normally fetch from API
    return studentsList.map((student, index) => {
      const statuses = ['Submitted', 'Not Submitted', 'Late', 'Graded']
      // Deterministic random based on index and assignmentId
      const statusIndex = (index + assignmentId) % 4
      const status = statuses[statusIndex]

      return {
        id: student.id,
        studentName: student.name,
        studentEmail: student.email,
        status: status,
        submittedAt: status === 'Not Submitted' ? '-' : '2024-05-10 14:30',
        grade: status === 'Graded' ? Math.floor(Math.random() * 20 + 80) : '-'
      }
    })
  }

  const assignmentDetailsColumns = [
    { header: 'Student Name', accessor: 'studentName', sortable: true, filterable: true },
    { header: 'Email', accessor: 'studentEmail', sortable: true, filterable: true },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      align: 'center',
      render: (item) => {
        let badgeClass = 'badge-secondary'
        if (item.status === 'Submitted') badgeClass = 'badge-info'
        if (item.status === 'Late') badgeClass = 'badge-warning'
        if (item.status === 'Graded') badgeClass = 'badge-success'
        if (item.status === 'Not Submitted') badgeClass = 'badge-danger' // Assuming you have a danger badge, or use inline style

        const style = item.status === 'Not Submitted' ? { background: '#fee2e2', color: '#ef4444' } : {}

        return (
          <span className={`badge ${badgeClass}`} style={style}>
            {item.status}
          </span>
        )
      }
    },
    { header: 'Submitted At', accessor: 'submittedAt', align: 'center' },
    {
      header: 'Grade',
      accessor: 'grade',
      align: 'center',
      render: (item) => <span style={{ fontWeight: '600', color: item.grade !== '-' ? 'var(--fpt-orange)' : 'inherit' }}>{item.grade}</span>
    }
  ]

  return (
    <div style={{ height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div className="dashboard-header" style={{ marginBottom: '16px', flexShrink: 0 }}>
        <div className="dashboard-welcome">
          <h1>My Classes</h1>
          <p>Manage your classes and track student performance.</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px', flex: 1, overflow: 'hidden' }}>
        {/* Left Panel: Class List */}
        <div style={{ width: '350px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto', paddingRight: '8px' }}>
          <div className="search-bar" style={{ width: '100%' }}>
            <FiSearch />
            <input type="text" placeholder="Search classes..." />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {classes.map(classItem => (
              <div
                key={classItem.id}
                onClick={() => setSelectedClassId(classItem.id)}
                style={{
                  padding: '16px',
                  background: selectedClassId === classItem.id ? 'var(--white)' : 'var(--gray-50)',
                  border: selectedClassId === classItem.id ? '1px solid var(--fpt-orange)' : '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: selectedClassId === classItem.id ? '0 4px 12px rgba(243, 112, 33, 0.1)' : 'none',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--fpt-orange)', background: 'rgba(243, 112, 33, 0.1)', padding: '2px 8px', borderRadius: '12px' }}>
                    {classItem.code}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{classItem.semester}</span>
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px', color: 'var(--gray-900)' }}>{classItem.name}</h3>
                <p style={{ fontSize: '13px', color: 'var(--gray-600)', marginBottom: '12px' }}>{classItem.section}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--gray-200)', paddingTop: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--gray-600)' }}>
                    <FiUsers size={14} />
                    <span>{classItem.students} Students</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--gray-600)' }}>
                    <FiBarChart size={14} />
                    <span>Avg: {classItem.avgGrade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Class Details */}
        <div style={{ flex: 1, background: 'var(--white)', borderRadius: 'var(--radius)', border: '1px solid var(--gray-200)', padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', borderBottom: '1px solid var(--gray-200)', paddingBottom: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--gray-900)' }}>{selectedClass.name}</h2>
                <span className="badge badge-orange">{selectedClass.status}</span>
              </div>
              <p style={{ fontSize: '16px', color: 'var(--gray-600)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiBook /> {selectedClass.code} • {selectedClass.section}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', color: 'var(--gray-600)', marginBottom: '4px' }}>Schedule</div>
              <div style={{ fontSize: '16px', fontWeight: '500' }}>{selectedClass.schedule}</div>
              <div style={{ fontSize: '14px', color: 'var(--gray-600)', marginTop: '4px' }}>{selectedClass.room}</div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid var(--gray-200)', marginBottom: '24px' }}>
            <button
              onClick={() => setActiveTab('roster')}
              style={{
                padding: '0 0 12px 0',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'roster' ? '2px solid var(--fpt-orange)' : '2px solid transparent',
                color: activeTab === 'roster' ? 'var(--fpt-orange)' : 'var(--gray-600)',
                fontWeight: activeTab === 'roster' ? '600' : '400',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Student Roster
            </button>
            <button
              onClick={() => setActiveTab('assignments')}
              style={{
                padding: '0 0 12px 0',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'assignments' ? '2px solid var(--fpt-orange)' : '2px solid transparent',
                color: activeTab === 'assignments' ? 'var(--fpt-orange)' : 'var(--gray-600)',
                fontWeight: activeTab === 'assignments' ? '600' : '400',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Assignments
            </button>
            <button
              onClick={() => setActiveTab('grading')}
              style={{
                padding: '0 0 12px 0',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'grading' ? '2px solid var(--fpt-orange)' : '2px solid transparent',
                color: activeTab === 'grading' ? 'var(--fpt-orange)' : 'var(--gray-600)',
                fontWeight: activeTab === 'grading' ? '600' : '400',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              Grading
              {classSubmissions.length > 0 && (
                <span style={{ background: 'var(--fpt-orange)', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '10px' }}>
                  {classSubmissions.length}
                </span>
              )}
            </button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {activeTab === 'roster' && (
              <DataTable
                title="Student Roster"
                data={studentsList}
                columns={studentColumns}
                onImport={() => alert('Import Excel clicked')}
                selectable={true}
              />
            )}

            {activeTab === 'assignments' && (
              <div>
                <div className="section-header" style={{ marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '18px' }}>Assignments</h3>
                  <button className="btn btn-primary" style={{ fontSize: '13px' }}>
                    <FiPlus size={14} style={{ marginRight: '4px' }} /> Create
                  </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {assignmentsList.map(assignment => (
                    <div
                      key={assignment.id}
                      onClick={() => setSelectedAssignment(assignment)}
                      style={{
                        padding: '16px',
                        border: '1px solid var(--gray-200)',
                        borderRadius: 'var(--radius)',
                        background: 'var(--gray-50)',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--fpt-orange)'
                        e.currentTarget.style.background = 'var(--white)'
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gray-200)'
                        e.currentTarget.style.background = 'var(--gray-50)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--gray-900)' }}>{assignment.title}</div>
                        <FiFileText className="text-gray-400" />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--gray-600)', marginBottom: '12px' }}>
                        <span>Submitted: {assignment.submitted}/{assignment.total}</span>
                        <span>Avg: {assignment.avgGrade}</span>
                      </div>
                      <div className="progress-bar" style={{ height: '4px', background: 'var(--gray-200)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: `${(assignment.submitted / assignment.total) * 100}%`, height: '100%', background: 'var(--fpt-orange)' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'grading' && (
              <DataTable
                title="Pending Grading"
                data={classSubmissions}
                columns={gradingColumns}
                selectable={true}
              />
            )}
          </div>
        </div>
      </div>

      {/* Full Screen Modal for Assignment Details */}
      {selectedAssignment && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '40px'
        }}>
          <div style={{
            background: 'var(--white)',
            width: '100%',
            height: '100%',
            borderRadius: 'var(--radius)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
          }}>
            <div style={{
              padding: '24px',
              borderBottom: '1px solid var(--gray-200)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'var(--gray-50)'
            }}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--gray-900)', marginBottom: '4px' }}>{selectedAssignment.title}</h2>
                <p style={{ color: 'var(--gray-600)', fontSize: '14px' }}>{selectedClass.code} • {selectedClass.name}</p>
              </div>
              <button
                onClick={() => setSelectedAssignment(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
              >
                <FiX size={24} color="var(--gray-600)" />
              </button>
            </div>

            <div style={{ flex: 1, padding: '24px', overflowY: 'auto', background: 'var(--white)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '32px' }}>
                <div className="stat-card" style={{ padding: '20px' }}>
                  <div style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '8px' }}>Total Students</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--gray-900)' }}>{selectedAssignment.total}</div>
                </div>
                <div className="stat-card" style={{ padding: '20px' }}>
                  <div style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '8px' }}>Submitted</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--success)' }}>{selectedAssignment.submitted}</div>
                </div>
                <div className="stat-card" style={{ padding: '20px' }}>
                  <div style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '8px' }}>Pending</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--warning)' }}>{selectedAssignment.total - selectedAssignment.submitted}</div>
                </div>
                <div className="stat-card" style={{ padding: '20px' }}>
                  <div style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '8px' }}>Average Grade</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--fpt-orange)' }}>{selectedAssignment.avgGrade}</div>
                </div>
              </div>

              <DataTable
                title="Submission Status"
                data={getAssignmentDetails(selectedAssignment.id)}
                columns={assignmentDetailsColumns}
                selectable={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeacherClasses
