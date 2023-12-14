export interface ImageMetadata {
  id: string
  width: number
  height: number
  url: string
  filename: string
  size: number
  type: string
  thumbnails: {
    small: {
      url: string
      width: number
      height: number
    }
    large: {
      url: string
      width: number
      height: number
    }
    full: {
      url: string
      width: number
      height: number
    }
  }
  // missing from the received data from Airtable
  blurDataUrl?: string
}
