import { useRouter } from 'next/router'
import { useRef } from 'react'

import Navbar from 'components/Navbar'
import Transition from 'components/Transition'
import Footer from 'components/Footer'
import Scrollbars from 'components/Scrollbars'
import ToTop from 'components/ToTop'

import styles from './Layout.module.scss'

const Layout = ({children}) => {
  const router = useRouter()
  const scrollbars = useRef()

  const handleScroll = () => {
    scrollbars.current.view.scroll({top: 0, behavior: 'smooth'})
  }

  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <Transition location={router.asPath}>
        <Scrollbars ref={scrollbars}>
          {children}
          <Footer />
        </Scrollbars>
        <ToTop handleScroll={handleScroll}/>
      </Transition>
    </div>
  )
}

export default Layout