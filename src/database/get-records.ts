import { cache } from 'react'
import { table, minifyItems } from './airtable'

export const revalidate = 3600 // revalidate the data at most every hour

export const getItems = cache(async () => {
  const records = await table.select({}).firstPage()
  const minifiedRecords = minifyItems(records)

  return minifiedRecords
})
