import React, { Component } from 'react';

class ArticleDetails extends Component {
    render() {
        console.log('ArticleDetails', this.props)
        return (
            <div>
                <h1>Title of Article: {this.props.newsInfo.title}</h1>
                <h5>Author: {this.props.newsInfo.author}</h5>
                <h5>Published: {this.props.newsInfo.publishedAt}</h5>
                <h1>Description: {this.props.newsInfo.description}</h1>
                <img src={this.props.newsInfo.urlToImage}/>
            </div>
        );
    }
}

export default ArticleDetails;