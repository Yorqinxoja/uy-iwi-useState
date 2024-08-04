import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import './comment.css'; 

const Comment = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then(response => response.json())
      .then(data => {
        const firstFourComments = data.comments.slice(0, 4); 
        setComments(firstFourComments);
      })
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  return (
    <div className="comment-container">
      <h1>Comments</h1>
      <div className="comment-list">
        {comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
