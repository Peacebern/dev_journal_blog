import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head'; 
import data from '../../data/posts.json'; 
import Layout from '../../components/Layout';

const CategoryPage = () => {
  const router = useRouter();
  const { name } = router.query; 
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(null); 

  useEffect(() => {
    if (name) {

      // here we Filter blog posts by category
      const posts = data.filter(post => post.category.toLowerCase() === name.toLowerCase());
      setFilteredPosts(posts);

      // here we Add custom category particular content
      if (name === 'about') {
        setCategoryInfo({
          title: 'About Us',
          description: 'This blog shares insights on various topics such as technology, lifestyle, and much more!',
          additionalInfo: 'Stay tuned for more posts!',
        });
      } else {
        setCategoryInfo(null); // here we apply reset for other categories
      }
    }
  }, [name]);

  // Here we put in place basic SEO tags
  const pageTitle = categoryInfo ? `About Us - Dev Journal` : `${name} Posts - Dev Journal`;
  const pageDescription = categoryInfo ? categoryInfo.description : `Browse posts about ${name} on Dev Journal.`;

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Head>
      
      <div style={{ padding: '20px' }}>
        {/* here we do Conditional Rendering for About Us page or Category Posts */}
        {categoryInfo ? (
          <div>
            <h1>{categoryInfo.title}</h1>
            <p>{categoryInfo.description}</p>
            <p>{categoryInfo.additionalInfo}</p>
          </div>
        ) : (
          <div>
            <h1>{name} Posts</h1>
            {filteredPosts.length === 0 ? (
              <p>No posts found in this category.</p>
            ) : (
              <div>
                {filteredPosts.map((post) => (
                  <div key={post.slug}>
                    <h2>
                      <Link href={`/posts/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p>{post.excerpt}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
