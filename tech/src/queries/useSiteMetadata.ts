import { useStaticQuery, graphql } from 'gatsby'

export default function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            language
            locale
            title
            twitterHandle
            siteUrl
          }
        }
      }
    `
  )

  return site.siteMetadata
}
