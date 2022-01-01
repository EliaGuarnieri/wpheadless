import Image from 'next/image'
import GoBack from 'components/GoBack'
import Container from 'components/Container'
import Metadata from 'components/Metadata'

import styles from './PostHeader.module.scss'

const PostHeader = ({ post, options = {} }) => {
  const { featuredImage, title, date, author, categories } = post
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
    <header className={styles.header}>
      <div className={styles.header__back}>
        <GoBack />
      </div>
        <div className={styles.header__featuredImage}>
          <Image
            src={featuredImage.sourceUrl}
            alt={featuredImage.altText}
            layout='responsive'
            width={976}
            height={549}
            priority
          />
        </div>
      <div className={styles.header__text}>
        <Container>
          <h1>{title}</h1>
          <Metadata {...metadata} />
        </Container>
      </div>
    </header>
  )
}

export default PostHeader