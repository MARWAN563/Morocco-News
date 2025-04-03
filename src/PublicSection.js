import { useContext } from 'react';
import { DataContext } from './DataContext';
import './PublicSection.css'; 

export default function PublicSection() {
  const { posts } = useContext(DataContext);

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Welcome to the Public Section</h1>
      <div id="public-posts">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="public-post-card">
              <h2>{post.title}</h2>
              <h4>By: {post.author}</h4>
              <p>{post.details}</p>
              <p className="post-date">Published on: {post.date}</p>
              {post.image && <img src={post.image} alt={post.title} className="post-image" />}
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>No posts available at the moment.</p>
        )}
      </div>
    </>
  );
}
