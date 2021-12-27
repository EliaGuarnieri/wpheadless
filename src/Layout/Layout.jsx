import Navbar from 'components/Navbar'
import Main from 'components/Main'
import Footer from 'components/Footer'

import styles from './Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout