import { useRouter } from 'next/router'

import Navbar from 'components/Navbar'
import Transition from 'components/Transition'
import Footer from 'components/Footer'
import Scrollbars from 'components/Scrollbars'

import styles from './Layout.module.scss'

const Layout = ({children}) => {
  const router = useRouter()

  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <Transition location={router.asPath}>
        <Scrollbars>
          {children}
          <Footer />
        </Scrollbars>
      </Transition>
    </div>
  )
}

export default Layout