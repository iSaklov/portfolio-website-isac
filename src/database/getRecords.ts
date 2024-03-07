import { cache } from 'react'
import { RecordDataType, RecordType } from './airtable'
import { getTable } from './getTable'
import 'server-only'

export const revalidate = 3600 // revalidate the data at most every hour

export const getRecords = cache(
  async <T extends RecordDataType, U>(
    recordType: RecordType<T, U>,
    options = {}
  ): Promise<U[]> => {
    try {
      if (!recordType) {
        console.error('Record type is undefined')
        return []
      }

      let recordsArray: U[] = []
      const table = getTable(recordType)

      if (!table) {
        console.error(`Table is undefined for record type: ${recordType}`)
        return []
      }

      await table
        .select({
          view: 'Grid view',
          ...options
        })
        .eachPage((records: T[], fetchNextPage: () => void) => {
          records.forEach(async (record) => {
            const minifiedRecord = await recordType.getMinifiedItem(record)
            recordsArray.push(minifiedRecord)
          })
          fetchNextPage()
        })

      return recordsArray
    } catch (err) {
      console.error('Error in getRecords:', err)
      throw err
    }
  }
)
