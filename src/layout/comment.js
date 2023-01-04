import styled from 'styled-components';

const StyleComment = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 10px;
  padding-bottom: 10px;
  min-height: 50px;

  .comment-user {
    flex-shrink: 0;
  }

  .comment-createdtime {
    color: #aaa;
    position: absolute;
    right: 0;
    bottom: 0;
    font-style: normal;
    font-size: smaller;
  }

  span {
    color: #00a3cf;
    font-style: italic;
  }

  p {
    margin: 0;
  }
`;

export default StyleComment;
