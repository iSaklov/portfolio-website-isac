import { ImageMetadata } from './ImageMetadata'

export interface ProjectData {
  id: string
  _rawJson: {
    createdTime: string
  }
  fields: {
    Name: string
    Cover: ImageMetadata[]
    'Short Description': string
    'Tech Stack': string
    'Full Description': string
    Date: string
    City: string
    // Links
    'Link To Deploy': string
    'Link to Github': string
    // Lighthouse
    Performance: number
    Accessibility: number
    'Best Practices': number
    SEO: number
    'Progressive Web'?: boolean
    Images?: ImageMetadata[]
  }
}
