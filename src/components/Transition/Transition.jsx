import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group'

import styles from './Transition.module.scss'

const TIMOUT = 200

const Transition = ({children, location}) => {
  return (
    <TransitionGroup className={styles.transitionGroup}>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMOUT,
          exit: TIMOUT
        }}
        unmountOnExit
      >
        {status => (
          <div className={styles[status]}>
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}

export default Transition