import { getApolloClient } from 'lib/apollo-client';

import { QUERY_ALL_CATEGORIES, QUERY_CATEGORY_BY_SLUG } from 'data/categories';

/**
 * categoryPathBySlug
 */

export function categoryPathBySlug(slug) {
  return `/categories/${slug}/page/1`;
}

/**
 * getAllCategories
 */

export async function getAllCategories() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES,
  });

  const categories = data?.data.categories.edges.map(({ node = {} }) => node);

  return {
    categories,
  };
}

/**
 * getCategoryBySlug
 */

export async function getCategoryBySlug(slug) {
  const apolloClient = getApolloClient();

  let categoryData;

  try {
    categoryData = await apolloClient.query({
      query: QUERY_CATEGORY_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[categories][getCategoryBySlug] Failed to query category data: ${e.message}`);
    throw e;
  }

  const category = mapCategoryData(categoryData?.data.category);

  return {
    category,
  };
}

/**
 * mapCategoryData
 */

export function mapCategoryData(category = {}) {
  const data = { ...category };
  return data;
}
