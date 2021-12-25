import Image from 'next/image';

import { getPostBySlug, getAllPosts } from 'lib/posts';
import { formatDate } from 'lib/datetime';

export default function Post({ post }) {
  const {
    title,
    content,
    modified,
    featuredImage,
  } = post;


  return (
    <>
      <header>
        {featuredImage && (
          <Image
            {...featuredImage}
            src={featuredImage.sourceUrl}
            alt={featuredImage.caption}
          />
        )}
        <h1>${title}</h1>
      </header>

      ${content}

      <p>Last updated on {formatDate(modified)}.</p>
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
