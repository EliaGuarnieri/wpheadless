import { useContext } from 'react'
import { ScrollContext } from 'context'

import { HiChevronUp as ToTopIcon } from 'react-icons/hi';

import styles from './ToTop.module.scss'

const ToTop = () => {
  const scrollbars = useContext(ScrollContext)

  const scrollToTop = () => {
    scrollbars.current.view.scroll({top: 0, behavior: 'smooth'})
  }
  return (
    <button className={styles.button} onClick={scrollToTop}>
      <ToTopIcon className={styles.icon}/>
    </button>
  )
}

export default ToTop