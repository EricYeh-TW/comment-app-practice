import styled from 'styled-components';

const StyleComment = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 10px;
  padding-bottom: 10px;
  min-height: 50px;

  &:hover {
    .comment-delete {
      display: block;
    }
  }

  .comment-user {
    flex-shrink: 0;
  }

  span {
    color: #00a3cf;
    font-style: italic;
  }

  .comment-createdtime {
    color: #aaa;
    position: absolute;
    right: 0;
    bottom: 0;
    font-style: normal;
    font-size: smaller;
  }

  .comment-delete {
    color: red;
    font-style: normal;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    display: none;
    transition: all 0.2s ease-in-out;
  }

  p {
    margin: 0;
  }
`;

export default StyleComment;
