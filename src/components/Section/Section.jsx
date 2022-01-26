import styles from './Section.module.scss'

const Section = ({children}) => <section className={styles.section}>{children}</section>

export default Section