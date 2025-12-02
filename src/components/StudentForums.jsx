import { FiSearch, FiMessageSquare, FiThumbsUp, FiMessageCircle, FiClock } from 'react-icons/fi'

function StudentForums() {
  const forumCategories = [
    { id: 1, name: 'General Discussion', threads: 245, posts: 1823, color: 'orange' },
    { id: 2, name: 'Course Questions', threads: 189, posts: 1456, color: 'blue' },
    { id: 3, name: 'Study Groups', threads: 67, posts: 432, color: 'green' },
    { id: 4, name: 'Announcements', threads: 34, posts: 156, color: 'purple' }
  ]

  const recentThreads = [
    {
      id: 1,
      title: 'Help with Database Normalization Assignment',
      category: 'Course Questions',
      author: 'Nguyen Van A',
      replies: 12,
      likes: 8,
      lastActivity: '2 hours ago',
      isAnswered: true
    },
    {
      id: 2,
      title: 'Study Group for SWE101 Final Exam',
      category: 'Study Groups',
      author: 'Tran Thi B',
      replies: 24,
      likes: 15,
      lastActivity: '3 hours ago',
      isAnswered: false
    },
    {
      id: 3,
      title: 'Best Resources for Learning React?',
      category: 'General Discussion',
      author: 'Le Van C',
      replies: 31,
      likes: 22,
      lastActivity: '5 hours ago',
      isAnswered: true
    },
    {
      id: 4,
      title: 'Important: Final Exam Schedule Updated',
      category: 'Announcements',
      author: 'Admin',
      replies: 5,
      likes: 45,
      lastActivity: '1 day ago',
      isAnswered: false,
      isPinned: true
    },
    {
      id: 5,
      title: 'Tips for Mobile App Development Project',
      category: 'Course Questions',
      author: 'Pham Thi D',
      replies: 18,
      likes: 12,
      lastActivity: '1 day ago',
      isAnswered: true
    }
  ]

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>Forums</h1>
          <p>Discuss, ask questions, and collaborate with peers.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div className="search-bar">
            <FiSearch />
            <input type="text" placeholder="Search forums..." />
          </div>
          <button className="btn btn-primary">New Thread</button>
        </div>
      </div>

      {/* Categories */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {forumCategories.map(category => (
          <div key={category.id} className="card" style={{ padding: '20px', cursor: 'pointer' }}>
            <div className={`stat-icon ${category.color}`} style={{ marginBottom: '12px' }}>
              <FiMessageSquare />
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>{category.name}</h3>
            <div style={{ fontSize: '13px', color: 'var(--gray-600)' }}>
              {category.threads} threads • {category.posts} posts
            </div>
          </div>
        ))}
      </div>

      {/* Recent Threads */}
      <div className="section">
        <div className="section-header">
          <h2>Recent Discussions</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '8px 16px' }}>
              All
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '8px 16px' }}>
              My Threads
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '8px 16px' }}>
              Following
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {recentThreads.map(thread => (
            <div 
              key={thread.id} 
              className="card" 
              style={{ 
                padding: '20px',
                cursor: 'pointer',
                borderLeft: thread.isPinned ? '4px solid var(--fpt-orange)' : 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    {thread.isPinned && (
                      <span className="badge badge-orange">Pinned</span>
                    )}
                    <span className="badge badge-info">{thread.category}</span>
                    {thread.isAnswered && (
                      <span className="badge badge-success">Answered</span>
                    )}
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    color: 'var(--gray-900)',
                    marginBottom: '8px'
                  }}>
                    {thread.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: 'var(--gray-600)' }}>
                    <span>by {thread.author}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FiMessageCircle size={14} />
                      <span>{thread.replies} replies</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FiThumbsUp size={14} />
                      <span>{thread.likes} likes</span>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right', minWidth: '120px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end', fontSize: '13px', color: 'var(--gray-500)' }}>
                    <FiClock size={14} />
                    <span>{thread.lastActivity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="btn btn-secondary">Load More Threads</button>
        </div>
      </div>
    </>
  )
}

export default StudentForums
