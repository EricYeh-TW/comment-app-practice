import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StyleInput from '../styles/CommentInput';
import { useSelector, useDispatch } from 'react-redux';
import { changeContent, changeUsername } from '../actions/commentAction';

// const mapStateToProps = (state) => {
//   return {
//     username: state.commentReducer.username,
//     content: state.commentReducer.content,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChangeUsername: (name) => dispatch(changeUsername(name)),
//     onChangeContent: (content) => dispatch(changeContent(content)),
//   };
// };

const CommentInput = (props) => {
  const username = useSelector((state) => state.commentReducer.username);
  const content = useSelector((state) => state.commentReducer.content);
  const { onSubmit } = props;
  const dispatch = useDispatch();
  useEffect(() => _loadUserName(), []);

  const _saveUserName = () => {
    localStorage.setItem('username', username);
  };

  const _loadUserName = () => {
    const username = localStorage.getItem('username');
    if (username) dispatch(changeUsername(username));
  };

  const handleSubmit = () => {
    const comment = { username, content, time: Date.now() };

    if (comment.username === '' || comment.content === '') return alert('請輸入用戶名稱及內容');
    if (onSubmit) onSubmit(comment);
    dispatch(changeContent(''));
  };

  return (
    <StyleInput>
      <div className="comment-field">
        <span className="comment-field-name">用戶名稱:</span>
        <div className="comment-field-input">
          <input
            onChange={(e) => dispatch(changeUsername(e.target.value))}
            onBlur={() => _saveUserName()}
            value={username}
          />
        </div>
      </div>
      <div className="comment-field">
        <span className="comment-field-name">評論內容:</span>
        <div className="comment-field-input">
          <textarea onChange={(e) => dispatch(changeContent(e.target.value))} value={content} />
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
  // onChangeUsername: PropTypes.func,
  // onChangeContent: PropTypes.func,
  // username: PropTypes.string,
  // content: PropTypes.string,
};

// export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
export default CommentInput;
