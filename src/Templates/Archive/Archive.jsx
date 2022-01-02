import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

import styles from './Archive.module.scss'

export default function TemplateArchive({ posts, pagination }) {

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