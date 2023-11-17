import Markdown from 'react-markdown'
import { Project } from '@/interfaces/Project'

export default function ProjectDescription({
  description
}: {
  description: Project['fullDescription']
}) {
  return (
    <article className='prose max-w-none prose-p:text-justify'>
      <Markdown>{description}</Markdown>
    </article>
  )
}
