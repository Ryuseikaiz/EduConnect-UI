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
import TeacherGrading from './components/TeacherGrading'
import TeacherAnalytics from './components/TeacherAnalytics'

// Admin Components
import AdminDashboard from './components/AdminDashboard'
import AdminUsers from './components/AdminUsers'
import AdminCourses from './components/AdminCourses'
import AdminReports from './components/AdminReports'

// Detail Pages
import CourseDetails from './components/CourseDetails'
import ClassDetails from './components/ClassDetails'
import AssignmentDetails from './components/AssignmentDetails'
import StudentProfile from './components/StudentProfile'
import QuizTest from './components/QuizTest'

function App() {
  const [currentView, setCurrentView] = useState('student') // student, teacher, admin, login
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedClass, setSelectedClass] = useState(null)
  const [selectedAssignment, setSelectedAssignment] = useState(null)
  const [showProfile, setShowProfile] = useState(false)
  const [activeQuiz, setActiveQuiz] = useState(null)

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
    if (selectedClass) return <ClassDetails classItem={selectedClass} onBack={() => setSelectedClass(null)} />
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
        case 'classes': return <TeacherClasses onSelectClass={setSelectedClass} />
        case 'grading': return <TeacherGrading />
        case 'analytics': return <TeacherAnalytics />
        default: return <TeacherDashboard />
      }
    }

    // Admin screens
    if (currentView === 'admin') {
      switch (activeMenu) {
        case 'dashboard': return <AdminDashboard />
        case 'users': return <AdminUsers />
        case 'courses': return <AdminCourses />
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
          setActiveMenu={(menu) => {
            setActiveMenu(menu)
            // Reset detail pages when changing menu
            setSelectedCourse(null)
            setSelectedClass(null)
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
