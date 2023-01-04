import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyleInput from '../layout/CommentInput';

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      content: '',
    };
  }

  componentDidMount() {
    this._loadUserName();
  }

  handleInputChange = (e) => {
    if (e.target.nodeName === 'INPUT') {
      this.setState({
        username: e.target.value,
      });
    } else {
      this.setState({
        content: e.target.value,
      });
    }
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const comment = this.state;

    if (comment.username === '' || comment.content === '') {
      alert('請輸入用戶名稱及內容');
      return;
    }
    if (onSubmit) onSubmit(comment);

    this.setState({
      content: '',
    });
  };

  _saveUserName = (username) => {
    localStorage.setItem('username', username);
  };

  _loadUserName = () => {
    if (localStorage.getItem('username')) {
      const username = localStorage.getItem('username');
      this.setState({ username });
    }
  };

  render() {
    const { username, content } = this.state;

    return (
      <StyleInput>
        <div className="comment-field">
          <span className="comment-field-name">用戶名稱:</span>
          <div className="comment-field-input">
            <input
              onChange={this.handleInputChange}
              onBlur={() => this._saveUserName(username)}
              value={username}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">評論內容:</span>
          <div className="comment-field-input">
            <textarea onChange={this.handleInputChange} value={content} />
          </div>
        </div>
        <div className="comment-field-button">
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </StyleInput>
    );
  }
}

export default CommentInput;
