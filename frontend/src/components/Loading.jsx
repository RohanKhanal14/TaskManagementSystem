import React from 'react'
import { Box, Skeleton } from '@mui/material'

const Loading = () => {
  return (
    <>
     <Box>
      <Skeleton animation="wave" />
    </Box>
    </>
  )
}

export default Loading