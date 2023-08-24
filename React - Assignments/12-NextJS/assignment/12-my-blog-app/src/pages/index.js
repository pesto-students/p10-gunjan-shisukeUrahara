import { getSortedPostsData } from "../lib/posts";
import BlogCard from "../Components/BlogCard";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";

export default function Home({ allPostsData }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>My Blog</h1>
        {allPostsData.map((postData) => (
          <BlogCard key={postData.id} postData={postData} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
