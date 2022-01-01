import { getPostBySlug, getAllPosts } from 'lib/posts';
import { formatDate } from 'lib/datetime';

import Image from 'next/image';
import Container from 'components/Container';
import Metadata from 'components/Metadata';

import styles from 'styles/Pages/Single.module.scss'

export default function Post({ post, options = {} }) {
  const { featuredImage, title, date, author, content, modified, categories } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }


  return (
    <>
      <header className={styles.header}>
        {featuredImage && (
          <Image
            className={styles.featuredImage}
            src={featuredImage.sourceUrl}
            alt={featuredImage.caption}
            layout='responsive'
            width={976}
            height={549}
            priority
          />
        )}
        <Container className={styles.header__text}>
          <h1>{title}</h1>
          <Metadata {...metadata} />
        </Container>
      </header>
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
