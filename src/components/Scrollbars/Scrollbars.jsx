import { Scrollbars as ReactScrollbars } from 'react-custom-scrollbars-2'

import styles from './Scrollbars.module.scss'

const Scrollbars = (props) => {
  return (
    <ReactScrollbars
      renderThumbHorizontal={(props) => <div {...props} className={styles.thumb} />}
      renderThumbVertical={(props) => <div {...props} className={styles.thumb} />}
      hideTracksWhenNotNeeded={true}
      universal={true}
    >
      { props.children }
    </ReactScrollbars>
  )
}

export default Scrollbars