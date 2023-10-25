import { StaticImageData } from 'next/image'

export interface Project {
  id: string
  name: string
  cover: StaticImageData
  shortDescription: string
  fullDescription: string
  date: string
  city: string
  techStack: string
  links: {
    toDeploy: string
    toGithub: string
  }
  lighthouse: {
    performance: number
    accessibility: number
    bestPractices: number
    SEO: number
    progressiveWeb: boolean
  }
  images?: Array<StaticImageData>
}
