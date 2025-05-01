import Link from 'next/link';
import styles from '../styles/PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link href={`/posts/${post.slug}`}>
      {/* <a className={styles.readMore}>Read more...</a> --commenting this out as the new next.js 13+ doesnt allow wrapping of <a> by <Link> */}
      </Link>
    </div>
  );
};

export default PostCard;
