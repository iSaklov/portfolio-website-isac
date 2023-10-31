// import { StaticImageData } from 'next/image'
import { ImageMetadata } from "./ImageMetadata"

export interface Project {
  id: string
  createdTime: string
  slug: string
  name: string
  // cover: StaticImageData[]
  cover: Array<ImageMetadata>
  shortDescription: string
  techStack: Array<string>
  fullDescription: string
  date: string
  city: string
  links: {
    toDeploy: string
    toGithub: string
  }
  lighthouse: {
    performance: number
    accessibility: number
    bestPractices: number
    seo: number
    pwa: boolean
  }
  // images?: Array<StaticImageData>
  images?: Array<ImageMetadata>
}
