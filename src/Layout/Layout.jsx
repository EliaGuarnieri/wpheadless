import { useRouter } from 'next/router'

import Navbar from 'components/Navbar'
import Transition from 'components/Transition'
import Main from 'components/Main'
import Footer from 'components/Footer'

import styles from './Layout.module.scss'

const Layout = ({children}) => {
  const router = useRouter()

  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <Transition location={router.asPath}>
        <Main>{children}</Main>
      </Transition>
      <Footer />
    </div>
  )
}

export default Layout