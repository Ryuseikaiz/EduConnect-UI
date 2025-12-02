import { FiArrowLeft, FiUpload, FiFile, FiCheckCircle, FiClock } from 'react-icons/fi'
import { useState } from 'react'

function AssignmentDetails({ assignment, onBack }) {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = () => {
    alert('Assignment submitted successfully!')
  }

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <button onClick={onBack} className="btn btn-secondary" style={{ marginBottom: '12px' }}>
            <FiArrowLeft size={16} /> Back
          </button>
          <h1>{assignment?.title || 'Assignment 2: Design Patterns'}</h1>
          <p>{assignment?.course || 'Software Engineering (SWE101)'}</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-main">
          {/* Assignment Description */}
          <div className="section">
            <div className="section-header">
              <h2>Assignment Description</h2>
            </div>
            <div style={{ lineHeight: '1.8', fontSize: '14px', color: 'var(--gray-700)' }}>
              <p style={{ marginBottom: '16px' }}>
                In this assignment, you will implement common design patterns in a software project. 
                You are required to demonstrate your understanding of at least 3 design patterns from the following list:
              </p>
              <ul style={{ marginLeft: '20px', marginBottom: '16px' }}>
                <li>Singleton Pattern</li>
                <li>Factory Pattern</li>
                <li>Observer Pattern</li>
                <li>Strategy Pattern</li>
                <li>Decorator Pattern</li>
              </ul>
              <p>
                Your submission should include source code, UML diagrams, and a report explaining your implementation choices.
              </p>
            </div>
          </div>

          {/* Grading Rubric */}
          <div className="section">
            <div className="section-header">
              <h2>Grading Rubric</h2>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: '600' }}>Criteria</th>
                  <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '600' }}>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--gray-100)' }}>
                  <td style={{ padding: '12px' }}>Code Implementation</td>
                  <td style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>40</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--gray-100)' }}>
                  <td style={{ padding: '12px' }}>UML Diagrams</td>
                  <td style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>30</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--gray-100)' }}>
                  <td style={{ padding: '12px' }}>Documentation & Report</td>
                  <td style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>20</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px' }}>Code Quality & Best Practices</td>
                  <td style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>10</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* File Upload */}
          <div className="section">
            <div className="section-header">
              <h2>Submit Assignment</h2>
            </div>
            <div style={{ 
              border: '2px dashed var(--gray-300)', 
              borderRadius: 'var(--radius-md)', 
              padding: '40px', 
              textAlign: 'center',
              background: 'var(--gray-50)'
            }}>
              <FiUpload size={48} color="var(--gray-400)" style={{ marginBottom: '16px' }} />
              <p style={{ fontSize: '14px', color: 'var(--gray-600)', marginBottom: '16px' }}>
                Drag and drop your files here or click to browse
              </p>
              <input 
                type="file" 
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="file-upload"
              />
              <label htmlFor="file-upload" className="btn btn-secondary" style={{ cursor: 'pointer' }}>
                Choose File
              </label>
              {file && (
                <div style={{ marginTop: '16px', padding: '12px', background: 'var(--white)', borderRadius: 'var(--radius)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <FiFile size={16} />
                  <span style={{ fontSize: '14px' }}>{file.name}</span>
                </div>
              )}
            </div>
            <button 
              onClick={handleSubmit} 
              className="btn btn-primary" 
              style={{ marginTop: '16px', width: '100%' }}
              disabled={!file}
            >
              Submit Assignment
            </button>
          </div>
        </div>

        <div className="dashboard-sidebar">
          {/* Assignment Info */}
          <div className="section">
            <div className="section-header">
              <h2>Assignment Info</h2>
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '16px', padding: '12px', background: 'var(--fpt-orange-bg)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--fpt-orange)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--fpt-orange)', fontWeight: '600', marginBottom: '4px' }}>
                  <FiClock size={16} />
                  Due Date
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700' }}>Tomorrow, 11:59 PM</div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Points:</strong><br />
                100 points
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Submission Type:</strong><br />
                File Upload
              </div>
              <div>
                <strong>Allowed Formats:</strong><br />
                .zip, .rar, .pdf
              </div>
            </div>
          </div>

          {/* Submission History */}
          <div className="section">
            <div className="section-header">
              <h2>Submission History</h2>
            </div>
            <div className="deadline-item">
              <div className="deadline-icon" style={{ background: 'var(--success-bg)' }}>
                <FiCheckCircle color="var(--success)" />
              </div>
              <div className="deadline-content">
                <h4>Submitted</h4>
                <p>May 10, 2024 10:30 AM</p>
              </div>
            </div>
            <div style={{ marginTop: '12px', padding: '12px', background: 'var(--gray-50)', borderRadius: 'var(--radius)', fontSize: '13px' }}>
              <strong>Grade:</strong> Not graded yet
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AssignmentDetails
