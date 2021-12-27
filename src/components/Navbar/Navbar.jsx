import Link from 'next/link'
import NavbarListItem from './NavbarListItem';
import Container from 'components/Container';

import styles from './Navbar.module.scss'

const menu = [
  { path: '/', name: 'Home'},
  { path: '/posts/page/1', name: 'Blog'}
]

const Navbar = () => {

  return (
    <header>
      <Container>
        <nav className={styles.navbar}>
          <p className={styles.navbar__logo}>
            <Link href='/'>
              <a>TASD</a>
            </Link>
          </p>
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