const Airtable = require('airtable')
import { ProjectData } from '@/interfaces/ProjectData'
import { TechData } from '@/interfaces/TechData'
import { Project } from '@/interfaces/Project'
import { Tech } from '@/interfaces/Tech'
import { keysToCamelCase } from '@/utils/keysToCamelCase'
import { generateSlug } from '@/utils/generateSlug'

// Authenticate
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN
})

// Initialize a base
const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID)

export type RecordDataType = ProjectData | TechData

export interface RecordType<T extends RecordDataType, U> {
  isType: (record: T) => boolean
  getMinifiedItem: (record: T) => U
}

const projectRecordType: RecordType<ProjectData, Project> = {
  isType: (record): record is ProjectData =>
    'techStack' in keysToCamelCase(record.fields),
  getMinifiedItem: (record): Project => {
    const camelCaseFields = keysToCamelCase(record.fields)
    return {
      id: record.id,
      createdTime: record._rawJson?.createdTime,
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
  isType: (record): record is TechData =>
    'projects' in keysToCamelCase(record.fields),
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

const getMinifiedItem = <T extends RecordDataType, U>(
  record: T,
  recordType: RecordType<T, U>
): U => {
  return recordType.getMinifiedItem(record)
}

const minifyItems = <T extends RecordDataType, U>(
  records: T[],
  recordType: RecordType<T, U>
): U[] => {
  return records.map(recordType.getMinifiedItem)
}

export { base, minifyItems, getMinifiedItem, projectRecordType, techRecordType }
