import Head from 'next/head'
import Link from 'next/link'
import Container from 'components/Container'


const Home = () => {
  return (
    <>
      <Head>
        <title>Home - TASD Project</title>
      </Head>

      <Container>
        <h1>Progetto</h1>
        <p>Go to <Link href={'/posts/page/1'}><a>Blog</a></Link></p>
        https://github.com/colbyfayock/next-wordpress-starter

      </Container>
    </>
  )
}

export default Home
