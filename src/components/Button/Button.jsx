import Link from 'next/link';

import styles from './Button.module.scss'

const Button = ({href, children}) => {
  return (
    <Link href={href}>
      <a className={styles.button}>
        {children}
      </a>
    </Link>
  )
}

export default Button