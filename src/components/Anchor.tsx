import React, { ReactNode } from 'react'

import SrText from './SrText'

interface Props {
  href: string
  srText?: string
  children: ReactNode
  [key: string]: any
}

export default function Anchor({ href, srText, children, ...rest }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {srText && <SrText>{srText}</SrText>}
      {children}
    </a>
  )
}
