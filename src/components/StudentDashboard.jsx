import { FiSearch, FiFileText, FiClipboard, FiAward, FiChevronLeft, FiChevronRight, FiBook, FiAlertCircle, FiBell, FiCalendar } from 'react-icons/fi'
import { useState, useEffect } from 'react'

function StudentDashboard() {
  const [progressAnimated, setProgressAnimated] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)

  useEffect(() => {
    setTimeout(() => setProgressAnimated(true), 100)
  }, [])

  // Sample schedule data for calendar
  const scheduleData = {
    '2024-05-13': [
      { time: '09:00 - 11:00', subject: 'Web Development', room: 'C302', teacher: 'Dr. Le Van C' }
    ],
    '2024-05-09': [
      { time: '08:00 - 10:00', subject: 'Software Engineering', room: 'A101', teacher: 'Dr. Nguyen Van A' },
      { time: '13:00 - 15:00', subject: 'Database Systems', room: 'B205', teacher: 'Dr. Tran Thi B' }
    ]
  }

  const announcements = [
    {
      id: 1,
      category: 'University News',
      title: 'Important Update on Final Exam Schedules',
      description: 'Please note that the final exam schedule for the Fall 2024 semester has been updated. Check the Exam Schedule page for the latest details.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      category: 'Academic',
      title: 'New AI-Powered Study Tools Available',
      description: 'EduConnect now features AI-powered study assistants to help you prepare for exams and complete assignments more efficiently.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
    }
  ]

  const courses = [
    { id: 1, name: 'Software Engineering', code: 'SWE101', progress: 75 },
    { id: 2, name: 'Database Systems', code: 'DBS202', progress: 40 },
    { id: 3, name: 'Web Development', code: 'WEB301', progress: 60 }
  ]

  const deadlines = [
    { id: 1, title: 'SWE101 Assignment 2', due: 'Tomorrow, 11:59 PM', icon: FiFileText },
    { id: 2, title: 'DBS202 Midterm Quiz', due: 'In 3 days', icon: FiClipboard },
    { id: 3, title: 'WEB301 Project Proposal', due: 'Next Monday', icon: FiAward }
  ]

  const [currentMonth, setCurrentMonth] = useState('May 2024')
  const calendarDays = [
    { day: 28, otherMonth: true },
    { day: 29, otherMonth: true },
    { day: 30, otherMonth: true },
    { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 },
    { day: 5 }, { day: 6 }, { day: 7 }, { day: 8 },
    { day: 9, today: true, date: '2024-05-09' }, { day: 10 }, { day: 11 },
    { day: 12 }, { day: 13, hasEvent: true, date: '2024-05-13' }, { day: 14 }, { day: 15 },
    { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 },
    { day: 20 }, { day: 21 }, { day: 22 }, { day: 23 },
    { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 },
    { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 },
    { day: 1, otherMonth: true }
  ]

  const handleDateClick = (dayObj) => {
    if (!dayObj.otherMonth && dayObj.date) {
      setSelectedDate(dayObj.date)
    }
  }

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>Welcome back, An!</h1>
          <p>Here's a summary of your academic activities.</p>
        </div>
        <div className="search-bar">
          <FiSearch />
          <input type="text" placeholder="Search courses, forums, users..." />
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-main">
          {/* Announcements */}
          <div className="section">
            <div className="section-header">
              <h2>Announcements</h2>
              <a href="#">View All</a>
            </div>
            {announcements.map(announcement => (
              <div key={announcement.id} className="announcement-card">
                <img src={announcement.image} alt={announcement.title} className="announcement-image" />
                <div className="announcement-content">
                  <div className="announcement-meta">
                    <span className="badge badge-orange">{announcement.category}</span>
                  </div>
                  <h3>{announcement.title}</h3>
                  <p>{announcement.description}</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            ))}
          </div>

          {/* My Courses */}
          <div className="section">
            <div className="section-header">
              <h2>My Courses</h2>
              <a href="#">View All</a>
            </div>
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-header">
                  <div className="course-icon">
                    <FiBook size={24} />
                  </div>
                  <div className="course-info">
                    <h3>{course.name}</h3>
                    <p>{course.code}</p>
                  </div>
                </div>
                <div className="course-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: progressAnimated ? `${course.progress}%` : '0%' }}
                    />
                  </div>
                  <span>{course.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-sidebar">
          {/* Notifications */}
          <div className="section">
            <div className="section-header">
              <h2>Notifications</h2>
              <span className="badge badge-error">2 new</span>
            </div>
            <div className="notification-item-dashboard unread">
              <div className="notification-icon-dashboard">
                <FiAlertCircle size={20} color="var(--fpt-orange)" />
              </div>
              <div className="notification-content-dashboard">
                <h4>Schedule Change</h4>
                <p>LAB class this week has been rescheduled to Friday 2PM</p>
                <span className="notification-time-dashboard">10 minutes ago</span>
              </div>
            </div>
            <div className="notification-item-dashboard unread">
              <div className="notification-icon-dashboard">
                <FiBell size={20} color="var(--fpt-orange)" />
              </div>
              <div className="notification-content-dashboard">
                <h4>Assignment Reminder</h4>
                <p>Software Engineering assignment due tomorrow</p>
                <span className="notification-time-dashboard">2 hours ago</span>
              </div>
            </div>
            <div className="notification-item-dashboard">
              <div className="notification-icon-dashboard">
                <FiCalendar size={20} color="var(--gray-500)" />
              </div>
              <div className="notification-content-dashboard">
                <h4>Exam Schedule Posted</h4>
                <p>Midterm exam schedule is now available</p>
                <span className="notification-time-dashboard">1 day ago</span>
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="section">
            <div className="section-header">
              <h2>Upcoming Deadlines</h2>
            </div>
            {deadlines.map(deadline => {
              const Icon = deadline.icon
              return (
                <div key={deadline.id} className="deadline-item">
                  <div className="deadline-icon">
                    <Icon />
                  </div>
                  <div className="deadline-content">
                    <h4>{deadline.title}</h4>
                    <p>Due: {deadline.due}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Calendar */}
          <div className="section">
            <div className="calendar-header">
              <h3>{currentMonth}</h3>
              <div className="calendar-nav">
                <button><FiChevronLeft size={16} /></button>
                <button><FiChevronRight size={16} /></button>
              </div>
            </div>
            <div className="calendar-grid">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="calendar-day-label">{day}</div>
              ))}
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`calendar-day ${day.otherMonth ? 'other-month' : ''} ${day.today ? 'today' : ''} ${day.hasEvent ? 'has-event' : ''}`}
                  onClick={() => handleDateClick(day)}
                  style={{ cursor: day.otherMonth ? 'default' : 'pointer' }}
                >
                  {day.day}
                </div>
              ))}
            </div>

            {/* Schedule Modal */}
            {selectedDate && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000
              }} onClick={() => setSelectedDate(null)}>
                <div style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  maxWidth: '500px',
                  width: '90%'
                }} onClick={(e) => e.stopPropagation()}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Schedule for {selectedDate}</h3>
                    <button onClick={() => setSelectedDate(null)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>×</button>
                  </div>
                  {scheduleData[selectedDate] ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {scheduleData[selectedDate].map((item, idx) => (
                        <div key={idx} style={{ padding: '16px', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--fpt-orange)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--fpt-orange)', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                            <FiClock size={16} />
                            <span>{item.time}</span>
                          </div>
                          <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{item.subject}</div>
                          <div style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Room {item.room} • {item.teacher}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--gray-500)' }}>No classes scheduled</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentDashboard
