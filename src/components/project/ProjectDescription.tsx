import { Project } from '@/interfaces/Project'

export default function ProjectDescription({
  description
}: {
  description: Project['fullDescription']
}) {
  return <div>{description}</div>
}
