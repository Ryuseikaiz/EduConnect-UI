import { FiArrowLeft, FiClock, FiAlertCircle } from 'react-icons/fi'
import { useState, useEffect } from 'react'

function QuizTest({ quiz, onBack, onSubmit }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeRemaining, setTimeRemaining] = useState(5400) // 90 minutes in seconds
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set())

  const questions = [
    {
      id: 1,
      question: 'Which of the following is a principle of object-oriented programming?',
      options: ['A. Inheritance', 'B. Scalability', 'C. Recursion', 'D. Normalization']
    },
    {
      id: 2,
      question: 'What is the time complexity of binary search?',
      options: ['A. O(n)', 'B. O(log n)', 'C. O(n²)', 'D. O(1)']
    },
    // Add more questions as needed
    ...Array.from({ length: 48 }, (_, i) => ({
      id: i + 3,
      question: `Sample question ${i + 3}?`,
      options: ['A. Option 1', 'B. Option 2', 'C. Option 3', 'D. Option 4']
    }))
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return { hours, minutes, seconds: secs }
  }

  const time = formatTime(timeRemaining)

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer })
  }

  const toggleFlag = (questionId) => {
    const newFlagged = new Set(flaggedQuestions)
    if (newFlagged.has(questionId)) {
      newFlagged.delete(questionId)
    } else {
      newFlagged.add(questionId)
    }
    setFlaggedQuestions(newFlagged)
  }

  const handleSubmit = () => {
    if (window.confirm('Are you sure you want to submit the exam?')) {
      onSubmit?.(answers)
    }
  }

  const currentQ = questions[currentQuestion]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <button onClick={onBack} className="btn btn-secondary" style={{ marginBottom: '12px' }}>
            <FiArrowLeft size={16} /> Exit Quiz
          </button>
          <h1>{quiz?.title || 'Midterm Exam - Software Engineering'}</h1>
          <p>{quiz?.course || 'SWE101'}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px' }}>
        {/* Question Area */}
        <div className="section">
          <div style={{ marginBottom: '24px', padding: '16px', background: 'var(--fpt-orange-bg)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--fpt-orange)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--fpt-orange)', fontWeight: '600', marginBottom: '4px' }}>
              <FiAlertCircle size={16} />
              AI Supervision: Active
            </div>
            <div style={{ fontSize: '13px', color: 'var(--gray-700)' }}>
              System is monitoring your camera, microphone, and screen.
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              {currentQ.question}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {currentQ.options.map((option, idx) => (
                <label
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    border: `2px solid ${answers[currentQ.id] === option ? 'var(--fpt-orange)' : 'var(--gray-200)'}`,
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    background: answers[currentQ.id] === option ? 'var(--fpt-orange-bg)' : 'var(--white)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <input
                    type="radio"
                    name={`question-${currentQ.id}`}
                    checked={answers[currentQ.id] === option}
                    onChange={() => handleAnswer(currentQ.id, option)}
                    style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '15px' }}>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '24px', borderTop: '1px solid var(--gray-200)' }}>
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="btn btn-secondary"
            >
              Previous
            </button>
            <button
              onClick={() => toggleFlag(currentQ.id)}
              className={flaggedQuestions.has(currentQ.id) ? 'btn btn-primary' : 'btn btn-secondary'}
            >
              {flaggedQuestions.has(currentQ.id) ? 'Unflag' : 'Flag for Review'}
            </button>
            <button
              onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
              disabled={currentQuestion === questions.length - 1}
              className="btn btn-primary"
            >
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Timer */}
          <div className="section" style={{ marginBottom: '16px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: 'var(--gray-600)', marginBottom: '12px' }}>Time Remaining</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--fpt-orange)' }}>
                    {String(time.hours).padStart(2, '0')}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--gray-500)' }}>Hours</div>
                </div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--gray-400)' }}>:</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--fpt-orange)' }}>
                    {String(time.minutes).padStart(2, '0')}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--gray-500)' }}>Minutes</div>
                </div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--gray-400)' }}>:</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--fpt-orange)' }}>
                    {String(time.seconds).padStart(2, '0')}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--gray-500)' }}>Seconds</div>
                </div>
              </div>
            </div>
          </div>

          {/* Question Navigator */}
          <div className="section">
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>Question Navigator</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
              {questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestion(idx)}
                  style={{
                    padding: '8px',
                    border: 'none',
                    borderRadius: 'var(--radius)',
                    background: 
                      currentQuestion === idx ? 'var(--fpt-orange)' :
                      flaggedQuestions.has(q.id) ? '#FFA500' :
                      answers[q.id] ? '#3B82F6' : 'var(--gray-200)',
                    color: (currentQuestion === idx || answers[q.id] || flaggedQuestions.has(q.id)) ? 'var(--white)' : 'var(--gray-700)',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '600',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <div style={{ marginTop: '16px', fontSize: '12px', color: 'var(--gray-600)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <div style={{ width: '16px', height: '16px', background: '#3B82F6', borderRadius: '4px' }}></div>
                <span>Answered</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <div style={{ width: '16px', height: '16px', background: '#FFA500', borderRadius: '4px' }}></div>
                <span>Flagged</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '16px', height: '16px', background: 'var(--gray-200)', borderRadius: '4px' }}></div>
                <span>Not Answered</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '16px', fontSize: '15px', padding: '14px' }}
          >
            Submit Exam
          </button>
        </div>
      </div>
    </>
  )
}

export default QuizTest
