import { useState, useMemo } from 'react'
import { FiSearch, FiFilter, FiChevronLeft, FiChevronRight, FiDownload, FiPlus, FiMoreVertical, FiArrowUp, FiArrowDown } from 'react-icons/fi'

function DataTable({
    title,
    data,
    columns,
    onImport,
    onCreate,
    createLabel = 'Create New',
    importLabel = 'Import Excel',
    selectable = false,
    onSelectionChange
}) {
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
    const [selectedItems, setSelectedItems] = useState([])

    // Filter and Search
    const filteredData = useMemo(() => {
        return data.filter(item => {
            return Object.values(item).some(val =>
                String(val).toLowerCase().includes(searchTerm.toLowerCase())
            )
        })
    }, [data, searchTerm])

    // Sorting
    const sortedData = useMemo(() => {
        let sortableItems = [...filteredData]
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1
                }
                return 0
            })
        }
        return sortableItems
    }, [filteredData, sortConfig])

    // Pagination
    const totalPages = Math.ceil(sortedData.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentData = sortedData.slice(startIndex, startIndex + itemsPerPage)

    const requestSort = (key) => {
        let direction = 'asc'
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc'
        }
        setSortConfig({ key, direction })
    }

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allIds = currentData.map(item => item.id)
            setSelectedItems(allIds)
            onSelectionChange?.(allIds)
        } else {
            setSelectedItems([])
            onSelectionChange?.([])
        }
    }

    const handleSelect = (id) => {
        let newSelected = []
        if (selectedItems.includes(id)) {
            newSelected = selectedItems.filter(item => item !== id)
        } else {
            newSelected = [...selectedItems, id]
        }
        setSelectedItems(newSelected)
        onSelectionChange?.(newSelected)
    }

    return (
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius)', border: '1px solid var(--gray-200)', padding: '24px' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                    <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--gray-900)', marginBottom: '8px' }}>{title}</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div className="search-bar" style={{ width: '300px' }}>
                            <FiSearch />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {selectable && (
                            <span style={{ fontSize: '13px', color: 'var(--gray-500)' }}>
                                Selected {selectedItems.length} of {sortedData.length}
                            </span>
                        )}
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    {onImport && (
                        <button className="btn btn-secondary" onClick={onImport}>
                            <FiDownload style={{ marginRight: '8px' }} /> {importLabel}
                        </button>
                    )}
                    {onCreate && (
                        <button className="btn btn-primary" onClick={onCreate}>
                            <FiPlus style={{ marginRight: '8px' }} /> {createLabel}
                        </button>
                    )}
                </div>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: 'var(--gray-50)', borderBottom: '1px solid var(--gray-200)' }}>
                            {selectable && (
                                <th style={{ padding: '12px 16px', width: '40px' }}>
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={currentData.length > 0 && selectedItems.length === currentData.length}
                                    />
                                </th>
                            )}
                            {columns.map((col, index) => (
                                <th
                                    key={index}
                                    style={{
                                        padding: '12px 16px',
                                        textAlign: col.align || 'left',
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        color: 'var(--gray-600)',
                                        cursor: col.sortable ? 'pointer' : 'default',
                                        userSelect: 'none'
                                    }}
                                    onClick={() => col.sortable && requestSort(col.accessor)}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: col.align === 'center' ? 'center' : 'flex-start', gap: '4px' }}>
                                        {col.header}
                                        {col.sortable && (
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <FiArrowUp size={8} color={sortConfig.key === col.accessor && sortConfig.direction === 'asc' ? 'var(--fpt-orange)' : 'var(--gray-400)'} />
                                                <FiArrowDown size={8} color={sortConfig.key === col.accessor && sortConfig.direction === 'desc' ? 'var(--fpt-orange)' : 'var(--gray-400)'} />
                                            </div>
                                        )}
                                        {col.filterable && <FiFilter size={12} color="var(--gray-400)" />}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((item, rowIndex) => (
                                <tr key={item.id || rowIndex} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                                    {selectable && (
                                        <td style={{ padding: '12px 16px' }}>
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.includes(item.id)}
                                                onChange={() => handleSelect(item.id)}
                                            />
                                        </td>
                                    )}
                                    {columns.map((col, colIndex) => (
                                        <td key={colIndex} style={{ padding: '12px 16px', textAlign: col.align || 'left', fontSize: '14px', color: 'var(--gray-900)' }}>
                                            {col.render ? col.render(item) : item[col.accessor]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length + (selectable ? 1 : 0)} style={{ padding: '32px', textAlign: 'center', color: 'var(--gray-500)' }}>
                                    No data found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--gray-600)' }}>
                    <span>Rows per page:</span>
                    <select
                        value={itemsPerPage}
                        onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                        style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--gray-300)' }}
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <span>
                        {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedData.length)} of {sortedData.length}
                    </span>
                </div>

                <div style={{ display: 'flex', gap: '4px' }}>
                    <button
                        className="btn btn-secondary"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        style={{ padding: '6px 12px' }}
                    >
                        <FiChevronLeft />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            className={`btn ${currentPage === page ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setCurrentPage(page)}
                            style={{ padding: '6px 12px', minWidth: '32px' }}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className="btn btn-secondary"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        style={{ padding: '6px 12px' }}
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DataTable
