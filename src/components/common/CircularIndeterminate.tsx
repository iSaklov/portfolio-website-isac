import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        color: '#e6512d'
      }}
    >
      <CircularProgress
        color='inherit'
        sx={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
    </Box>
  )
}
