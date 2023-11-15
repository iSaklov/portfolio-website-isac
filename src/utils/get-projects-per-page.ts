export function getProjectsPerPage(screenWidth: number): number {
  if (screenWidth <= 639.8) {
    return 1
  } else if (screenWidth <= 1023.8) {
    return 2
  } else {
    return 3
  }
}
