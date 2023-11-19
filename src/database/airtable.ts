const Airtable = require('airtable')
import { ProjectData } from '@/interfaces/ProjectData'
import { TechData } from '@/interfaces/TechData'
import { Project } from '@/interfaces/Project'
import { Tech } from '@/interfaces/Tech'
import { keysToCamelCase } from '@/utils/keys-to-camel-case'
import { generateSlug } from '@/utils/generate-slug'

// Authenticate
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_TOKEN
})

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID)

export interface RecordType<T, U> {
  isProject: (record: T) => record is T & ProjectData
  isTech: (record: T) => record is T & TechData
  getMinifiedItem: (record: T) => U
}

const projectRecordType: RecordType<ProjectData, Project> = {
  isProject: (record): record is ProjectData =>
    'techStack' in keysToCamelCase(record.fields),
  isTech: (record): record is TechData =>
    !('techStack' in keysToCamelCase(record.fields)),
  getMinifiedItem: (record): Project => {
    const camelCaseFields = keysToCamelCase(record.fields)

    return {
      id: record.id,
      createdTime: record._rawJson.createdTime,
      slug: generateSlug(camelCaseFields.name),
      name: camelCaseFields.name,
      cover: camelCaseFields.cover,
      shortDescription: camelCaseFields.shortDescription,
      techStack: camelCaseFields.techStack,
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
        pwa: camelCaseFields.progressiveWeb ? true : false
      },
      images: camelCaseFields.images
    }
  }
}

const techRecordType: RecordType<TechData, Tech> = {
  isTech: (record): record is TechData =>
    'projects' in keysToCamelCase(record.fields),
  isProject: (record): record is ProjectData =>
    !('projects' in keysToCamelCase(record.fields)),
  getMinifiedItem: (record: TechData): Tech => {
    const camelCaseFields = keysToCamelCase(record.fields)

    return {
      id: record.id,
      name: camelCaseFields.name,
      icon: camelCaseFields.icon,
      url: camelCaseFields.url,
      description: camelCaseFields.description,
      projects: camelCaseFields.projects
    }
  }
}

// To get minified records array
const minifyItems = <T, U>(
  records: Array<T>,
  recordType: RecordType<T, U>
): Array<U> => {
  const result: Array<U> = []

  records.forEach((record) => {
    if (recordType.isProject(record)) {
      result.push(recordType.getMinifiedItem(record))
    } else if (recordType.isTech(record)) {
      result.push(recordType.getMinifiedItem(record))
    }
  })

  return result
}

const getMinifiedItem = <T, U>(record: T, recordType: RecordType<T, U>): U => {
  if (recordType.isProject(record)) {
    return recordType.getMinifiedItem(record)
  } else if (recordType.isTech(record)) {
    return recordType.getMinifiedItem(record)
  }

  throw new Error('Invalid record type')
}

export { base, minifyItems, getMinifiedItem, projectRecordType, techRecordType }
