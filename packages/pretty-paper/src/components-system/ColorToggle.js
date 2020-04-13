import React from 'react'
import { Box } from '@theme-ui/components'

export const ColorToggle = React.forwardRef(({colorMode, ...props}, ref) => (
  <Box
    ref={ref}
    as="button"
    __css={{
      cursor: 'pointer',
      fontSize: 13,
      lineHeight: '20px',
      px: 1,
      py: '2px',
      color: 'primary',
      bg: 'background',
      border: 'none',
      outline: 'none',
      padding: 0,
      appearance: 'none',
      alignItems: 'center',
      background: 'transparent',
      borderRadius: '5px',
      border: 0,
      display: 'inline-flex',
      height: '40px',
      justifyContent: 'center',
      marginRight: '-11px',
      opacity: 0.75,
      overflow: 'hidden',
      position: 'relative',
      transform: 'scale(0.75)',
      transition: 'opacity 0.3s ease',
      verticalAlign: 'middle',
      width: '40px'
    }}
    {...props}
  >
    <Box
      __css={{
        border: '2px solid',
        borderColor: 'gray600',
        backgroundColor: 'gray600',
        borderRadius: '50%',
        height: '24px',
        overflow: 'hidden',
        position: 'relative',
        transform: 'scale(1)',
        transition: 'all 0.45s ease',
        width: '24px',
        ...(colorMode === 'dark' && {
          transform: 'scale(0.55)',
          overflow: 'visible',
          transition: 'all 0.45s ease 0s',
        }),
        '&::before': {
          borderRadius: '50%',
          border: '2px solid',
          borderColor: 'gray600',          
          content: '""',
          height: '24px',
          opacity: 1,
          position: 'absolute',
          right: '-9px',
          top: '-9px',
          transform: 'translate(0,0)',
          transition: 'transform 0.45s ease',
          width: '24px',
          ...(colorMode === 'dark' && {
            content: '""',
            opacity: 0,
            transform: 'translate(14px, -14px)',
          })
        },
        '&::after': {
          borderRadius: '50%',
          boxShadow: '0 -23px 0 green,0 23px 0 green,23px 0 0 green,-23px 0 0 green,15px 15px 0 green,-15px 15px 0 green,15px -15px 0 green,-15px -15px 0 green',
          content: '""',
          height: '8px',
          left: '50%',
          margin: '-4px 0 0 -4px',
          position: 'absolute',
          top: '50%',
          width: '8px',
          transform: 'scale(0)',
          transition: 'all 0.35s ease',
          ...(colorMode === 'dark' && {
            transform: 'scale(0.92)',
            boxShadow: '0 -23px 0 #635e69,0 23px 0 #635e69,23px 0 0 #635e69,-23px 0 0 #635e69,15px 15px 0 #635e69,-15px 15px 0 #635e69,15px -15px 0 #635e69,-15px -15px 0 #635e69',
            content: '""',
            height: '8px',
            left: '50%',
            position: 'absolute',
            top: '50%',
            width: '8px',
            transform: 'scale(1)',
            borderRadius: '50%',
            margin: '-4px 0px 0px -4px'
          })
        }
      }}
    />
    <Box
      __css={{
        backgroundColor: 'gray50',
        borderRadius: '50%',
        border: 0,
        height: '24px',
        opacity: 1,
        position: 'absolute',
        right: 0,
        top: 0,
        transform: 'translate(0,0)',
        width: '24px',
        ...(colorMode === 'dark' && {
          height: '24px',
          opacity: 0,
          position: 'absolute',
          right: '0px',
          top: '0px',
          transform: 'translate(14px, -14px)',
          width: '24px',
          borderRadius: '50%',
          borderWidth: '0px',
          borderStyle: 'initial',
          borderColor: 'initial',
          borderImage: 'initial',
        })
      }}
    />
  </Box>
))