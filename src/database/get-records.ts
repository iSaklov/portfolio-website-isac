import { cache } from 'react'
import { table, minifyItems } from './airtable'
import 'server-only'

export const revalidate = 3600 // revalidate the data at most every hour

export const getRecords = cache(async () => {
  try {
    const records = await table.select({ view: 'Grid view' }).firstPage()
    const minifiedRecords = minifyItems(records)

    return minifiedRecords
  } catch (err) {
    console.error(err)
  }
})
