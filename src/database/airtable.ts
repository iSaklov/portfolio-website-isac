const Airtable = require('airtable')
import { ProjectRecord } from '@/interfaces/ProjectRecord'

// Authenticate
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_TOKEN
})

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID)

// Reference a table
const table = base(process.env.AIRTABLE_TABLE_ID)

// To get minified records array
const minifyItems = (records: Array<ProjectRecord>) =>
  records.map((record) => getMinifiedItem(record))

// to make record meaningful.
const getMinifiedItem = (record: ProjectRecord) => {
  if (!record.fields.progressiveWeb) {
    record.fields.progressiveWeb = false
  }
  return {
    id: record.id,
    createdTime: record._rawJson.createdTime,
    fields: record.fields
  }
}

export { table, minifyItems, getMinifiedItem }
