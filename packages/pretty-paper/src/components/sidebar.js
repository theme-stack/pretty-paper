/** @jsx jsx */
import { jsx, Box, Heading, Divider } from 'theme-ui'
import { Link } from 'gatsby';
import navItems from '../nav.yml'

export default ({ children, location, ...props }) => {
  return(
    <Box
      sx={{
        position: 'sticky',
        top: '0',
        px: 3,
        pt: 2,
        flexShrink: 0,
        width: ['100%', 200, 250],
        height: ['auto', '100vh'],
        overflow: ['auto', 'scroll'],
        pb: [0, 8],
        borderRight: '2px solid',
        borderColor: 'gray200',
        variant: "sidebar"
      }}
      {...props}
    >
      <Box>
        {navItems && navItems.map(navItem => (
          <Box sx={{mt: 4}}>
            <Heading variant="overline" sx={{ my: 1, py: 1, px: 2}}>
              {navItem.categorie}
            </Heading>
            {navItem.pages && navItem.pages.map(item => (
              <Link
                key={item.title}
                to={item.url}
                data-active={location.pathname === item.url ? true : undefined}
                sx={{
                  variant: "links.nav",
                  my: 1, 
                }}
              >
                {item.title}
              </Link>
            ))}
            <Divider sx={{mx: -3, mt: 4, color: 'gray300'}} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
