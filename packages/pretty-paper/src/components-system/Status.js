import React from 'react'
import { Box } from '@theme-ui/components'

export const Status = ({ variant = 'Stable', ...props }) => (
  <Box
    {...props}
    variant={variant}
    __themeKey="status"
    __css={{
      display: 'flex',
      alignItems: 'center',
      border: '1px solid',
      borderColor: 'gray300',
      color: 'gray600',
      fontSize: 13,
      lineHeight: '20px',
      pl: 1,
      pr: 2,
      py: '2px',
      borderRadius: 1,
      bg: 'transparent',
    }}
  >
    <Box 
      sx={{
        color: 'inherit',
        backgroundColor: 'currentColor',
        height: 12,
        width: 12,
        borderRadius: 1000,
        mr: 1
      }}
    />
    <Box
      sx={{
        color: 'gray700',
      }}
    >
      {variant}
    </Box>
  </Box>
)

export default Status;