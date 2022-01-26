import GoBack from 'components/GoBack'
import Container from 'components/Container'
import Metadata from 'components/Metadata'
import FeaturedImage from 'components/FeaturedImage'

import styles from './PostHeader.module.scss'

const PostHeader = ({ post }) => {
  const { featuredImage, title, date, author, categories } = post
  const metadata = {
    author: author,
    date: date,
    categories: categories
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__back}>
        <GoBack />
      </div>
      <FeaturedImage
        className={styles.header__featuredImage}
        src={featuredImage?.sourceUrl}
        alt={featuredImage?.altText}
        layout='responsive'
        width={976}
        height={549}
        priority
      />
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