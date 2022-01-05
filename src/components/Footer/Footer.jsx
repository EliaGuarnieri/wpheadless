import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
      &copy; {new Date().getFullYear()} | made with <span className={styles.heart}></span> by
      {' '}
      <a
        href="https://github.com/EliaGuarnieri?tab=repositories"
        rel="noreferrer"
        target="_blank"
      >Elia Guarnieri</a>
    </p>
    </footer>
  )
}

export default Footer