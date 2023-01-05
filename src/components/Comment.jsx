import React, { Component } from 'react';
import StyleComment from '../styles/Comment';
import PropTypes from 'prop-types';

class Comment extends Component {
  static defaultProps = {
    comment: {},
  };

  static propTypes = {
    comment: PropTypes.shape({
      username: PropTypes.string,
      content: PropTypes.string,
      time: PropTypes.number,
    }),
    index: PropTypes.any,
    onDeleteComment: PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      timeString: '',
    };
  }

  componentDidMount() {
    this._updateTimeString();
    this._timer = setInterval(() => this._updateTimeString(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  _updateTimeString = () => {
    const { comment } = this.props;
    const newTime = Date.now();
    const duration = Math.floor((newTime - comment.time) / 1000);
    this.setState({
      timeString:
        duration > 60 ? `${Math.round(duration / 60)}分鐘前` : `${Math.max(duration, 1)}秒前`,
    });
  };

  handleDeleteComment = () => {
    const { onDeleteComment, index } = this.props;
    if (onDeleteComment) onDeleteComment(index);
  };

  render() {
    const { timeString } = this.state;

    return (
      <StyleComment>
        <div className="comment-user">
          <span>{this.props.comment.username} </span>:
        </div>
        <p>{this.props.comment.content}</p>
        <span className="comment-createdtime">{timeString}</span>
        <span className="comment-delete" onClick={this.handleDeleteComment}>
          刪除
        </span>
      </StyleComment>
    );
  }
}

export default Comment;
