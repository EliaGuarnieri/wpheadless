import Link from 'next/link'

const NavbarListItem = ({ className, item }) => {
  return (
    <li className={ className }>
      {item.path && (
        <Link href={item.path}>
          <a>{ item.name }</a>
        </Link>
      )}
    </li>
  )
}

export default NavbarListItem