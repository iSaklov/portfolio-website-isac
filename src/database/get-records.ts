import { cache } from 'react'
import {
  base,
  minifyItems,
  RecordDataType,
  RecordType,
  projectRecordType,
  techRecordType
} from './airtable'
import 'server-only'

export const revalidate = 3600 // revalidate the data at most every hour

const getTable = (recordType: RecordType<any, any>) => {
  if (recordType === projectRecordType) {
    // Reference a Projects table
    return base(process.env.AIRTABLE_PROJECTS_TABLE_ID)
  } else if (recordType === techRecordType) {
    // Reference a Tech table
    return base(process.env.AIRTABLE_TECH_STACK_TABLE_ID)
  }
}

export const getRecords = cache(
  async <T extends RecordDataType, U>(recordType: RecordType<T, U>) => {
    try {
      if (!recordType) {
        console.error('Record type is undefined')
        return []
      }

      const table = getTable(recordType)

      if (!table) {
        console.error(`Table is undefined for record type: ${recordType}`)
        return []
      }

      const records = await table.select({ view: 'Grid view' }).firstPage()

      const minifiedRecords = minifyItems(records, recordType)

      return minifiedRecords
    } catch (err) {
      console.error('Error in getRecords:', err)
      throw err
    }
  }
)
