import React, { useState } from 'react'
import sampleData from '../data/sampleData'
import './demoGrid.css'

type DataItem = {
  id: number
  name: string
  age: number
  email: string
}

type SortConfig = {
  key: keyof DataItem // 'id' | 'name' | 'age' | 'email'
  direction: 'ascending' | 'descending'
}

const Grid: React.FC = () => {
  const [data, setData] = useState<DataItem[]>(sampleData)
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'id',
    direction: 'ascending',
  })
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSort = (key: keyof DataItem) => {
    let direction: 'ascending' | 'descending' = 'ascending'

    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1
      }
      return 0
    })

    setData(sortedData)
    setSortConfig({ key, direction })
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)

    const filteredData = sampleData.filter((item) =>
      item.name.toLowerCase().includes(query),
    )

    setData(filteredData)
  }

  return (
    <div className="grid-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <table className="grid-table">
        <thead data-test="grid-table-header">
          <tr>
            <th data-test="idColumn" onClick={() => handleSort('id')}>
              ID{' '}
              {sortConfig.key === 'id'
                ? sortConfig.direction === 'ascending'
                  ? '↑'
                  : '↓'
                : ''}
            </th>
            <th data-test="nameColumn" onClick={() => handleSort('name')}>
              Name{' '}
              {sortConfig.key === 'name'
                ? sortConfig.direction === 'ascending'
                  ? '↑'
                  : '↓'
                : ''}
            </th>
            <th data-test="ageColumn">Age</th>
            <th data-test="emailColumn">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr data-test="grid-table-row" key={item.id}>
              <td data-test="rowItem">{item.id}</td>
              <td data-test="rowItem">{item.name}</td>
              <td data-test="rowItem">{item.age}</td>
              <td data-test="rowItem">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Grid
