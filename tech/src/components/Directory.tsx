import React, { useState, useRef, useEffect, useMemo, SyntheticEvent } from 'react'
import styled, { css } from 'styled-components'
import Sticky from 'react-stickynode'

import Contributors from './Contributors'
import SrText from './SrText'
import Tutorials from './Tutorials'
import Anchor from './Anchor'
import Emoji from './Emoji'
import FilterMenu from './FilterMenu'
import MobileMenu from './MobileMenu'
import { filterTutorials, searchFilteredTutorials } from '../logic'
import { Tutorial } from '../types'
import { container, media } from '../styles'

interface Props {
  tutorials: Array<Tutorial>
  formats: Array<string>
  topics: Array<string>
  authors: Array<string>
  sources: Array<string>
}

interface StickyNodeStatus {
  status: number
}

export default function Directory({
  tutorials,
  formats,
  topics,
  authors,
  sources,
}: Props) {
  const [format, setFormat] = useState('')
  const [topic, setTopic] = useState('')
  const [author, setAuthor] = useState('')
  const [source, setSource] = useState('')
  const [query, setQuery] = useState('')
  const [limited, setLimited] = useState(true)
  const searchInput = useRef() as React.MutableRefObject<HTMLInputElement>

  // On the first render, focus the search input
  useEffect(() => searchInput.current.focus(), [searchInput])

  // On any filter or search, reset limited to true
  useEffect(() => setLimited(true), [format, topic, author, source, query])

  function handleQuery(e: SyntheticEvent) {
    const button = e.target as HTMLButtonElement
    setQuery(button.value)
    window.scrollTo(0, 0) // scroll to top whenever typing a search query
  }

  const filteredTuts = useMemo(
    () => filterTutorials(tutorials, format, topic, author, source),
    [tutorials, format, topic, author, source]
  )

  const filteredAndSearchedTuts = useMemo(
    () => searchFilteredTutorials(filteredTuts, query),
    [filteredTuts, query]
  )

  const limitedTuts = useMemo(
    () =>
      limited ? [...filteredAndSearchedTuts].splice(0, 15) : filteredAndSearchedTuts,
    [limited, filteredAndSearchedTuts]
  )

  const showLoadMore = limited && filteredAndSearchedTuts.length > 15

  return (
    <>
      <section>
        <SrText as="h2">Search for Gatsby JS tutorials</SrText>

        <StyledSticky>
          {(status: StickyNodeStatus) => (
            <SearchBar sticky={status.status === Sticky.STATUS_FIXED}>
              <Inner sticky={status.status === Sticky.STATUS_FIXED}>
                <Form>
                  <Label>
                    <Text>Search:</Text>
                    <Input
                      ref={searchInput}
                      value={query}
                      onChange={handleQuery}
                      type="text"
                      placeholder="Type here..."
                    />
                  </Label>
                </Form>

                <MobileMenu
                  formats={formats}
                  topics={topics}
                  authors={authors}
                  sources={sources}
                  currentFormat={format}
                  currentTopic={topic}
                  currentAuthor={author}
                  currentSource={source}
                  setFormat={setFormat}
                  setTopic={setTopic}
                  setAuthor={setAuthor}
                  setSource={setSource}
                />

                <AddTutorial href="https://github.com/ooloth/gatsby-tutorials#how-do-i-add-a-tutorial">
                  <span>Add a tutorial</span>
                  <HandsUp
                    emoji="🙌"
                    ariaLabel="Emoji of two hands raised in appreciation"
                  />
                </AddTutorial>
              </Inner>
            </SearchBar>
          )}
        </StyledSticky>
      </section>

      <Container>
        <LayoutGrid>
          {/* Tutorials matching search and filter parameters (if any) */}
          <div>
            <Tutorials
              tutorials={limitedTuts}
              currentTopic={topic}
              currentAuthor={author}
              currentSource={source}
              setFormat={setFormat}
              setTopic={setTopic}
              setAuthor={setAuthor}
              setSource={setSource}
              setQuery={setQuery}
              searchInput={searchInput}
            />

            {showLoadMore && (
              <SeeMoreButton onClick={() => setLimited(false)}>
                See all {filteredAndSearchedTuts.length} matching tutorials
              </SeeMoreButton>
            )}
          </div>

          {/* Lists of all formats, topics, authors and sources */}
          <Sidebar>
            <FilterMenu
              heading="Formats"
              filters={formats}
              activeFilter={format}
              setFilter={setFormat}
            />

            <FilterMenu
              heading="Topics"
              filters={topics}
              activeFilter={topic}
              setFilter={setTopic}
            />

            <FilterMenu
              heading="Authors"
              filters={authors}
              activeFilter={author}
              setFilter={setAuthor}
            />

            <FilterMenu
              heading="Sources"
              filters={sources}
              activeFilter={source}
              setFilter={setSource}
            />

            <Contributors />
          </Sidebar>
        </LayoutGrid>
      </Container>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const StyledSticky = styled(Sticky)`
  position: relative;
  z-index: 1;
`

const SearchBar = styled.div<SearchBarProps>`
  background-color: var(--near-white);
  transition: all 0.2s ease-in-out;

  ${p =>
    p.sticky &&
    css`
      box-shadow: var(--shadow);
      padding-top: var(--s2);
      padding-bottom: var(--s2);
    `}
`

interface SearchBarProps {
  sticky: boolean
}

const Inner = styled.div<SearchBarProps>`
  ${container}
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  transition: all 0.2s ease-in-out;

  ${p =>
    p.sticky &&
    css`
      align-items: baseline;
    `}
`

const AddTutorial = styled(Anchor)`
  flex: none;
  display: none;
  margin-left: var(--s4);
  box-shadow: var(--shadow);
  border-radius: var(--r2);
  background-color: var(--purple);
  padding: var(--s2) var(--s4);
  line-height: 1;
  text-align: center;
  color: white;
  transition: background-color 0.2s ease-in-out;

  ${media.md`
    display: inline-flex;
  `}

  &:hover {
    background-color: black;
  }
`

const Container = styled.section`
  ${container}
  padding-top: var(--s4);
  padding-bottom: var(--s4);
`

const Form = styled.form`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
`

const Label = styled.label`
  display: flex;
  font-family: var(--codeFont);
`

const Text = styled.span`
  flex: none;
  padding-right: var(--s2);
  font-weight: 700;
`

const Input = styled.input`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  font-size: var(--f2);
`

const HandsUp = styled(Emoji)`
  padding-left: var(--s2);
  line-height: 0.75;
`

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  & > div > section {
    margin-left: var(--s6);
  }
`

const SeeMoreButton = styled.button`
  margin-top: var(--s5);
  box-shadow: var(--shadow);
  border-radius: var(--r2);
  background-color: var(--purple);
  padding: var(--s2) var(--s4);
  line-height: 1;
  text-align: center;
  color: white;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: black;
  }
`

const Sidebar = styled.div`
  display: none;
  max-width: 19rem;

  ${media.md`
    display: block;
  `}

  ${media.lg`
    max-width: 22rem;
  `}

  ${media.xl`
    max-width: var(--s13);
  `}
`
