export function getScreenSizeLabel(screenWidth: number): string {
  if (screenWidth < 640) {
    return 'sm'
  } else if (screenWidth < 1024) {
    return 'md'
  } else if (screenWidth < 1280) {
    return 'lg'
  } else if (screenWidth < 1536) {
    return 'xl'
  } else {
    return '2xl'
  }
}
