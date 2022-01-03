import { getAllAuthors, getUserBySlug } from 'lib/users';
import { getPostsByAuthorSlug, getPaginatedPosts, getPagesCount } from 'lib/posts';

import Container from 'components/Container';
import TemplateArchive from 'Templates/Archive';

function AuthorPosts({ posts, user, pagination }) {

  return (
    <>
      <Container>
        <h1>Post by {user.name}</h1>
      </Container>
      <TemplateArchive posts={posts} pagination={pagination}/>
    </>
  )
}

export async function getStaticProps({ params = {} } = {}) {
  const { user } = await getUserBySlug(params?.slug);
  const allPosts = await getPostsByAuthorSlug(user?.slug);
  const { posts, pagination } = await getPaginatedPosts(allPosts.posts, params?.page);
  return {
    props: {
      user,
      posts,
      pagination: {
        ...pagination,
        basePath: `/authors/${user.slug}`,
      },
    },
  };
}

export async function getStaticPaths() {
  const { authors } = await getAllAuthors();

  const paths = await Promise.all(authors.map(async (author) => {
    const { slug } = author;
    const { posts } = await getPostsByAuthorSlug(slug);
    const pagesCount = await getPagesCount(posts);
    return [...new Array(pagesCount)].map((_, i) => {
      return { params: { slug, page: String( i + 1 )}};
    })
  }));

  const flattenPath = paths.flat()

  return {
    paths: flattenPath,
    fallback: false,
  };
}

export default AuthorPosts
