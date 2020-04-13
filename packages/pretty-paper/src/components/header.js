/** @jsx jsx */
import { jsx, Flex, Text, Badge, useColorMode } from 'theme-ui'
import { useStaticQuery, graphql } from "gatsby"
import { ColorToggle } from '../components-system'

export default ({ children, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title,
          version
        }
      }
    }
  `)

  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',       
        borderBottom: '2px solid',
        borderColor: 'gray200',
        px: 6,
      }} 
      {...props }
    >
      <Flex 
        sx={{ 
          alignItems: 'center',       
          height: 50 
        }} 
      >
        <Text sx={{ mr: 4 }}>
          {data.site.siteMetadata.title}
        </Text>
        <Badge variant="outline">
          {data.site.siteMetadata.version}
        </Badge>
      </Flex>
      <ColorToggle
        colorMode={colorMode}
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </ColorToggle>
    </Flex>
  )
}