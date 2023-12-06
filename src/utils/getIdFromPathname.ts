export function getIdFromPathname(pathname: string): string {
  const parts = pathname.split('/')
  return parts[parts.length - 1]
}
