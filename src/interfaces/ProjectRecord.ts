export interface ProjectRecord {
  id: string
  _rawJson: {
    createdTime: string
  }
  fields: {
    name: string
    cover: Array<Object>
    shortDescription: string
    fullDescription: string
    date: Date
    city: string
    techStack: string
    linkToDeploy: string
    linkToGithub: string
    performance: number
    accessibility: number
    bestPractices: number
    SEO: number
    progressiveWeb: boolean
    images?: Array<Object>
  }
}
