import React, { Component } from 'react';
import ArticleDetails from './components/ArticleDetails';

//css
import './App.css'

class App extends Component {


  // https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
  state = {
    baseURL: 'https://newsapi.org/v2/top-headlines?',
    query: 'country=us&',
    apiKey: 'apiKey=' + '3e71275d24174a3cacef16ae0cb172eb',
    title: '',
    author: '',
    description: '',
    publishedAt: '',
    content: '',
    searchURL: '',
    newsInfo: {}
  
  }


  handleFetch = e =>{
    this.setState({
      searchURL: this.state.baseURL + this.state.query + this.state.apiKey
    }, ()=> {
      fetch(this.state.searchURL)
      .then(response => response.json())
      .then(data => this.setState({newsInfo: data}))
      .catch(error => console.error(error))
    })
  }
 

  render() {
    return (
      <div>

        <ArticleDetails newsInfo={this.state.newsInfo} />

        <div className="button"><button onClick={this.handleFetch}>Get News</button></div>
        
      </div>
    );
  }
}

export default App;