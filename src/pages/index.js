import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Welcome! to Hello world</h1>
    <p>Go to <Link href={{
      pathname: 'posts/page/[page]',
      query: { page: 1}
    }}><a>Blog</a></Link></p>
    </>
  )
}
