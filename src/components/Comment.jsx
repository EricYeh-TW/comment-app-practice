import React, { Component } from 'react';
import StyleComment from '../layout/Comment';
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

  _updateTimeString = () => {
    const { comment } = this.props;
    const newTime = Date.now();
    const duration = Math.floor((newTime - comment.time) / 1000);
    this.setState({
      timeString:
        duration > 60 ? `${Math.round(duration / 60)}分鐘前` : `${Math.max(duration, 1)}秒前`,
    });
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
      </StyleComment>
    );
  }
}

export default Comment;
