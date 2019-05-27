import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const LineButton = styled.button`
  margin: 0.5em;
  height: 3em;
  width: 8em;
  border: 1px solid ${props => props.theme.background};
  border-radius: 5px;
  outline: none;
  ::-moz-focus-inner {
    border: 0;
  }
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  :hover {
    margin: 0.55em;
    height: 2.9em;
    width: 7.9em;
  }
`

const CircleButton = styled.button`
  position: sticky;
  float:right;
  right: 2rem;
  bottom: 2rem;
  height: 3.5em;
  width: 3.5em;
  border: ${props => '1px solid' + props.theme.background};
  border-radius: 50%;
  font-size: 1.2em;
  outline: none;
  ::-moz-focus-inner {
    border: 0;
  }
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  :hover {
    font-size: 1.16em;
    right: 2.05rem;
    bottom: 2.05rem;
  }
`

export const Button = ({ type, moveOnPage, text, className, backgroundColor, textColor }) => {

  const theme = {
    background: backgroundColor || '#8c7482',
    color: textColor || '#F8F9F8'
  }

  return (
    <ThemeProvider theme={theme}>
      { type
        ? (
          <LineButton
            className={className}
            onClick={moveOnPage}
          >
            {text}
          </LineButton>
        )
        : (
          <CircleButton
            className={className}
            onClick={moveOnPage}
          >
            {text}
          </CircleButton>
        )
      }
    </ThemeProvider>
  )
}
