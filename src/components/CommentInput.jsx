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

  handleInputChange(e) {
    if (e.target.nodeName === 'INPUT') {
      this.setState({
        username: e.target.value,
      });
    } else {
      this.setState({
        content: e.target.value,
      });
    }
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    const comment = this.state;

    if (onSubmit) onSubmit(comment);

    this.setState({
      content: '',
    });
  }

  render() {
    const { username, content } = this.state;

    return (
      <StyleInput>
        <div className="comment-field">
          <span className="comment-field-name">用戶名稱:</span>
          <div className="comment-field-input">
            <input onChange={this.handleInputChange.bind(this)} value={username} />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">評論內容:</span>
          <div className="comment-field-input">
            <textarea onChange={this.handleInputChange.bind(this)} value={content} />
          </div>
        </div>
        <div className="comment-field-button">
          <button type="submit" onClick={this.handleSubmit.bind(this)}>
            Submit
          </button>
        </div>
      </StyleInput>
    );
  }
}

export default CommentInput;
