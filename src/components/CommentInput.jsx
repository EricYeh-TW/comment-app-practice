import React from 'react';
import StyleInput from '../styles/CommentInput';
import { useChangeUsername, useChangeContent, useSubmit } from '../containers/CommentInput';

const CommentInput = (props) => {
  const [username, handleUserNameChange] = useChangeUsername();
  const [content, handleContentChange] = useChangeContent();
  const [handleSubmit] = useSubmit(props);

  return (
    <StyleInput>
      <div className="comment-field">
        <span className="comment-field-name">用戶名稱:</span>
        <div className="comment-field-input">
          <input onChange={(e) => handleUserNameChange(e.target.value)} value={username} />
        </div>
      </div>
      <div className="comment-field">
        <span className="comment-field-name">評論內容:</span>
        <div className="comment-field-input">
          <textarea onChange={(e) => handleContentChange(e.target.value)} value={content} />
        </div>
      </div>
      <div className="comment-field-button">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </StyleInput>
  );
};

export default CommentInput;
