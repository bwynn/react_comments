import React, { Component } from 'react';
import Remarkable from 'react-remarkable';

var md = new Remarkable();

var rawMarkup = function() {
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
};

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        );
    }
}
