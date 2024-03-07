import { cache } from 'react'
import { getMinifiedItem, RecordDataType, RecordType } from './airtable'
import { getTable } from './getTable'
import 'server-only'

export const revalidate = 3600 // revalidate the data at most every hour

export const getRecord = cache(
  async <T extends RecordDataType, U>(
    id: string,
    recordType: RecordType<T, U>
  ) => {
    try {
      const table = getTable(recordType)

      if (!table) {
        console.error(`Table is undefined for record type: ${recordType}`)
        return null
      }

      const record = await table.find(id)
      const minifiedRecord = getMinifiedItem(record, recordType)

      return minifiedRecord
    } catch (err) {
      console.error('Error in getRecord:', err)
      throw err
    }
  }
)
