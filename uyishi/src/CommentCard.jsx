import React from 'react';
import './comment.css'; 
import coment from './images/Frame 10 (1).png';
import done from './images/Vector (8).svg';

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <img src={coment} alt="" />
      <h3>{comment.user.username} ({comment.user.fullName}) <img src={done} alt="" /></h3>
      <p>{comment.body}</p>
    </div>
  );
};

export default CommentCard;
