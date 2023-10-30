import { cache } from 'react'
import { table, getMinifiedItem } from './airtable'

export const revalidate = 3600 // revalidate the data at most every hour

export const getRecord = cache(async (id: string) => {
	const record = await table.find({ id })
	const minifiedRecord = getMinifiedItem(record)

  return minifiedRecord
})
