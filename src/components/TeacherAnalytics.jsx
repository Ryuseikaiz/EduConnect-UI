import { FiTrendingUp, FiUsers, FiAward, FiActivity } from 'react-icons/fi'
import DataTable from './common/DataTable'

function TeacherAnalytics() {
  const performanceData = [
    { course: 'SWE101', avgGrade: 84, passRate: 92 },
    { course: 'DBS202', avgGrade: 79, passRate: 85 },
    { course: 'WEB301', avgGrade: 87, passRate: 95 }
  ]

  const columns = [
    {
      header: 'Course',
      accessor: 'course',
      sortable: true,
      render: (item) => <span className="badge badge-info">{item.course}</span>
    },
    {
      header: 'Avg. Grade',
      accessor: 'avgGrade',
      sortable: true,
      align: 'center',
      render: (item) => <span style={{ fontSize: '16px', fontWeight: '600', color: 'var(--fpt-orange)' }}>{item.avgGrade}</span>
    },
    {
      header: 'Pass Rate',
      accessor: 'passRate',
      sortable: true,
      align: 'center',
      render: (item) => <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--success)' }}>{item.passRate}%</span>
    }
  ]

  return (
    <div style={{ padding: '24px' }}>
      <div className="dashboard-header" style={{ marginBottom: '24px' }}>
        <div className="dashboard-welcome">
          <h1>Analytics</h1>
          <p>Track student performance and course statistics.</p>
        </div>
      </div>

      <DataTable
        title="Course Performance Overview"
        data={performanceData}
        columns={columns}
        onImport={() => alert('Export Report clicked')}
        importLabel="Export Report"
        selectable={false}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
        <div className="section">
          <div className="section-header">
            <h2>Grade Distribution</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { grade: 'A (90-100)', count: 28, percentage: 22 },
              { grade: 'B (80-89)', count: 45, percentage: 36 },
              { grade: 'C (70-79)', count: 35, percentage: 28 },
              { grade: 'D (60-69)', count: 12, percentage: 10 },
              { grade: 'F (0-59)', count: 5, percentage: 4 }
            ].map(item => (
              <div key={item.grade}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-700)' }}>{item.grade}</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--gray-900)' }}>
                    {item.count} students ({item.percentage}%)
                  </span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Top Performers</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: 'Nguyen Van A', course: 'SWE101', grade: 98 },
              { name: 'Tran Thi B', course: 'WEB301', grade: 96 },
              { name: 'Le Van C', course: 'DBS202', grade: 95 },
              { name: 'Pham Thi D', course: 'SWE101', grade: 94 },
              { name: 'Hoang Van E', course: 'WEB301', grade: 93 }
            ].map((student, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'var(--gray-50)', borderRadius: 'var(--radius)' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{student.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{student.course}</div>
                </div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--fpt-orange)' }}>{student.grade}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherAnalytics
