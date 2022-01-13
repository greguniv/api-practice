import React, { Component } from 'react';
import ArticleDetails from './components/ArticleDetails';

import './App.css'

class App extends Component {


  state = {
    baseURL: 'https://newsapi.org/v2/everything?',
    query: 'q=',
    page: "&page=1",
    pageSize: "&pageSize=3",
    apiKey: '&apiKey=' + '3e71275d24174a3cacef16ae0cb172eb',   
    title: '',  
    author: '',
    description: '',
    publishedAt: '',
    content: '',
    url: '',
    newsInfo: {},
  }


  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

 

  handleFetch = e => {
    e.preventDefault()
    this.setState({
      url: this.state.baseURL + this.state.query + this.state.title + this.state.page + this.state.pageSize + this.state.apiKey
    }, () => {
      fetch(this.state.url)
        .then(response => response.json())
        .then(data => this.setState({ newsInfo: data }))
        .catch(error => console.error(error));
    })
  }


  render() {
    return (
      <div className="newsResults">
        <form onSubmit={this.handleFetch}>
          <label htmlFor="title">Search Here</label>
          <input
            type="text"
            id='title'
            onChange={this.handleChange}
            value={this.state.title}
          />
          <input type="submit" value='Get News' />
        </form>
        <a href={this.state.url}>{this.state.url}</a>

        <ArticleDetails newsInfo={this.state.newsInfo} />
      
      </div>
    );
  }
}

export default App;