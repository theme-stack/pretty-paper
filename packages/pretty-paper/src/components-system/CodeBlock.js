/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useMDXComponents, mdx } from '@mdx-js/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Block, BlockHeader, BlockToggleButton, BlockPanel } from './Block'
import Wrapper from '../live-code-wrapper'
import liveScope from '../live-code-scope'

export const liveEditorStyle = {
  fontSize: 13,
  marginBottom: 32,
  marginTop: 12,
  overflowX: "auto",
  fontFamily: "Menlo,monospace",
  borderRadius: 10,
};

const liveTheme = { styles: [] }

export const CodeBlock =  ({ children, live, gray, toggle, open }) => {
  const components = useMDXComponents();
  const liveProviderProps = {
    scope: { mdx, ...components, ...liveScope },
  };

  if (live) {
    return (
      <Block isOpenDefault={(!toggle || open) ? true : false}>
        <LiveProvider 
          code={children.trim()}
          theme={liveTheme} 
          {...liveProviderProps} 
        >
          <BlockHeader
            sx={{
              backgroundColor: gray ? 'gray75' : 'background',
            }}
          >
            <Wrapper>
              <LivePreview />
            </Wrapper>
          </BlockHeader>
          {toggle &&  <BlockToggleButton />}
          <BlockPanel>
            <LiveEditor
              sx={{
                variant: 'prism',
                fontSize: 13,
                fontFamily: 'monospace',
                lineHeight: 1.5,
              }}
              css={{ textarea: { outline: 0 } }}
            />
          </BlockPanel>
        </LiveProvider>
        <LiveError />
      </Block>
    );
  }

  return (
    <Block>
      <Box
        sx={{
          p: 1,
          bg: 'gray75',
          outline: 'none',
        }}
      >
        <LiveProvider 
            code={children.trim()} 
            theme={liveTheme} 
            {...liveProviderProps} 
          >
          <LiveEditor
            sx={{
              variant: 'prism',
              fontSize: 13,
              fontFamily: 'monospace',
              lineHeight: 1.5,
            }}
            css={{ textarea: { outline: 0 } }}
            disabled
          />
        </LiveProvider>
      </Box>
    </Block>
  );
};
