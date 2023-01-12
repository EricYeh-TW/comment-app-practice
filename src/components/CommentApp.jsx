import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const CommentApp = () => {
  // const [comments, setComments] = useState([]);
  // useEffect(() => _loadComments(), []);

  // const _saveComments = (comments) => {
  //   localStorage.setItem('comments', JSON.stringify(comments));
  // };

  // const _loadComments = () => {
  //   const loadComments = localStorage.getItem('comments');
  //   if (loadComments) setComments(JSON.parse(loadComments));
  // };

  // const handleCommentSubmit = (comment) => {
  //   const newComments = [...comments, comment];
  //   _saveComments(newComments);
  //   setComments(newComments);
  // };

  // const handleDeleteComment = (index) => {
  //   const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
  //   _saveComments(newComments);
  //   setComments(newComments);
  // };

  return (
    <div>
      <CommentInput />
      <CommentList />
    </div>
  );
};

export default CommentApp;
