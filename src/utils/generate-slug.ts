export function generateSlug(name: string): string {
  const lowerCaseName = name.toLowerCase()

  const slug = lowerCaseName.replace(/ /g, '-')

  const cleanSlug = slug.replace(/[^a-z0-9]/g, '')

  return cleanSlug
}
