import { ImageMetadata } from './ImageMetadata'

export interface TechData {
  id: string
  fields: {
    Name: string
    Icon: Array<ImageMetadata>
    URL: string
    Description: string
    Projects: Array<string>
  }
}
