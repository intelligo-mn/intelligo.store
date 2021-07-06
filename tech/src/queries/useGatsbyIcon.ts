import { useStaticQuery, graphql } from 'gatsby'

export default function useGatsbyIcon() {
  const { icon } = useStaticQuery(
    graphql`
      query {
        icon: file(relativePath: { eq: "images/favicon.png" }) {
          childImageSharp {
            fluid(maxWidth: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return icon
}
