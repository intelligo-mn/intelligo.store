import React from 'react'
import styled from 'styled-components'

import Tutorial from './Tutorial'
import { Tutorial as TutorialType } from '../types'

interface Props {
  tutorials: Array<TutorialType>
  currentTopic: string
  currentAuthor: string
  currentSource: string
  setFormat: (format: string) => void
  setTopic: (topic: string) => void
  setAuthor: (author: string) => void
  setSource: (source: string) => void
  setQuery: (query: string) => void
  searchInput: React.MutableRefObject<HTMLInputElement>
}

export default function Tutorials({
  tutorials,
  currentTopic,
  currentAuthor,
  currentSource,
  setFormat,
  setTopic,
  setAuthor,
  setSource,
  setQuery,
  searchInput,
}: Props) {
  function resetSearch() {
    setFormat(``)
    setTopic(``)
    setAuthor(``)
    setSource(``)
    setQuery(``)
    searchInput.current.focus()
  }

  return tutorials && tutorials.length > 0 ? (
    <List>
      {tutorials.map(tutorial => (
        <Tutorial
          key={tutorial.title + tutorial.date}
          tutorial={tutorial}
          currentTopic={currentTopic}
          currentAuthor={currentAuthor}
          currentSource={currentSource}
          setAuthor={setAuthor}
          setSource={setSource}
          setTopic={setTopic}
        />
      ))}
    </List>
  ) : (
    <NoResults resetSearch={resetSearch} />
  )
}

///////////////////////////////////////////////////////////////////////////////////

const List = styled.ul`
  margin-top: calc(var(--s4) * -1);
`

///////////////////////////////////////////////////////////////////////////////////

interface NoResultsProps {
  resetSearch: () => void
}

function NoResults({ resetSearch }: NoResultsProps) {
  return (
    <Message>
      <Heading>No results</Heading>
      <Button onClick={resetSearch}>Reset search</Button>
    </Message>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Message = styled.div`
  align-self: flex-start;
  box-shadow: var(--shadow);
  border-radius: var(--r2);
  background-color: white;
  padding: var(--s6);
  text-align: center;
`

const Heading = styled.h3`
  padding-bottom: var(--s1);
  line-height: 1;
  font-size: var(--f6);
  font-weight: 600;
`

const Button = styled.button`
  display: inline-flex;
  margin-top: var(--s4);
  border-radius: var(--r2);
  background-color: var(--purple);
  padding: var(--s2) var(--s4);
  white-space: nowrap;
  color: white;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: black;
  }
`
