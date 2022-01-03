import Link from 'next/link'

const NavbarListItem = ({ className, item }) => {
  return (
    <li>
      {item.path && (
        <Link href={item.path}>
          <a className={ className }>{ item.name }</a>
        </Link>
      )}
    </li>
  )
}

export default NavbarListItem