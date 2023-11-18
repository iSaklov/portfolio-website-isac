import { cache } from 'react'
import {
	// table,
	base,
  getMinifiedItem,
  projectRecordType,
  techRecordType,
  RecordType
} from './airtable'
// import 'server-only'

export const revalidate = 3600 // revalidate the data at most every hour

export const getRecord = cache(
  async <T, U>(id: string, recordType: RecordType<T, U>) => {
    try {
      const record = await table.find(id)
      const minifiedRecord = getMinifiedItem(record, recordType)

      return minifiedRecord
    } catch (err) {
      console.error(err)
    }
  }
)
