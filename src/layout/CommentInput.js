import styled from 'styled-components';

const StyleInput = styled.div`
  background-color: #fff;
  border: 1px solid #f1f1f1;
  padding: 20px;
  margin-bottom: 10px;

  .comment-field {
    margin-bottom: 15px;
    display: flex;

    .comment-field-name {
      display: flex;
      flex-basis: 100px;
      font-size: 14px;
    }

    .comment-field-input {
      display: flex;
      flex: 1;

      input,
      textarea {
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        padding: 5px;
        outline: none;
        font-size: 14px;
        resize: none;
        flex: 1;
      }

      textarea {
        height: 100px;
      }
    }
  }
  .comment-field-button {
    display: flex;
    justify-content: flex-end;

    button {
      padding: 5px 10px;
      width: 80px;
      border: none;
      border-radius: 3px;
      background-color: #00a3cf;
      color: #fff;
      outline: none;
      cursor: pointer;
    }

    button:active {
      background: #13c1f1;
    }
  }
`;

export default StyleInput;
