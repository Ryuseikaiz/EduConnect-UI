import { FiArrowLeft, FiBook, FiUsers, FiClock, FiFileText, FiDownload, FiPlay, FiUpload, FiCheckCircle } from 'react-icons/fi'

function CourseDetails({ course, onBack, onStartQuiz, onSelectAssignment }) {
  const materials = [
    { id: 1, title: 'Week 1: Introduction to Software Engineering', type: 'Lecture', date: '2024-05-01', downloadable: true },
    { id: 2, title: 'Assignment 1: Requirements Analysis', type: 'Assignment', date: '2024-05-03', due: '2024-05-10', submitted: true },
    { id: 3, title: 'Week 2: Design Patterns', type: 'Lecture', date: '2024-05-08', downloadable: true },
    { id: 4, title: 'Lab 1: UML Diagrams', type: 'Lab', date: '2024-05-10', downloadable: true },
    { id: 5, title: 'Assignment 2: Design Patterns', type: 'Assignment', date: '2024-05-10', due: '2024-05-17', submitted: false }
  ]

  const progressTests = [
    { id: 1, title: 'Quiz 1: OOP Fundamentals', questions: 20, duration: 30, status: 'completed', score: 85 },
    { id: 2, title: 'Midterm Exam', questions: 50, duration: 90, status: 'available', score: null },
    { id: 3, title: 'Quiz 2: Design Patterns', questions: 15, duration: 20, status: 'locked', score: null }
  ]

  const announcements = [
    { id: 1, title: 'Midterm Exam Schedule', content: 'The midterm exam will be held on May 15, 2024', date: '2 days ago' },
    { id: 2, title: 'Assignment 2 Posted', content: 'New assignment on Design Patterns is now available', date: '1 week ago' }
  ]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <button onClick={onBack} className="btn btn-secondary" style={{ marginBottom: '12px' }}>
            <FiArrowLeft size={16} /> Back to Courses
          </button>
          <h1>{course?.name || 'Software Engineering'}</h1>
          <p>{course?.code || 'SWE101'} • {course?.instructor || 'Prof. Nguyen Van A'}</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-main">
          {/* Assignments */}
          <div className="section">
            <div className="section-header">
              <h2>Assignments</h2>
            </div>
            {materials.filter(m => m.type === 'Assignment').map(material => (
              <div key={material.id} className="deadline-item" style={{ marginBottom: '12px', padding: '16px', background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)' }}>
                <div className="deadline-icon">
                  <FiFileText />
                </div>
                <div className="deadline-content" style={{ flex: 1 }}>
                  <h4>{material.title}</h4>
                  <p>
                    <span className="badge badge-orange">{material.type}</span>
                    {material.due && <span style={{ marginLeft: '8px', fontSize: '12px', color: 'var(--gray-500)' }}>Due: {material.due}</span>}
                    {material.submitted && <span style={{ marginLeft: '8px' }}><FiCheckCircle size={14} color="var(--success)" /></span>}
                  </p>
                </div>
                {material.submitted ? (
                  <button className="btn btn-secondary" style={{ fontSize: '13px' }} onClick={() => onSelectAssignment?.(material)}>
                    View Submission
                  </button>
                ) : (
                  <button className="btn btn-primary" style={{ fontSize: '13px' }} onClick={() => onSelectAssignment?.(material)}>
                    <FiUpload size={14} /> Submit
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Learning Materials */}
          <div className="section">
            <div className="section-header">
              <h2>Learning Materials</h2>
            </div>
            {materials.filter(m => m.type !== 'Assignment').map(material => (
              <div key={material.id} className="deadline-item" style={{ marginBottom: '12px', padding: '16px', background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)' }}>
                <div className="deadline-icon">
                  <FiBook />
                </div>
                <div className="deadline-content" style={{ flex: 1 }}>
                  <h4>{material.title}</h4>
                  <p>
                    <span className="badge badge-info">{material.type}</span>
                  </p>
                </div>
                <button className="btn btn-secondary" style={{ fontSize: '13px' }}>
                  <FiDownload size={14} /> Download
                </button>
              </div>
            ))}
          </div>

          {/* Progress Tests */}
          <div className="section">
            <div className="section-header">
              <h2>Progress Tests & Quizzes</h2>
            </div>
            {progressTests.map(test => (
              <div key={test.id} className="card" style={{ padding: '20px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>{test.title}</h3>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--gray-600)' }}>
                      <span>{test.questions} questions</span>
                      <span>{test.duration} minutes</span>
                    </div>
                  </div>
                  {test.status === 'completed' && (
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--success)' }}>{test.score}%</div>
                      <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>Completed</div>
                    </div>
                  )}
                </div>
                {test.status === 'available' ? (
                  <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => onStartQuiz?.(test)}>
                    <FiPlay size={16} /> Start Test
                  </button>
                ) : test.status === 'completed' ? (
                  <button className="btn btn-secondary" style={{ width: '100%' }}>
                    View Results
                  </button>
                ) : (
                  <button className="btn btn-secondary" style={{ width: '100%' }} disabled>
                    Locked
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Announcements */}
          <div className="section">
            <div className="section-header">
              <h2>Announcements</h2>
            </div>
            {announcements.map(announcement => (
              <div key={announcement.id} className="announcement-card" style={{ border: '1px solid var(--gray-200)', padding: '16px', marginBottom: '12px' }}>
                <div className="announcement-content">
                  <h3 style={{ fontSize: '16px' }}>{announcement.title}</h3>
                  <p style={{ fontSize: '14px' }}>{announcement.content}</p>
                  <span style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{announcement.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-sidebar">
          {/* Upcoming Deadlines */}
          <div className="section">
            <div className="section-header">
              <h2>Upcoming Deadlines</h2>
            </div>
            <div className="deadline-item">
              <div className="deadline-icon"><FiFileText /></div>
              <div className="deadline-content">
                <h4>Assignment 2</h4>
                <p>Due: Tomorrow</p>
              </div>
            </div>
            <div className="deadline-item">
              <div className="deadline-icon"><FiFileText /></div>
              <div className="deadline-content">
                <h4>Midterm Exam</h4>
                <p>Due: In 3 days</p>
              </div>
            </div>
          </div>

          {/* Course Info */}
          <div className="section">
            <div className="section-header">
              <h2>Course Info</h2>
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '12px' }}>
                <strong>Instructor:</strong><br />
                Prof. Nguyen Van A
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Schedule:</strong><br />
                Mon, Wed 8:00 AM - 10:00 AM
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Room:</strong><br />
                Room 301
              </div>
              <div>
                <strong>Credits:</strong><br />
                3 credits
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetails
