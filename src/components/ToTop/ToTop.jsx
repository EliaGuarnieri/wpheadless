import styles from './ToTop.module.scss'

import { HiChevronUp as ToTopIcon } from 'react-icons/hi';


const ToTop = ({handleScroll}) => {
  return (
    <button className={styles.button} onClick={handleScroll}>
      <ToTopIcon className={styles.icon}/>
    </button>
  )
}

export default ToTop