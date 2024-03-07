import Markdown from 'react-markdown'
import { Project } from '@/interfaces/Project'

export default async function ProjectDescription({
  description
}: {
  description: Project['fullDescription']
}) {
  return (
    <article className='prose max-w-none prose-headings:text-[1.375rem] prose-headings:font-normal prose-p:text-justify prose-p:text-base prose-p:font-light prose-p:leading-loose lg:prose-headings:text-[1.625rem] lg:prose-p:text-lg'>
      <Markdown>{description}</Markdown>
    </article>
  )
}
