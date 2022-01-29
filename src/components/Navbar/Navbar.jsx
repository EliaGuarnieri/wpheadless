import Link from 'next/link'
import NavbarListItem from './NavbarListItem';
import Container from 'components/Container';
import Image from 'next/image';

import styles from './Navbar.module.scss'

const menu = [
  { path: '/', name: 'Home'},
  { path: '/posts/page/1', name: 'Blog'}
]

const Navbar = () => {

  return (
    <header className={styles.navbar__container}>
      <Container>
        <nav className={styles.navbar}>
          <Link href='/'>
            <a className={styles.navbar__logo}>
              <Image
                src="/image/logo@0,25x.png"
                width={40}
                height={40}
                alt="Logo"
                priority
              />
              TASD Project
            </a>
          </Link>
          <ul className={styles.navbar__list}>
            { menu && menu.map((item, index) => {
              return (
                <NavbarListItem
                  key={index}
                  className={styles.navbar__listItem}
                  item={item}
                />
              )
            })}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar