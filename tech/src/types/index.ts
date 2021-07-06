export interface Tutorial {
  title: string
  link: string
  formats: Array<string>
  language: string
  topics: Array<string>
  date?: string
  length?: string
  authors?: Array<string>
  source?: string
  fields: {
    authorsAsString: string
    formatsAsString: string
    topicsAsString: string
  }
}
