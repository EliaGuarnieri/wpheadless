import { getApolloClient } from 'lib/apollo-client';

import { QUERY_ALL_USERS } from 'data/users';

/**
 * postPathBySlug
 */

export function authorPathBySlug(slug) {
  return `/authors/${slug}/page/1`;
}

/**
 * getUserBySlug
 */

export async function getUserBySlug(slug) {
  const { users } = await getAllUsers();

  const user = users.find((user) => user.slug === slug);

  return {
    user,
  };
}

/**
 * getAllUsers
 */

export async function getAllUsers() {
  const apolloClient = getApolloClient();

  let usersData;

  try {
    usersData = await apolloClient.query({
      query: QUERY_ALL_USERS,
    });
  } catch (e) {
    console.log(`[users][getAllUsers] Failed to query users data: ${e.message}`);
    throw e;
  }

  let users = usersData?.data.users.edges.map(({ node = {} }) => node).map(mapUserData);

  return {
    users,
  };
}

/**
 * getAllAuthors
 */

export async function getAllAuthors() {
  const { users } = await getAllUsers();

  return {
    authors: users,
  };
}

/**
 * mapUserData
 */

export function mapUserData(user) {
  return {
    ...user,
    roles: [...user.roles.nodes]
  };
}
