const Airtable = require('airtable')
import { ProjectData } from '@/interfaces/ProjectData'
import { TechData } from '@/interfaces/TechData'
import { ImageMetadata } from '@/interfaces/ImageMetadata'
import { Project } from '@/interfaces/Project'
import { Tech } from '@/interfaces/Tech'
import { keysToCamelCase } from '@/utils/keysToCamelCase'
import { generateSlug } from '@/utils/generateSlug'
import { getDynamicBlurDataUrl } from '@/utils/getDynamicBlurDataUrl'

// Authenticate
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_TOKEN
})

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID)

export type RecordDataType = ProjectData | TechData

export interface RecordType<T extends RecordDataType, U> {
  isType: (record: T) => boolean
  getMinifiedItem: (record: T) => U | Promise<U>
}

const projectRecordType: RecordType<ProjectData, Project> = {
  isType: (record): record is ProjectData =>
    'techStack' in keysToCamelCase(record.fields),
  getMinifiedItem: async (record): Promise<Project> => {
    const camelCaseFields = keysToCamelCase(record.fields)

    await Promise.all(
      camelCaseFields.cover.map(async (item: ImageMetadata) => {
        item.blurDataUrl = await getDynamicBlurDataUrl(item.url)
      })
    )

    await Promise.all(
      camelCaseFields.images.map(async (image: ImageMetadata) => {
        image.blurDataUrl = await getDynamicBlurDataUrl(image.url)
      })
    )

    return Promise.resolve({
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
    })
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

const getMinifiedItem = async <T extends RecordDataType, U>(
  record: T,
  recordType: RecordType<T, U>
): Promise<U> => {
  return await recordType.getMinifiedItem(record)
}

export { base, getMinifiedItem, projectRecordType, techRecordType }
