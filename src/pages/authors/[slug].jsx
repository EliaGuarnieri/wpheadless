import { getAllAuthors, getUserByNameSlug, userSlugByName } from 'lib/users';
import { getPostsByAuthorSlug } from 'lib/posts';

import Container from 'components/Container';
import TemplateArchive from 'Templates/Archive';

//import styles from 'styles/Pages/Blog.module.scss'

function AuthorPosts({ posts, user }) {

  return (
    <>
    <Container>
      <h1>Post by {user.name}</h1>
    </Container>
    <TemplateArchive posts={posts} />
    </>
  )
}

export async function getStaticProps({ params = {} } = {}) {
  const { user } = await getUserByNameSlug(params?.slug);
  const { posts } = await getPostsByAuthorSlug(user?.slug);
  return {
    props: {
      user,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const { authors } = await getAllAuthors();

  const paths = authors.map((author) => {
    const { name } = author;
    return {
      params: {
        slug: userSlugByName(name),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default AuthorPosts
