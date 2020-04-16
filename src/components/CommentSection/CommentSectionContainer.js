// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // Add state for the comments
  const [newComment, setNewComment] = useState("");
  const { comments, commentHandler } = props;

  let commentIndex = 0;

  const changeComment = (event) => {
    setNewComment(event.target.value);
  };
  const submitComment = (event) => {
    event.preventDefault();
    commentHandler({
      username: "Brandon",
      text: newComment,
      id: commentIndex
    })
    setNewComment("");
  };

  return (
    <div>
      {
        comments.map((comment) => {
          commentIndex = commentIndex <= comment.id ? comment.id + 1 : commentIndex;
          return <Comment 
            comment={comment} 
            key={comment.id}
          />;
        })
      }
      <CommentInput
        changeComment={changeComment}
        submitComment={submitComment}
        comment={newComment}
        commentIndex={commentIndex}
      />
    </div>
  );
};

export default CommentSection;
