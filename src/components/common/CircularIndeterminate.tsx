import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'inline-block', color: '#e6512d' }}>
      <CircularProgress color='inherit' />
    </Box>
  )
}
