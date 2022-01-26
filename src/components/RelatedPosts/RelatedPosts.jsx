//import styles from './RelatedPosts.module.scss'

const RelatedPosts = ({posts}) => {
  return posts.map(post => <p key={post.slug}>{post.title}</p>)
}

export default RelatedPosts