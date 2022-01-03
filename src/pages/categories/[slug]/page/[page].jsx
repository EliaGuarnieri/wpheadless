import { getAllCategories, getCategoryBySlug } from 'lib/categories';
import { getPostsByCategoryId, getPaginatedPosts, getPagesCount } from 'lib/posts';

import Container from 'components/Container';
import TemplateArchive from 'Templates/Archive';

function CategoryPosts({ posts, category, pagination }) {

  return (
    <>
    <Container>
      <h1>Post by {category.name}</h1>
    </Container>
    <TemplateArchive posts={posts} pagination={pagination}/>
    </>
  )
}


export async function getStaticProps({ params = {} } = {}) {
  const { category } = await getCategoryBySlug(params?.slug);
  const allPosts = await getPostsByCategoryId(category.databaseId);
  const { posts, pagination } = await getPaginatedPosts(allPosts.posts, params?.page);

  return {
    props: {
      category,
      posts,
      pagination: {
        ...pagination,
        basePath: `/categories/${category.slug}`,
      },
    },
  };
}

export async function getStaticPaths() {
  const { categories } = await getAllCategories();

  const paths = await Promise.all(categories.map(async (category) => {
    const { slug } = category;
    const { posts } = await getPostsByCategoryId(category.databaseId);
    const pagesCount = await getPagesCount(posts);

    return [...new Array(pagesCount)].map((_, i) => {
      return { params: {slug, page: String( i + 1 )}};
    })
  }));

  const flattenPath = paths.flat()

  return {
    paths: flattenPath,
    fallback: false,
  };
}

export default CategoryPosts