const Airtable = require('airtable')
import { ProjectData } from '@/interfaces/ProjectData'
import { Project } from '@/interfaces/Project'
import { keysToCamelCase } from '@/utils/keys-to-camel-case'
import { generateSlug } from '@/utils/generate-slug'

// Authenticate
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  // apiKey: process.env.AIRTABLE_API_TOKEN,
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN
})

// Initialize a base
// const base = Airtable.base(process.env.AIRTABLE_BASE_ID)
const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID)

// Reference a table"
// const table = base(process.env.AIRTABLE_TABLE_ID)
const table = base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID)

// To get minified records array
const minifyItems = (records: Array<ProjectData>): Array<Project> =>
  records.map((record) => getMinifiedItem(record))

// to make record meaningful.
const getMinifiedItem = (record: ProjectData): Project => {
  const camelCaseFields = keysToCamelCase(record.fields)

  if (!camelCaseFields.progressiveWeb) {
    camelCaseFields.progressiveWeb = false
  }

  return {
    id: record.id,
    createdTime: record._rawJson.createdTime,
    slug: generateSlug(camelCaseFields.name),
    name: camelCaseFields.name,
    cover: camelCaseFields.cover,
    shortDescription: camelCaseFields.shortDescription,
    techStack: camelCaseFields.techStack.split(', '),
    fullDescription: camelCaseFields.fullDescription,
    date: camelCaseFields.date,
    city: camelCaseFields.city,
    links: {
      toDeploy: camelCaseFields.linkToDeploy,
      toGithub: camelCaseFields.linkToGithub
    },
    lighthouse: {
      performance: camelCaseFields.performance,
      accessibility: camelCaseFields.accessibility,
      bestPractices: camelCaseFields.bestPractices,
      seo: camelCaseFields.seo,
      pwa: camelCaseFields.progressiveWeb
    },
    images: camelCaseFields.images
  }
}

export { table, minifyItems, getMinifiedItem }
