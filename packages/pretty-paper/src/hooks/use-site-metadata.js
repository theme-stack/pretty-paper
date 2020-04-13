
import {useStaticQuery, graphql} from 'gatsby'

function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useSiteMetadata