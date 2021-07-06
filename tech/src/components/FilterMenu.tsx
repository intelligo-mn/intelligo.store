import React, { SyntheticEvent } from 'react'
import styled from 'styled-components'

import FilterButton from './FilterButton'

interface Props {
  heading: string
  filters: Array<string>
  activeFilter: string
  setFilter: (filter: string) => void
}

export default function FilterMenu({
  heading,
  filters,
  activeFilter,
  setFilter,
}: Props) {
  function handleClick(e: SyntheticEvent) {
    const button = e.target as HTMLButtonElement
    if (button.value === activeFilter) setFilter('')
    else setFilter(button.value)
  }

  return (
    <Section>
      <Heading>{heading}</Heading>

      <List>
        {filters.map(
          filter =>
            filter && (
              <li key={filter}>
                <FilterButton
                  text={filter}
                  active={filter === activeFilter}
                  handleFilter={handleClick}
                />
              </li>
            )
        )}
      </List>
    </Section>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Section = styled.section`
  margin-bottom: var(--s4);
  box-shadow: var(--shadow);
  border-radius: var(--r2);
  background-color: white;
  padding-bottom: var(--s4);
  max-height: var(--s12);
  overflow: auto;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: var(--shadow-lg);
  }
`

const Heading = styled.h2`
  position: sticky;
  top: 0;
  margin-bottom: var(--s1);
  background-color: var(--white-90);
  padding: var(--s4) var(--s4) var(--s2);
  font-size: var(--f5);
`

const List = styled.ul`
  padding-left: var(--s4);
  padding-right: var(--s4);
  line-height: var(--lh3);
`
