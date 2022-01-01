import { getAllPosts, getPagesCount, getPaginatedPosts } from 'lib/posts';

import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

import styles from 'styles/Pages/Blog.module.scss'

export default function Posts({ posts, pagination }) {

  return (
    <Container>
    <ul className={styles.posts}>
      {posts.map((post) => {
        return (
          <li key={post.slug}>
            <PostCard post={post} />
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
    </Container>
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
