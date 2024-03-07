import { cache } from 'react'
import {
  base,
  minifyItems,
  RecordDataType,
  RecordType,
  projectRecordType,
  techRecordType
} from './airtable'
// import 'server-only'

export const revalidate = 3600 // revalidate the data at most every hour

const getTable = <T extends RecordDataType, U>(
  recordType: RecordType<T, U>
) => {
  if (recordType.isType === projectRecordType.isType) {
    // Reference a Projects table
    return base(process.env.AIRTABLE_PROJECTS_TABLE_ID)
  } else if (recordType.isType === techRecordType.isType) {
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

      const records = await table
        .select({
          // The records will be sorted according to the order of the view unless the sort parameter is included, which overrides that order
          view: 'Grid view',
          ...(recordType.isType === techRecordType.isType && {
            sort: [{ field: 'Name', direction: 'asc' }]
          })
        })
        .firstPage()

      const minifiedRecords = minifyItems(records, recordType)

      return minifiedRecords
    } catch (err) {
      console.error('Error in getRecords:', err)
      throw err
    }
  }
)
