export function generateSlug(name: string): string {
  const slug = name
    .toLowerCase()
    // Replace spaces with hyphens
    .replace(/ /g, '-')
    // Remove all characters except letters, numbers, and hyphens
    .replace(/[^a-z0-9-]/g, '')
    // Replace consecutive hyphens with a single hyphen
    .replace(/--+/g, '-')

  return slug
}
