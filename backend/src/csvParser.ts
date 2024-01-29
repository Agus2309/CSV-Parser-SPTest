import { parse } from 'csv-parse'

export const parseCSV = (csvString: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const parsedData: any[] = []

    parse(csvString, { columns: true }, (err, records) => {
      if (err) {
        reject(err)
      } else {
        parsedData.push(...records)
        resolve(parsedData)
        console.log('the data could be parsed')
      }
    })
  })
}

export const searchCSV = (data: any[], searchTerm: string): any[] => {
  const result: any[] = []
  const regex = new RegExp(searchTerm, 'i')

  data.forEach(row => {
    if (Object.values(row).some((value) => regex.test(value as string)))  {
      result.push(row)
    }
  })

  return result
}