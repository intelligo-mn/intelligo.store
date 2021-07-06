import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import FilterMenu from './FilterMenu'
import Contributors from './Contributors'
import SrText from './SrText'
import { ReactComponent as FiltersSVG } from '../svg/sliders-h.svg'
import { icon, media } from '../styles'

interface Props {
  formats: Array<string>
  currentFormat: string
  setFormat: (format: string) => void
  topics: Array<string>
  currentTopic: string
  setTopic: (topic: string) => void
  authors: Array<string>
  currentAuthor: string
  setAuthor: (author: string) => void
  sources: Array<string>
  currentSource: string
  setSource: (source: string) => void
}

export default function MobileMenu({
  formats,
  currentFormat,
  setFormat,
  topics,
  currentTopic,
  setTopic,
  authors,
  currentAuthor,
  setAuthor,
  sources,
  currentSource,
  setSource,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef() as React.MutableRefObject<HTMLElement>

  useEffect(() => {
    // Bind modal to appElement (http://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement(`#___gatsby`)
  })

  function openModal() {
    setIsModalOpen(true)
    disableBodyScroll(modalRef.current)
  }

  function closeModal() {
    enableBodyScroll(modalRef.current)
    setIsModalOpen(false)
  }

  return (
    <>
      <Button onClick={openModal} aria-expanded={isModalOpen}>
        <SrText>Filters</SrText>
        <FiltersIcon />
      </Button>

      <StyledModal
        ref={modalRef}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={500} // match exit animation timing
      >
        <ModalContent>
          {/* Lists of all types, topics, authors and sources */}
          <FilterMenu
            heading="Formats"
            filters={formats}
            activeFilter={currentFormat}
            setFilter={setFormat}
          />

          <FilterMenu
            heading="Topics"
            filters={topics}
            activeFilter={currentTopic}
            setFilter={setTopic}
          />

          <FilterMenu
            heading="Authors"
            filters={authors}
            activeFilter={currentAuthor}
            setFilter={setAuthor}
          />

          <FilterMenu
            heading="Sources"
            filters={sources}
            activeFilter={currentSource}
            setFilter={setSource}
          />

          <Contributors />
        </ModalContent>
      </StyledModal>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-left: var(--s4);
  box-shadow: var(--shadow);
  border-radius: var(--r2);
  background-color: var(--purple);
  padding: var(--s2) var(--s4);
  text-align: center;
  color: white;
  transition: background-color 0.2s ease-in-out;

  ${media.md`
    display: none;
  `}

  &:hover {
    background-color: black;
  }
`

const FiltersIcon = styled(FiltersSVG)`
  ${icon}
`

interface ReactModalAdapterProps {
  isOpen: boolean
  className: string
  [key: string]: any
}

const ReactModalAdapter = React.forwardRef(
  (
    { isOpen, className, ...rest }: ReactModalAdapterProps,
    modalRef:
      | string
      | ((instance: ReactModal | null) => void)
      | React.RefObject<ReactModal>
      | null
      | undefined
  ) => {
    const overlayClassName = `${className}__overlay`
    const contentClassName = `${className}__content`

    return (
      <Modal
        ref={modalRef}
        isOpen={isOpen}
        portalClassName={className}
        className={contentClassName}
        overlayClassName={overlayClassName}
        {...rest}
      />
    )
  }
)

const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 10000 !important;
    background-color: transparent;
    transition: background-color 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

    &.ReactModal__Overlay--after-open {
      background-color: var(--black-60);
    }

    &.ReactModal__Overlay--before-close {
      background-color: transparent;
    }
  }

  &__content {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    box-shadow: var(--shadow-lg);
    background-color: var(--near-white);
    transform: translateX(100%);
    padding-top: var(--s4);
    padding-bottom: var(--s4);
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

    &.ReactModal__Content--after-open {
      transform: translateX(0%);
    }

    &.ReactModal__Content--before-close {
      transform: translateX(100%);
    }
  }
`

const ModalContent = styled.div`
  padding: var(--s4);
  font-size: var(--f2);

  ${media.sm`
    font-size: var(--f3);
  `}
`
