import React, { useEffect, useState } from 'react'
import CsvCard from './CsvCards'

export interface CsvCardData {
  name: string
  city: string
  country: string
  favorite_sport: string
}

interface CsvCardContainerProps {
  users: CsvCardData[]
  searchTerm: string
}

const CsvCardContainer: React.FC<CsvCardContainerProps> = ({
  users,
  searchTerm
}) => {
  const [csvData, setCsvData] = useState<CsvCardData[]>([])

  useEffect(() => {
    const filteredData = users.filter(user =>
      Object.values(user).some(
        value =>
          typeof value === 'string' &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    setCsvData(filteredData)
  }, [users, searchTerm])

  return (
    <div className='flex-wrap inline-flex mx-2'>
      {csvData.map((item, index) => (
        <CsvCard key={index} data={item} />
      ))}
    </div>
  )
}

export default CsvCardContainer