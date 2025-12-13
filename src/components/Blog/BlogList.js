import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from '../../api/client';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Petición GET con Axios
    client.get('/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error cargando posts", error));
  }, []);

  return (
    <div className="blog-container">
      <h2>Blog Técnico</h2>
      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <Link to={`/posts/${post.id}`} className="read-more">Leer más</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;