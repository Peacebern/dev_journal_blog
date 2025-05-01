import posts from '../data/posts.json';
import PostCard from '../components/PostCard.js';  // Note: vercel is case sensitive so we experienced errors due to the importation of this file
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </Layout>
  );
}
