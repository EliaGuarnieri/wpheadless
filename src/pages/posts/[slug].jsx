import { getPostBySlug, getAllPosts, getRelatedPosts } from 'lib/posts';

import PostHeader from 'components/PostHeader';
import Container from 'components/Container';
import Main from 'components/Main';
import RelatedPosts from 'components/RelatedPosts';

import styles from 'styles/Pages/Single.module.scss'

export default function Post({ post, relatedPosts }) {
  const { content } = post;

  return (
    <>
      <PostHeader post={post} />
      <Container>
        <Main className={styles.content} content={content} />

        <RelatedPosts posts={relatedPosts} />
      </Container>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { post } = await getPostBySlug(params?.slug);

  const { categories, databaseId: postId } = post
  const category = categories.length && categories[0]
  const { relatedPosts } = await getRelatedPosts(category, postId)

  return {
    props: {
      post,
      relatedPosts
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
