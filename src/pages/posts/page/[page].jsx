import { getAllPosts, getPagesCount, getPaginatedPosts } from 'lib/posts';

import Container from 'components/Container';
import TemplateArchive from 'Templates/Archive';

//import styles from 'styles/Pages/Blog.module.scss'

function Blog({ posts, pagination }) {

  return (
    <>
    <Container>
      <h1>Blog</h1>
    </Container>
    <TemplateArchive posts={posts} pagination={pagination} />
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

export default Blog
