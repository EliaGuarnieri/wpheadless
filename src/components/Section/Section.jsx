import styles from './Section.module.scss'

const Section = ({id, children}) => <section id={id} className={styles.section}>{children}</section>

export default Section