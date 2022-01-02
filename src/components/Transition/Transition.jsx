import { TransitionGroup, CSSTransition as ReactTransition } from 'react-transition-group'

import styles from './Transition.module.scss'

const Transition = ({children, location}) => {
  return (
    <TransitionGroup className={styles.transitionGroup}>
      <ReactTransition
        key={location}
        timeout={400}
        classNames={{
          enter: styles['page-enter'],
          enterActive: styles['page-enter-active'],
          exit: styles['page-exit'],
          exitActive: styles['page-exit-active']
        }}
      >
        <div>
          {children}
        </div>
      </ReactTransition>
    </TransitionGroup>
  )
}

export default Transition