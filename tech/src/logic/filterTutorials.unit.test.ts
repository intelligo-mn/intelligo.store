import { filterTutorials, fieldPassesFilter } from '.'

describe(`fieldPassesFilter()`, () => {
  it(`always returns true if the filter is empty`, () => {
    expect(fieldPassesFilter(['audio', 'text'], '')).toEqual(true)
    expect(fieldPassesFilter(['audio'], '')).toEqual(true)
    expect(fieldPassesFilter('Gatsby', '')).toEqual(true)
    expect(fieldPassesFilter(undefined, '')).toEqual(true)
  })

  it(`always returns false if the filter is set but the field is empty`, () => {
    expect(fieldPassesFilter([''], 'text')).toEqual(false)
    expect(fieldPassesFilter([], 'text')).toEqual(false)
    expect(fieldPassesFilter('', 'text')).toEqual(false)
    expect(fieldPassesFilter(undefined, 'text')).toEqual(false)
  })

  it(`returns false if the field string doesn't match the filter string`, () => {
    expect(fieldPassesFilter('audio', 'text')).toEqual(false)
  })

  it(`returns true if the field string matches the filter string, regardless of case`, () => {
    expect(fieldPassesFilter('audio', 'audio')).toEqual(true)
    expect(fieldPassesFilter('AUDIO', 'audio')).toEqual(true)
    expect(fieldPassesFilter('aUdIo', 'AuDiO')).toEqual(true)
  })

  it(`returns false if the field array doesn't include the filter string`, () => {
    expect(fieldPassesFilter(['audio'], 'text')).toEqual(false)
  })

  it(`returns true if the field array includes the filter string`, () => {
    expect(fieldPassesFilter(['audio'], 'audio')).toEqual(true)
    expect(fieldPassesFilter(['audio', 'text'], 'text')).toEqual(true)
  })
})

describe(`filterTutorials()`, () => {
  // TODO:...
})
