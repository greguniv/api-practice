import React, { Component } from 'react';

//Components


//CSS
import './App.css';


// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY

class App extends Component {

  state = {
    baseURL: 'https://newsapi.org/v2/top-headlines?',
    query: 'country=us&',
    category: 'category=business&',
    apiKey: 'apiKey=' + '63c2c8f803d842c2bf866f2ddb80a589',
    title: '',
    author: '',
    description: '',
    publishedOn: '',
    content: '',
  }

  render() {
    return (
      <div>
        F
      </div>
    );
  }
}

export default App;
