import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'

export default function CardSkeleton() {
  return (
    <Card
      sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        width: '100%',
        maxWidth: '384px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow:
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      }}
    >
      <div
        style={{
          aspectRatio: 4 / 3
        }}
      >
        <Skeleton
          variant='rectangular'
          animation='wave'
          sx={{
            height: '100%'
          }}
        />
      </div>
      <CardContent
        sx={{
          padding: '20px'
        }}
      >
        <Skeleton
          animation='wave'
          height={36}
          width='50%'
          style={{ marginBottom: 20 }}
        />
        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px'
          }}
        >
          {[...Array(5)].map((_, index) => (
            <Skeleton
              key={index}
              animation='wave'
              height={20}
              style={{
                marginBottom: index === 4 ? 0 : 6,
                width: index === 4 ? '80%' : '100%'
              }}
            />
          ))}
        </div>
        <Skeleton
          animation='wave'
          height={24}
          width='70%'
          style={{ marginBottom: 20 }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flex: '1 1 0%',
                alignItems: 'center'
              }}
            >
              <Skeleton
                animation='wave'
                variant='circular'
                width={24}
                height={24}
                sx={{ marginRight: 2 }}
              />
              <Skeleton animation='wave' height={20} style={{ width: '50%' }} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
