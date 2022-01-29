import { Scrollbars as ReactScrollbars } from 'react-custom-scrollbars-2'
import { forwardRef } from 'react'

import styles from './Scrollbars.module.scss'

const Scrollbars = forwardRef((props, ref) => (
    <ReactScrollbars
      ref={ref}
      renderThumbHorizontal={(props) => <div {...props} className={styles.thumb} />}
      renderThumbVertical={(props) => <div {...props} className={styles.thumb} />}
      hideTracksWhenNotNeeded={true}
      universal={true}
      {...props}
    >
      { props.children }
    </ReactScrollbars>
))

Scrollbars.displayName = 'Scrollbars'

export default Scrollbars