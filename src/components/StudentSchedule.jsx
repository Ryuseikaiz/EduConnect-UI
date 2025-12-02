import { FiSearch, FiCalendar, FiClock, FiMapPin, FiAlertCircle } from 'react-icons/fi'

function StudentSchedule() {
  const upcomingExams = [
    {
      id: 1,
      course: 'Database Systems',
      code: 'DBS202',
      type: 'Midterm Exam',
      date: '2024-05-15',
      time: '8:00 AM - 10:00 AM',
      room: 'Hall A - Room 301',
      duration: '120 minutes',
      status: 'upcoming',
      daysLeft: 3
    },
    {
      id: 2,
      course: 'Web Development',
      code: 'WEB301',
      type: 'Final Project Presentation',
      date: '2024-05-18',
      time: '2:00 PM - 4:00 PM',
      room: 'Room 205',
      duration: '120 minutes',
      status: 'upcoming',
      daysLeft: 6
    },
    {
      id: 3,
      course: 'Software Engineering',
      code: 'SWE101',
      type: 'Final Exam',
      date: '2024-05-22',
      time: '9:00 AM - 11:30 AM',
      room: 'Hall B - Room 402',
      duration: '150 minutes',
      status: 'upcoming',
      daysLeft: 10
    },
    {
      id: 4,
      course: 'Mobile App Development',
      code: 'MAD401',
      type: 'Final Exam',
      date: '2024-05-25',
      time: '1:00 PM - 3:30 PM',
      room: 'Hall A - Room 108',
      duration: '150 minutes',
      status: 'upcoming',
      daysLeft: 13
    }
  ]

  const pastExams = [
    {
      id: 5,
      course: 'Data Structures',
      code: 'DSA201',
      type: 'Final Exam',
      date: '2024-04-20',
      score: 94,
      grade: 'A'
    },
    {
      id: 6,
      course: 'Algorithms',
      code: 'ALG301',
      type: 'Midterm Exam',
      date: '2024-04-10',
      score: 88,
      grade: 'B+'
    }
  ]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>Exam Schedule</h1>
          <p>View your upcoming exams and past results.</p>
        </div>
        <div className="search-bar">
          <FiSearch />
          <input type="text" placeholder="Search exams..." />
        </div>
      </div>

      {/* Alert Banner */}
      <div style={{ 
        background: '#FEF3C7', 
        border: '1px solid #F59E0B', 
        borderRadius: 'var(--radius-md)', 
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px'
      }}>
        <FiAlertCircle size={20} color="#F59E0B" />
        <div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#92400E', marginBottom: '2px' }}>
            Upcoming Exam Alert
          </div>
          <div style={{ fontSize: '13px', color: '#92400E' }}>
            You have a midterm exam in 3 days. Make sure to prepare and arrive 15 minutes early.
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2>Upcoming Exams</h2>
          <button className="btn btn-primary" style={{ fontSize: '13px', padding: '8px 16px' }}>
            Notify me
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {upcomingExams.map(exam => (
            <div key={exam.id} className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--gray-900)' }}>
                      {exam.course}
                    </h3>
                    <span className="badge badge-orange">{exam.code}</span>
                    <span className="badge badge-info">{exam.type}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FiCalendar size={16} color="var(--gray-500)" />
                      <div>
                        <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>Date</div>
                        <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>
                          {new Date(exam.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FiClock size={16} color="var(--gray-500)" />
                      <div>
                        <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>Time</div>
                        <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>
                          {exam.time}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FiMapPin size={16} color="var(--gray-500)" />
                      <div>
                        <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>Location</div>
                        <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>
                          {exam.room}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ 
                    background: 'var(--fpt-orange-bg)', 
                    color: 'var(--fpt-orange)', 
                    padding: '8px 16px', 
                    borderRadius: 'var(--radius-md)',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    In {exam.daysLeft} days
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginTop: '8px' }}>
                    Duration: {exam.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2>Past Exams</h2>
          <a href="#">View All Results</a>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Course</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Code</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Type</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Date</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Score</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {pastExams.map(exam => (
                <tr key={exam.id} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: '500', color: 'var(--gray-900)' }}>{exam.course}</td>
                  <td style={{ padding: '16px', fontSize: '13px', color: 'var(--gray-600)' }}>{exam.code}</td>
                  <td style={{ padding: '16px', fontSize: '13px', color: 'var(--gray-600)' }}>{exam.type}</td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '13px', color: 'var(--gray-600)' }}>
                    {new Date(exam.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: '600', color: 'var(--fpt-orange)' }}>{exam.score}</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <span className="badge badge-success">{exam.grade}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default StudentSchedule
