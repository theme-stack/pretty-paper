/** @jsx jsx */
import { jsx, Styled, Box, Text, Heading } from 'theme-ui'
import Code from './Code'

export function SystemPropsTable({ props }) {
  return (
    <Box mt={8} mb={7}>
      <Heading as="h3" variant="headline" mt={12} mb={2}>
        System props
      </Heading>
      <Box my={4}>
        <Styled.table>
          <tbody>
            {props.sort().map(prop => (
              <tr key={prop}>
                <Styled.tr>
                  <Text textColor="gray700">
                    <Code>{prop}</Code>
                  </Text>
                </Styled.tr>
              </tr>
            ))}
          </tbody>
        </Styled.table>
      </Box>
    </Box>
  );
}
