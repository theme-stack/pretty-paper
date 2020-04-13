/** @jsx jsx */
import { jsx, Styled, Box, Text, Heading } from 'theme-ui'
import Code from './Code'

export function PropsTable({ data, title = "Props" }) {
  const hasProps = Object.keys(data).length > 0;
  const hasDescription = Object.entries(data).find(([, value]) => value.description) ? true : false
  console.log(Object.entries(data).find(([, value]) => value.description))

  return (
    <Box
      mt={8}
      mb={7}
      overflow={['scroll', 'visible']}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <Heading as="h3" variant="headline" mt={12} mb={2}>
        {title}
      </Heading>
      {hasProps ? (
        <Box minWidth={['540px', '0']}>
          <Styled.table>
            <thead>
              <tr>
                <Styled.th>Prop</Styled.th>
                <Styled.th>Type</Styled.th>
                <Styled.th>Default</Styled.th>
                {hasDescription && <Styled.th>Description</Styled.th>}
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([key, value]) => {
                return (
                  <tr key={key}>
                    <Styled.td>
                      <Code>{key}</Code>
                    </Styled.td>
                    <Styled.td>
                      <Text textColor="gray700">
                        <Code variant="fade">{value.type}</Code>
                      </Text>
                    </Styled.td>
                    <Styled.td>
                      {value.default && (
                        <Text textColor="gray700">
                          <Code variant="outline">{value.default}</Code>
                        </Text>
                      )}
                    </Styled.td>
                    {hasDescription && (
                      <Styled.td>
                        <Text textColor="gray700">{value.description}</Text>
                      </Styled.td> 
                    )}
                  </tr>
                );
              })}
            </tbody>
          </Styled.table>
        </Box>
      ) : (
        <Text as="p">No props</Text>
      )}
    </Box>
  );
}
