import React from 'react'
import { Box } from '@theme-ui/components'

export const Code = props => (
  <Box
    {...props}
    as="code"
    __themeKey="code"
    __css={{
      fontFamily: 'monospace',
      fontSize: 13,
      lineHeight: '20px',
      px: 1,
      py: '2px',
      borderRadius: 1,
      color: 'primary',
      bg: 'highlight',
    }}
  />
)

export default Code;