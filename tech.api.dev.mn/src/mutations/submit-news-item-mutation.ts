import gql from 'graphql-tag';

export interface ISubmitNewsItemGraphQL {
  submitNewsItem: { id }; // Return type of submitNewsItem mutation
}

export const newsDetailNewsItemFragment = `
  fragment NewsDetail on NewsItem {
    id
    commentCount
    creationTime
    hidden
    submitterId
    upvoteCount
  }
`;


export const newsTitleFragment = `
  fragment NewsTitle on NewsItem {
    id
    title
    url
    upvoted
  }
`;

export const newsFeedNewsItemFragment = `
  fragment NewsFeed on NewsItem {
    id
    hidden
    ...NewsTitle
    ...NewsDetail
  }
  ${newsTitleFragment}
  ${newsDetailNewsItemFragment}
`;


export const SUBMIT_NEWS_ITEM_MUTATION = gql`
  mutation SubmitNewsItem($title: String!, $url: String) {
    submitNewsItem(title: $title, url: $url) {
      id
      ...NewsFeed
    }
  }
  ${newsFeedNewsItemFragment}
`;
