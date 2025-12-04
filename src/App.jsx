import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import TitleBar from './components/TitleBar'
import Sidebar from './components/Sidebar'

// Student Components
import StudentDashboard from './components/StudentDashboard'
import StudentCourses from './components/StudentCourses'
import StudentGrades from './components/StudentGrades'
import StudentSchedule from './components/StudentSchedule'
import StudentForums from './components/StudentForums'

// Teacher Components
import TeacherDashboard from './components/TeacherDashboard'
import TeacherClasses from './components/TeacherClasses'

import TeacherAnalytics from './components/TeacherAnalytics'

// Admin Components
import AdminDashboard from './components/AdminDashboard'
import AdminUsers from './components/AdminUsers'
import AdminStudents from './components/AdminStudents'
import AdminClasses from './components/AdminClasses'
import AdminTeachers from './components/AdminTeachers'
import AdminSettings from './components/AdminSettings'
import AdminCourses from './components/AdminCourses'
import AdminExams from './components/AdminExams'
import AdminDatabase from './components/AdminDatabase'
import AdminReports from './components/AdminReports'

// Detail Pages
import CourseDetails from './components/CourseDetails'
import AssignmentDetails from './components/AssignmentDetails'
import StudentProfile from './components/StudentProfile'
import QuizTest from './components/QuizTest'

function App() {
  const [currentView, setCurrentView] = useState('student') // student, teacher, admin, login
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedAssignment, setSelectedAssignment] = useState(null)
  const [showProfile, setShowProfile] = useState(false)
  const [activeQuiz, setActiveQuiz] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  // Show login screen when login view is selected
  if (currentView === 'login') {
    return (
      <div className="app-container">
        <TitleBar currentView={currentView} setCurrentView={setCurrentView} />
        <Login />
      </div>
    )
  }

  const renderDashboard = () => {
    // Quiz Test
    if (activeQuiz) return <QuizTest quiz={activeQuiz} onBack={() => setActiveQuiz(null)} onSubmit={(answers) => { console.log('Quiz submitted:', answers); setActiveQuiz(null); }} />

    // Detail Pages
    if (selectedCourse) return <CourseDetails course={selectedCourse} onBack={() => setSelectedCourse(null)} onStartQuiz={setActiveQuiz} onSelectAssignment={setSelectedAssignment} />
    if (selectedAssignment) return <AssignmentDetails assignment={selectedAssignment} onBack={() => setSelectedAssignment(null)} />
    if (showProfile) return <StudentProfile onBack={() => setShowProfile(false)} />

    // Student screens
    if (currentView === 'student') {
      switch (activeMenu) {
        case 'dashboard': return <StudentDashboard />
        case 'courses': return <StudentCourses onSelectCourse={setSelectedCourse} />
        case 'grades': return <StudentGrades />
        case 'schedule': return <StudentSchedule />
        case 'forums': return <StudentForums />

        default: return <StudentDashboard />
      }
    }

    // Teacher screens
    if (currentView === 'teacher') {
      switch (activeMenu) {
        case 'dashboard': return <TeacherDashboard />
        case 'classes': return <TeacherClasses />

        case 'analytics': return <TeacherAnalytics />
        default: return <TeacherDashboard />
      }
    }

    // Admin screens
    if (currentView === 'admin') {
      switch (activeMenu) {
        case 'dashboard': return <AdminDashboard />
        case 'students': return <AdminStudents />
        case 'classes': return <AdminClasses />
        case 'teachers': return <AdminTeachers />
        case 'settings': return <AdminSettings />
        case 'settings': return <AdminSettings />
        case 'courses': return <AdminCourses />
        case 'exams': return <AdminExams />
        case 'database': return <AdminDatabase />
        case 'reports': return <AdminReports />
        default: return <AdminDashboard />
      }
    }

    return <StudentDashboard />
  }

  return (
    <div className="app-container">
      <TitleBar
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      <div className="app-content">
        <Sidebar
          currentRole={currentView}
          activeMenu={activeMenu}
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          setActiveMenu={(menu) => {
            setActiveMenu(menu)
            // Reset detail pages when changing menu
            setSelectedCourse(null)
            setSelectedAssignment(null)
            setShowProfile(false)
          }}
        />
        <main className="main-content">
          {renderDashboard()}
        </main>
      </div>
    </div>
  )
}

export default App
