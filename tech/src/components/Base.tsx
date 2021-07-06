import React, { ReactNode } from 'react'
import 'what-input'

import Metadata from './Metadata'
import Header from './Header'
import Footer from './Footer'
import { CustomProperties, Reset } from '../styles'

interface Props {
  children?: ReactNode
}

export default function Base({ children }: Props) {
  return (
    <>
      <Metadata />
      <CustomProperties />
      <Reset />
      <Header />
      {children}
      <Footer />
    </>
  )
}
