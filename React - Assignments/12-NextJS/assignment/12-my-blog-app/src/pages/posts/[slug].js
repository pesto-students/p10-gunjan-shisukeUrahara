// pages/posts/[slug].js
import { getPostData, getAllPostIds } from "../../lib/posts";
import styles from "../../styles/Post.module.css";
import Navbar from "../../Components/Navbar";

export default function Post({ postData }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>{postData.title}</h1>
        <div className={styles.author}>
          Posted on {postData.date} by {postData.author}
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
