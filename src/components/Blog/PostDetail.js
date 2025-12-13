import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import client from '../../api/client';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client.get(`/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error("Error cargando post", error));
  }, [id]);

  if (!post) return <p>Cargando...</p>;

  return (
    <div className="post-detail">
      <Link to="/posts" className="back-btn">← Volver al Blog</Link>
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <hr />
      
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export default PostDetail;