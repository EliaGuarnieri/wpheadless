import { useState, useEffect } from 'react';
import { useWindowSize, useBreakpoint } from 'hooks'

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import Metadata from 'components/Metadata';
import FeaturedImage from 'components/FeaturedImage';
import Button from 'components/Button'

import styles from './PostCard.module.scss';

const PostCard = ({ post }) => {
  const { title, featuredImage, excerpt, slug, author, categories } = post;

  const { windowWidth } = useWindowSize()
  const { lg } = useBreakpoint()

  const isDesktop = windowWidth ? windowWidth >= lg : false

  const [imgSize, setImgSize] = useState({width: 400, height: 400})

  useEffect(() => {
    if(isDesktop) return setImgSize({width: 400, height: 400})

    setImgSize({width: lg, height: lg * 2 / 3})
  }, [isDesktop, lg])

  const { width, height } = imgSize

  return (
    <div className={styles.postCard}>
      <FeaturedImage
        className={styles.postCard__media}
        src={featuredImage?.sourceUrl}
        alt={featuredImage?.altText}
        layout='responsive'
        objectFit="cover"
        width={width}
        height={height}
      />

      <div className={styles.postCard__content}>
        <div className={styles.postCard__body}>
          <div className={styles.postCard__categories}>
            <Metadata categories={categories} />
          </div>
          <h2
            className={styles.postCard__title}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          {excerpt && (
            <div
              className={styles.postCard__exerpt}
              dangerouslySetInnerHTML={{
                __html: sanitizeExcerpt(excerpt),
              }}
            />
          )}
          <div className={styles.postCard__author}>
            <Metadata author={author} />
          </div>
        </div>
        <div className={styles.postCard__footer}>
          <Button href={postPathBySlug(slug)}>
            Read article
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
