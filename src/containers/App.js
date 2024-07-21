import React, { Component } from 'react';
import Heading from '../components/Heading';
import { createApi } from "unsplash-js";

import './App.css';

const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

const unsplashApi = createApi({ accessKey: apiKey });


class App extends Component {
  constructor() {
    super();
    this.state = {
      unsplash: {}
    }
  }

  componentDidMount() {
    unsplashApi.photos
      .getRandom({ query: 'nature' })
      .then(response => { this.setState({ unsplash: response.response }) })
      .then(urls => { document.body.style.backgroundImage = `url(${urls.full})` })
      .catch((err) => { console.log(err) })
  }

  
  render() {  
    console.log(this.unsplash)
    return (
      <div className="App">
        <header className="App-header">
          <Heading />
        </header>
        <main className="App-main">
        </main>
      </div>
    );
  }
}

export default App;
