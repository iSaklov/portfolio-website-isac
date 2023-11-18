import { cache } from 'react'
import {
  // table,
  base,
  minifyItems,
  projectRecordType,
  techRecordType,
  RecordType
} from './airtable'
import 'server-only'

export const revalidate = 3600 // revalidate the data at most every hour

// Reference a Projects table
const projectTable = base(process.env.NEXT_PUBLIC_AIRTABLE_PROJECTS_TABLE_ID)

// Reference a Tech table
const techTable = base(process.env.NEXT_PUBLIC_AIRTABLE_TECH_STACK_TABLE_ID)

export const getRecords = cache(async <T, U>(recordType: RecordType<T, U>) => {
  try {
    let records = []

    if (recordType === projectRecordType) {
      records = await projectTable.select({ view: 'Grid view' }).firstPage()
    } else if (recordType === techRecordType) {
      records = await techTable.select({ view: 'Grid view' }).firstPage()
    }

    const minifiedRecords = minifyItems(records, recordType)

    return minifiedRecords
  } catch (err) {
    console.error(err)
  }
})
