module.exports = {
  reactStrictMode: true,

  env: {
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT
  },

  images: {
    domains: ['headlesswp.altervista.org', 'secure.gravatar.com', 'via.placeholder.com']
  }
}
