import { Tutorial } from '../types'

export default function searchFilteredTutorials(
  filteredTutorials: Array<Tutorial>,
  query: string
) {
  if (!query) return filteredTutorials

  return filteredTutorials.filter(item => {
    function wordExistsInTutorial(word: string) {
      const isTitleMatch =
        item.title && item.title.toLowerCase().includes(word.toLowerCase())

      const isFormatsMatch =
        item.fields.formatsAsString &&
        item.fields.formatsAsString.includes(word.toLowerCase())

      const isTopicsMatch =
        item.fields.topicsAsString &&
        item.fields.topicsAsString.includes(word.toLowerCase())

      const isAuthorsMatch =
        item.fields.authorsAsString &&
        item.fields.authorsAsString.includes(word.toLowerCase())

      const isSourceMatch =
        item.source && item.source.toLowerCase().includes(word.toLowerCase())

      return (
        isTitleMatch ||
        isFormatsMatch ||
        isTopicsMatch ||
        isAuthorsMatch ||
        isSourceMatch
      )
    }

    // Require every word in the query to exist in the tutorial data
    const queryArray = query.toLowerCase().split(` `)
    return queryArray.every(wordExistsInTutorial)
  })
}
