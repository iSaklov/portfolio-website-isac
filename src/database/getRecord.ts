import { cache } from 'react'
import {
  base,
  getMinifiedItem,
  RecordDataType,
  RecordType,
  projectRecordType,
  techRecordType
} from './airtable'
// import 'server-only'

export const revalidate = 3600 // revalidate the data at most every hour

const getTable = (recordType: RecordType<any, any>) => {
  if (recordType === projectRecordType) {
    return base(process.env.AIRTABLE_PROJECTS_TABLE_ID)
  } else if (recordType === techRecordType) {
    return base(process.env.AIRTABLE_TECH_STACK_TABLE_ID)
  }
}

export const getRecord = cache(
  async <T extends RecordDataType, U>(
    id: string,
    recordType: RecordType<T, U>
  ) => {
    try {
      const table = getTable(recordType)
      const record = await table.find(id)
      const minifiedRecord = getMinifiedItem(record, recordType)

      return minifiedRecord
    } catch (err) {
      console.error('Error in getRecord:', err)
      throw err
    }
  }
)
