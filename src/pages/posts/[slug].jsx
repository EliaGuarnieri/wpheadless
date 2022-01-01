import { getPostBySlug, getAllPosts } from 'lib/posts';
import { formatDate } from 'lib/datetime';

import PostHeader from 'components/PostHeader';
import Container from 'components/Container';

import styles from 'styles/Pages/Single.module.scss'

export default function Post({ post, options = {} }) {
  const { content, modified /*, categories */ } = post;

  return (
    <>
      <PostHeader post={post} options={options} />
      <Container>
        <section className={styles.content} dangerouslySetInnerHTML={{__html: content}} />

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
