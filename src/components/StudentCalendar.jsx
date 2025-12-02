import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiClock, FiMapPin, FiUser } from 'react-icons/fi'
import './StudentCalendar.css'

function StudentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)

  // Sample schedule data
  const scheduleData = {
    '2024-05-09': [
      { time: '08:00 - 10:00', subject: 'Software Engineering', room: 'A101', teacher: 'Dr. Nguyen Van A' },
      { time: '13:00 - 15:00', subject: 'Database Systems', room: 'B205', teacher: 'Dr. Tran Thi B' }
    ],
    '2024-05-13': [
      { time: '09:00 - 11:00', subject: 'Web Development', room: 'C302', teacher: 'Dr. Le Van C' }
    ],
    '2024-05-16': [
      { time: '08:00 - 10:00', subject: 'Software Engineering', room: 'A101', teacher: 'Dr. Nguyen Van A' },
      { time: '10:00 - 12:00', subject: 'Data Structures', room: 'A203', teacher: 'Dr. Pham Thi D' }
    ]
  }

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
  
  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDay - i)
      })
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)
      const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
      days.push({
        day: i,
        isCurrentMonth: true,
        date: date,
        hasSchedule: !!scheduleData[dateKey],
        dateKey: dateKey
      })
    }

    // Next month days
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      })
    }

    return days
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
    setSelectedDate(null)
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
    setSelectedDate(null)
  }

  const handleDateClick = (dayObj) => {
    if (dayObj.isCurrentMonth) {
      setSelectedDate(dayObj.dateKey)
    }
  }

  const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear()
  }

  const days = getDaysInMonth(currentDate)
  const selectedSchedule = selectedDate ? scheduleData[selectedDate] : null

  return (
    <div className="calendar-container">
      <div className="calendar-section">
        <div className="calendar-header">
          <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
          <div className="calendar-nav">
            <button onClick={handlePrevMonth} className="nav-btn">
              <FiChevronLeft size={20} />
            </button>
            <button onClick={handleNextMonth} className="nav-btn">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="calendar-grid">
          {dayNames.map(day => (
            <div key={day} className="calendar-day-name">{day}</div>
          ))}
          
          {days.map((dayObj, index) => (
            <div
              key={index}
              className={`calendar-day ${!dayObj.isCurrentMonth ? 'other-month' : ''} 
                         ${isToday(dayObj.date) ? 'today' : ''} 
                         ${selectedDate === dayObj.dateKey ? 'selected' : ''}
                         ${dayObj.hasSchedule ? 'has-schedule' : ''}`}
              onClick={() => handleDateClick(dayObj)}
            >
              <span className="day-number">{dayObj.day}</span>
              {dayObj.hasSchedule && <div className="schedule-dot"></div>}
            </div>
          ))}
        </div>
      </div>

      {selectedSchedule && (
        <div className="schedule-details">
          <h3>Schedule for {selectedDate}</h3>
          <div className="schedule-list">
            {selectedSchedule.map((item, index) => (
              <div key={index} className="schedule-item">
                <div className="schedule-time">
                  <FiClock size={16} />
                  <span>{item.time}</span>
                </div>
                <div className="schedule-subject">{item.subject}</div>
                <div className="schedule-info">
                  <div className="info-item">
                    <FiMapPin size={14} />
                    <span>Room {item.room}</span>
                  </div>
                  <div className="info-item">
                    <FiUser size={14} />
                    <span>{item.teacher}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!selectedSchedule && selectedDate && (
        <div className="schedule-details">
          <h3>Schedule for {selectedDate}</h3>
          <div className="no-schedule">
            <p>No classes scheduled for this day</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentCalendar
