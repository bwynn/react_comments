import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Comment from './comment.component.jsx';

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            )
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
});

export default CommentList
