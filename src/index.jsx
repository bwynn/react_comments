import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Comment from './components/comment.component.jsx';
import CommentList from './components/commentList.component.jsx';
import CommentBox from './components/commentBox.component.jsx';
import CommentForm from './components/commentForm.component.jsx';

render(
    <CommentBox url="/api/comments" pollInterval={2000}/>,
    document.getElementById('content')
);
