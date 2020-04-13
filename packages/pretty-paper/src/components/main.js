/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

export default ({ children, ...props }) => (
  <Box
    sx={{
      flexGrow: 1,
      pt: 8,
      pb: 9,
      maxWidth: '100%',
      display:'block'
    }}
    {...props}
  >
    <Box 
      sx={{
        maxWidth: 780,
        px: 6,
        margin: "0px auto"
      }}
    >
      {children}
    </Box>
  </Box>
)