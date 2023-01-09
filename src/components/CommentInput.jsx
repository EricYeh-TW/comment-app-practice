import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyleInput from '../styles/CommentInput';

const CommentInput = (props) => {
  const { onSubmit } = props;
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  useEffect(() => _loadUserName(), []);

  const _saveUserName = () => {
    localStorage.setItem('username', username);
  };

  const _loadUserName = () => {
    const username = localStorage.getItem('username');
    if (username) setUsername(username);
  };

  const handleSubmit = () => {
    const comment = { username, content, time: Date.now() };

    if (comment.username === '' || comment.content === '') return alert('請輸入用戶名稱及內容');
    if (onSubmit) onSubmit(comment);
    setContent('');
  };

  return (
    <StyleInput>
      <div className="comment-field">
        <span className="comment-field-name">用戶名稱:</span>
        <div className="comment-field-input">
          <input onChange={(e) => setUsername(e.target.value)} onBlur={() => _saveUserName()} value={username} />
        </div>
      </div>
      <div className="comment-field">
        <span className="comment-field-name">評論內容:</span>
        <div className="comment-field-input">
          <textarea onChange={(e) => setContent(e.target.value)} value={content} />
        </div>
      </div>
      <div className="comment-field-button">
        <button type="submit" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </StyleInput>
  );
};

CommentInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CommentInput;
