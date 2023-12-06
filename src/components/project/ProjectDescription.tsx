import Markdown from 'react-markdown'
import { getRecord } from '@/database/getRecord'
import { projectRecordType } from '@/database/airtable'
import { Project } from '@/interfaces/Project'

export default async function ProjectDescription({
  // description
  projectId
}: {
  // description: Project['fullDescription']
  projectId: string
}) {
  const { fullDescription }: Project = await getRecord(
    projectId,
    projectRecordType
  )

  return (
    <article className='prose max-w-none prose-p:text-justify'>
      <Markdown>{fullDescription}</Markdown>
    </article>
  )
}
