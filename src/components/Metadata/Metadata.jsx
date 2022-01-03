import Link from 'next/link';

import { categoryPathBySlug } from 'lib/categories';
import { authorPathBySlug } from 'lib/users';
import { formatDate } from 'lib/datetime';
import styles from './Metadata.module.scss';


const Metadata = ({ author, date, categories }) => {

  return (
    <ul className={styles.metadata}>
      {author && (
        <li className={styles.metadataAuthor}>
          <address>
            By{' '}
            <Link href={authorPathBySlug(author.slug)}>
              <a rel="author">{author.name}</a>
            </Link>
          </address>
        </li>
      )}
      {date && (
        <li>
          <time pubdate="pubdate" dateTime={date}>
            <small>{formatDate(date)}</small>
          </time>
        </li>
      )}
      {Array.isArray(categories) && categories[0] && (
        <li className={styles.metadataCategories}>
          {categories && (
            <ul>
              {categories.map((category) => {
                return (
                  <li key={category.slug}>
                    <Link href={categoryPathBySlug(category.slug)}>
                      <a>{category.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      )}
    </ul>
  );
};

export default Metadata;
