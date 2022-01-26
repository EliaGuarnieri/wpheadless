import { gql } from '@apollo/client';

export const QUERY_ALL_POSTS = gql`
  query AllPosts {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          id
          categories {
            edges {
              node {
                databaseId
                id
                name
                slug
              }
            }
          }
          content
          date
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
          databaseId
          title
          slug
        }
      }
    }
  }
`;

export const QUERY_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      author {
        node {
          avatar {
            height
            url
            width
          }
          id
          name
          slug
        }
      }
      id
      categories {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      content
      date
      excerpt
      featuredImage {
        node {
          altText
          caption
          sourceUrl
          srcSet
          sizes
          id
        }
      }
      modified
      databaseId
      title
      slug
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID = gql`
  query PostsByCategoryId($categoryId: Int!) {
    posts(first: 10000, where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          id
          categories {
            edges {
              node {
                databaseId
                id
                name
                slug
              }
            }
          }
          content
          date
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          databaseId
          title
          slug
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG = gql`
  query PostByAuthorSlug($slug: String!) {
    posts(first: 10000, where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          categories {
            edges {
              node {
                databaseId
                id
                name
                slug
              }
            }
          }
          date
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          id
          modified
          databaseId
          slug
          title
        }
      }
    }
  }
`;

export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;
