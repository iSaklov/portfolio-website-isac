import fs from 'fs/promises'
import path from 'path'
import { getPlaiceholder } from 'plaiceholder'

interface PlaceholderImageProps {
  src: string
  base64: string
  height: number
  width: number
}

export async function getPlaceholderImageProps(
  imageRelativePath: string
): Promise<PlaceholderImageProps> {
  // Construct the absolute file path from the project root
  const filePath = path.join(process.cwd(), 'public', imageRelativePath)

  // Read the file
  const buffer = await fs.readFile(filePath)

  // Retrieve image data
  const {
    metadata: { height, width },
    base64
  } = await getPlaiceholder(buffer)

  // Construct the path for client usage (relative to the 'public' directory)
  const src = `/${imageRelativePath}`

  // Return the base64 string, image source, and dimensions
  return { src, base64, height, width }
}
