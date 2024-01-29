import React from 'react'

export interface CsvCardData {
  data: {
    name: string
    city: string
    country: string
    favorite_sport: string
  }
}

const CsvCard: React.FC<CsvCardData> = ({ data }) => {
  return (
    <div className='mb-10 max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"'>
      <div className='p-5'>
        <h2 className='mb-2 text-xl font-bold text-violet-600'>{data.name}</h2>
        <h3><span className='text-violet-600 font-semibold'>City:</span> {data.city}</h3> 
        <h3><span className='text-violet-600 font-semibold'>Country:</span> {data.country}</h3> 
        <h3><span className='text-violet-600 font-semibold'>Favorite Sport:</span> {data.favorite_sport}</h3> 
      </div>
    </div>
  )
}

export default CsvCard