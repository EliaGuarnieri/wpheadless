import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'
import { ScrollContext } from 'context'

import Navbar from 'components/Navbar'
import Transition from 'components/Transition'
import Footer from 'components/Footer'
import Scrollbars from 'components/Scrollbars'
import ToTop from 'components/ToTop'

import styles from './Layout.module.scss'

const Layout = ({children}) => {
  const router = useRouter()
  const scrollbars = useRef()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setScrolled(false)
  },[router])

  const checkScrollPosition = (values) => {
    if(values.top < 0.05) {
      setScrolled(false)
    } else {
      setScrolled(true)
    }
  }

  return (
    <ScrollContext.Provider value={scrollbars}>
      <div className={styles.layoutContainer}>
        <Navbar />
        <Transition location={router.asPath}>
          <Scrollbars ref={scrollbars} onScrollFrame={(values) => checkScrollPosition(values)}>
            {children}
            <Footer />
          </Scrollbars>
          {scrolled && (<ToTop />)}
        </Transition>
      </div>
    </ScrollContext.Provider>
  )
}

export default Layout