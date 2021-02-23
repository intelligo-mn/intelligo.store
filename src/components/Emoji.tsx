import React from 'react'
import styled from 'styled-components'

interface Props {
  emoji: string
  ariaLabel: string
  [key: string]: any
}

export default function Emoji({ emoji, ariaLabel, ...rest }: Props) {
  return (
    <Span role="img" aria-label={ariaLabel} {...rest}>
      {emoji}
    </Span>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Span = styled.span`
  flex: none;
  font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`
