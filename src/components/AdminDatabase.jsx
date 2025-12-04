import { FiDatabase, FiDownload, FiRefreshCw, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import DataTable from './common/DataTable'

function AdminDatabase() {
  const backups = [
    {
      id: 1,
      name: 'Full Backup_20231001',
      date: '2023-10-01 02:00 AM',
      size: '4.2 GB',
      type: 'Full',
      status: 'Success'
    },
    {
      id: 2,
      name: 'Inc Backup_20231002',
      date: '2023-10-02 02:00 AM',
      size: '150 MB',
      type: 'Incremental',
      status: 'Success'
    },
    {
      id: 3,
      name: 'Inc Backup_20231003',
      date: '2023-10-03 02:00 AM',
      size: '155 MB',
      type: 'Incremental',
      status: 'Failed'
    }
  ]

  const columns = [
    { 
      header: 'Backup Name', 
      accessor: 'name', 
      sortable: true,
      render: (item) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
          <FiDatabase color="var(--primary)" />
          {item.name}
        </div>
      )
    },
    { header: 'Date Created', accessor: 'date', sortable: true },
    { header: 'Size', accessor: 'size', align: 'center' },
    { header: 'Type', accessor: 'type', align: 'center' },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      align: 'center',
      render: (item) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: item.status === 'Success' ? 'var(--success)' : 'var(--error)' }}>
          {item.status === 'Success' ? <FiCheckCircle /> : <FiAlertCircle />}
          {item.status}
        </div>
      )
    },
    {
      header: 'Actions',
      accessor: 'actions',
      align: 'center',
      render: () => (
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button className="btn-icon" title="Restore">
            <FiRefreshCw size={16} />
          </button>
          <button className="btn-icon" title="Download">
            <FiDownload size={16} />
          </button>
        </div>
      )
    }
  ]

  return (
    <div style={{ padding: '24px' }}>
      <div className="dashboard-header" style={{ marginBottom: '24px' }}>
        <div className="dashboard-welcome">
          <h1>Database Management</h1>
          <p>System backups and data integrity.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
             <button className="btn btn-secondary">
                Configuration
             </button>
             <button className="btn btn-primary">
                Create Backup
             </button>
        </div>
      </div>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '24px' }}>
         <div className="stat-card">
            <div className="stat-header">
                <div>
                    <div className="stat-value">4.5 GB</div>
                    <div className="stat-label">Total Storage Used</div>
                </div>
                <div className="stat-icon blue"><FiDatabase /></div>
            </div>
         </div>
         <div className="stat-card">
            <div className="stat-header">
                <div>
                    <div className="stat-value">Daily</div>
                    <div className="stat-label">Backup Schedule</div>
                </div>
                <div className="stat-icon green"><FiRefreshCw /></div>
            </div>
         </div>
         <div className="stat-card">
            <div className="stat-header">
                <div>
                    <div className="stat-value">Healthy</div>
                    <div className="stat-label">System Status</div>
                </div>
                <div className="stat-icon purple"><FiCheckCircle /></div>
            </div>
         </div>
      </div>

      <DataTable
        title="Backup History"
        data={backups}
        columns={columns}
        selectable={false}
      />
    </div>
  )
}

export default AdminDatabase
