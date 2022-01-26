import { getPostBySlug, getAllPosts } from 'lib/posts';
import { formatDate } from 'lib/datetime';

import PostHeader from 'components/PostHeader';
import Container from 'components/Container';
import Main from 'components/Main';

import styles from 'styles/Pages/Single.module.scss'

export default function Post({ post }) {
  const { content, modified } = post;

  return (
    <>
      <PostHeader post={post} />
      <Container>
        <Main className={styles.content} content={content} />

        <p>Last updated on {formatDate(modified)}.</p>
      </Container>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { post } = await getPostBySlug(params?.slug);

  const socialImage = `${process.env.OG_IMAGE_DIRECTORY}/${params?.slug}.png`;

  return {
    props: {
      post,
      socialImage
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts();

  const paths = posts
    .filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
}
