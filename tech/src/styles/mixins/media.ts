import { css } from 'styled-components'

interface Breakpoints {
  [key: string]: number
}

interface MediaQueries {
  [key: string]: (declarations: TemplateStringsArray) => TemplateStringsArray
}

interface Object {
  [key: string]: object
}

const breakpoints = {
  sm: 36,
  md: 48,
  lg: 62,
  xl: 75,
} as Breakpoints

export const media = Object.keys(breakpoints).reduce((queryObject: Object, screen) => {
  queryObject[screen] = (declarations: TemplateStringsArray) => {
    return `
    @media only screen and (min-width: ${breakpoints[screen]}em) {
      ${css(declarations)}
    }
    `
  }
  return queryObject
}, {}) as MediaQueries

/*

USAGE:
=====

${media.xl`
  padding-left: var(--s8);
  padding-right: var(--s8);
`}

*/
