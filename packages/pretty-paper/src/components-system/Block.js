/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React, { useState, createContext, useContext } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from "@reach/disclosure";
import { ChevronDown, ChevronRight } from 'react-feather';


const BlockContext = createContext({
  isOpen: false,
})

const Block = ({ children, isOpenDefault = false, ...props }) => {
  const [isOpen, setOpen] = useState(isOpenDefault);
  return(
    <Box 
      sx={{
        border: `1px solid`,
        borderColor: 'gray300',
        borderRadius: 2,
        overflow: 'hidden'
      }}
      {...props }
      >
      <Disclosure 
        open={isOpen} 
        onChange={() => setOpen(!isOpen)}
      >
        <BlockContext.Provider value={{isOpen}}>
          {children}
        </BlockContext.Provider>
      </Disclosure>
    </Box>
  )
}

const BlockHeader = ({ children, ...props }) => (
  <Box 
    sx={{
      p: 4, 
      py: 6,
      whiteSpace: 'normal',
      fontFamily: 'sans-serif'
    }} 
    {...props}
  >
    {children}
  </Box>
)

const BlockToggleButton = ({ children, ...props }) => {
  const { isOpen } = useContext(BlockContext);

  return (
    <DisclosureButton 
      sx={{
        height: 40,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        border: 'none',
        bg: 'gray75',
        borderTop: '1px solid',
        borderColor: 'gray200',
        color: 'gray900',
        outline: 'none',
        py: 0,
        px: 3,
        fontSize: 14,
        cursor: 'pointer',
        '&:hover':{
          color: 'gray900',
          bg: 'gray75',
        }
      }} 
      {...props }
    >
      {children ? children : (
        <React.Fragment>
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16}></ChevronRight>}
          <Text
            sx={{
              ml: 1,
            }}
          >
            Code Editor
          </Text>
        </React.Fragment>
      )}
    </DisclosureButton>
  )
}

const BlockPanel = ({ children, ...props }) => (
  <DisclosurePanel 
    sx={{
      p: 2,
      borderTop: '1px solid',
      borderColor: 'gray300',
      bg: 'gray75',
      outline: 'none',
    }} 
    {...props }
  >
    {children}
  </DisclosurePanel>
)

export { Block, BlockHeader, BlockToggleButton, BlockPanel } 