// 1. Generate string versions of tutorial array fields for faster search
///////////////////////////////////////////////////////////////////////////////////

// TODO: unit test this utility
function convertArrayToString(array) {
  return array ? array.join(` `).toLowerCase() : ``
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'TutorialsYaml') {
    createNodeField({
      node,
      name: `formatsAsString`,
      value: convertArrayToString(node.formats),
    })

    createNodeField({
      node,
      name: `topicsAsString`,
      value: convertArrayToString(node.topics),
    })

    createNodeField({
      node,
      name: `authorsAsString`,
      value: convertArrayToString(node.authors),
    })
  }
}

// 2. Reorder the tutorials and generate the lists of unique filters
///////////////////////////////////////////////////////////////////////////////////

let indexPageContext = {}

exports.createPages = async ({ graphql, reporter }) => {
  const result = await graphql(
    `
      {
        tutorialsWithDates: allTutorialsYaml(
          filter: { date: { ne: null } }
          sort: { fields: [date], order: DESC }
        ) {
          nodes {
            title
            link
            formats
            date(formatString: "MMM DD, YYYY")
            length
            authors
            source
            topics
            fields {
              authorsAsString
              formatsAsString
              topicsAsString
            }
          }
        }

        tutorialsWithoutDates: allTutorialsYaml(
          filter: { date: { eq: null } }
          sort: { fields: [title], order: ASC }
        ) {
          nodes {
            title
            link
            formats
            language
            date(formatString: "MMM DD, YYYY")
            length
            authors
            source
            topics
            fields {
              authorsAsString
              formatsAsString
              topicsAsString
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Move tutorials with no date to the end of the list
  const { tutorialsWithDates, tutorialsWithoutDates } = result.data
  const tutorials = [...tutorialsWithDates.nodes, ...tutorialsWithoutDates.nodes]

  // TODO: extract repeated patterns into utilities and test them...

  // Create a sorted list of all unique formats
  const formatArrays = tutorials.map(tutorial => tutorial.formats)
  const formats = [
    ...new Set(
      formatArrays
        .reduce((acc, curr) => [...acc, ...curr]) // merge arrays into one
        .map(format => format.toLowerCase()) // convert all formats to lowercase
    ),
  ].sort()

  // Create a sorted list of all unique topics
  const topicArrays = tutorials.map(tutorial => tutorial.topics)
  const topics = [
    ...new Set(
      topicArrays
        .reduce((acc, curr) => [...acc, ...curr]) // merge arrays into one
        .map(topic => topic.toLowerCase()) // convert all topics to lowercase
    ),
  ].sort()

  // Create a sorted list of all unique authors
  const authorArrays = tutorials.map(tutorial => tutorial.authors)
  const authors = [
    ...new Set(
      authorArrays.reduce((acc, curr) => [...acc, ...curr]) // merge arrays
    ),
  ].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())) // ignore case

  // Create a sorted list of all unique sources
  const sources = [
    ...new Set(tutorials.map(tutorial => (tutorial.source ? tutorial.source : ''))),
  ].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())) // ignore case

  // Will add this object to the index page context in .onCreatePage() below:
  indexPageContext = {
    tutorials: tutorials,
    formats: formats,
    topics: topics,
    authors: authors,
    sources: sources,
  }
}

// 3. Add processed tutorials and filter lists to the index page context
///////////////////////////////////////////////////////////////////////////////////

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path === `/`) {
    deletePage(page)
    createPage({
      ...page,
      context: indexPageContext,
    })
  }
}

// Temporary: Alias react-dom to @hot-loader/react-dom to remove console warning
///////////////////////////////////////////////////////////////////////////////////

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    })
  }
}
