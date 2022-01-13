import React, { Component } from 'react';

class ArticleDetails extends Component {
    render() {
        console.log('ArticleDetails', this.props)
        return (
            <div>
                <h1>Title of Article: {this.props.newsInfo.Title}</h1>
                <h5>Author: {this.props.newsInfo.Author}</h5>
                <h5>Published: {this.props.newsInfo.Published}</h5>
                <h1>Description: {this.props.newsInfo.Description}</h1>
            </div>
        );
    }
}

export default ArticleDetails;