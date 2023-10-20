import { StaticImageData } from 'next/image'

export interface Project {
  id: number
  name: string
  slug: string
  shortDescription: string
  fullDescription: string | string[]
  techStack: string[]
  links: {
    toDeploy: string
    toGithub: string
  }
  lighthouse: {
    performances: number
    accessibilité: number
    bonnesPratiques: number
    SEO: number
    progressiveWeb: number
  }
  img: StaticImageData
}
