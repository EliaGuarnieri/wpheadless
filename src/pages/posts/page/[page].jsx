import { getAllPosts, getPagesCount, getPaginatedPosts } from 'lib/posts';

import Pagination from 'components/Pagination';

export default function Posts({ posts, pagination }) {


  return (
    <>
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.slug}>
            {post.title}
          </li>
        );
      })}
    </ul>
    {pagination && (
      <Pagination
        addCanonical={false}
        currentPage={pagination?.currentPage}
        pagesCount={pagination?.pagesCount}
        basePath={pagination?.basePath}
      />
    )}
    </>
  )
}

export async function getStaticProps({ params = {} } = {}) {
  const { posts, pagination } = await getPaginatedPosts(params?.page);
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts();
  const pagesCount = await getPagesCount(posts);
  const paths = [...new Array(pagesCount)].map((_, i) => {
    return { params: { page: String(i + 1) } };
  });
  return {
    paths,
    fallback: false,
  };
}
