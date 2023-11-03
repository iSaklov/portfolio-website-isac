import Markdown from 'react-markdown'
import { Project } from '@/interfaces/Project'

export default function ProjectDescription({
  description
}: {
  description: Project['fullDescription']
}) {
  return (
    <article className='prose'>
      <Markdown>{description}</Markdown>
    </article>
  )
}
