import { ImageMetadata } from './ImageMetadata'

export interface Tech {
  id: string
  name: string
  icon: Array<ImageMetadata>
  url: string
  description: string
  projects?: Array<string>
}
