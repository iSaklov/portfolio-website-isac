import { Skeleton } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function ProjectLinksSkeleton() {
  return (
    <div className='mt-10 flex justify-between'>
      <div className='flex items-center'>
        <Skeleton
          animation='wave'
          variant='circular'
          height={32}
          width={32}
          style={{
            marginRight: 8
          }}
        />
        <Typography
          sx={{
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: 300
          }}
        >
          Aperçu en direct
        </Typography>
      </div>
      <div className='flex items-center'>
        <Skeleton
          animation='wave'
          variant='circular'
          height={32}
          width={32}
          style={{
            marginRight: 8
          }}
        />
        <Typography
          sx={{
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: 300
          }}
        >
          Afficher le code
        </Typography>
      </div>
    </div>
  )
}
