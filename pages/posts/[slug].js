import { useRouter } from 'next/router';
import posts from '../../data/posts.json';
import Layout from '../../components/Layout';

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // here we Find the post that matches the slug
  const post = posts.find((p) => p.slug === slug);

  // here we handle the error "where the post is not found"
  if (!post) {
    return (
      <Layout>
        <p>Post not found.</p>
      </Layout>
    );
  }

  // here we show the post details if found
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>
        <strong>Category:</strong> {post.category}
      </p>
    </Layout>
  );
};

export default PostPage;
