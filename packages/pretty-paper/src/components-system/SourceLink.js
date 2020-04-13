/** @jsx jsx */
import { jsx, Link, Box } from 'theme-ui'
import { File } from 'react-feather';

export const SourceLink = ({ children = 'View source', ...props }) => (
  <Link
    sx={{
      display: 'inline-flex',
      alignItems: 'center'
    }}
    target="_blank"
    {...props}
  >
    <File size={16} />
    <Box css={{width: 5}} />
    {children}
  </Link>
)

export default SourceLink;