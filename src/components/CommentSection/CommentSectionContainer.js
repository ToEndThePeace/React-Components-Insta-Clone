// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [newComment, setNewComment] = useState(null);

  const changeComment = (event) => {
    setNewComment(event.target.value);
  };
  const submitComment = (event) => {
    event.preventDefault();
    setComments([
      ...comments,
      {
        "username": "Brandon",
        "text": newComment
      }
    ]);
    setNewComment("");
  };

  return (
    <div>
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
      <CommentInput
        changeComment={changeComment}
        submitComment={submitComment}
        comment={newComment}
      />
    </div>
  );
};

export default CommentSection;
