import { getRecord } from '@/database/getRecord'
import { projectRecordType } from '@/database/airtable'
import { Project } from '@/interfaces/Project'
import Indicator from '@/components/common/Indicator'

export default async function ProjectLighthouse({
  // lighthouse
  projectId
}: {
  // lighthouse: Project['lighthouse']
  projectId: string
}) {
  const { lighthouse }: Project = await getRecord(projectId, projectRecordType)

  return (
    <div className='container mx-auto my-10 px-4'>
      <div className='flex flex-wrap justify-center gap-8'>
        {Object.entries(lighthouse).map(([key, value]) => {
          return <Indicator key={key} keyName={key} value={value} />
        })}
      </div>
      <span className='mt-5 block text-center text-[0.9375rem]/7 font-light'>
        Généré par Lighthouse 10.4.0
      </span>
    </div>
  )
}
