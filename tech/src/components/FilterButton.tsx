import React, { SyntheticEvent } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  text: string
  active: boolean
  handleFilter: (e: SyntheticEvent) => void
  [key: string]: any
}

export default function FilterButton({ text, active, handleFilter, ...rest }: Props) {
  return (
    <Button value={text} active={active} onClick={handleFilter} {...rest}>
      <Text>{text}</Text>
      {active && <span>&nbsp;×</span>}
    </Button>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  margin-top: var(--s2);
  border-radius: var(--r2);
  background-color: var(--light-gray);
  padding: var(--s1) var(--s2);
  white-space: nowrap;
  transition: color 0.05s ease-in-out, background-color 0.05s ease-in-out;

  &:hover {
    background-color: var(--purple);
    color: white;
  }

  ${props =>
    props.active &&
    css`
      background-color: var(--purple);
      color: white;
    `}
`

interface ButtonProps {
  active: boolean
}

const Text = styled.span`
  pointer-events: none;
`
