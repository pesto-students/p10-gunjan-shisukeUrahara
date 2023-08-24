import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

const BlogCard = ({ postData }) => {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${postData.id}`} className={styles.link}>
        {postData.title}
      </Link>
      <small className={styles.date}>{postData.date}</small>
      <p className={styles.excerpt}>{postData.content.slice(0, 100)}...</p>
      <Link href={`/posts/${postData.id}`} className={styles.readMore}>
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
