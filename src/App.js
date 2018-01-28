import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Heading extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
class Filter extends Component {
  render() {
    return(
      <input type="text"/>
    );
  }
}
class Item extends Component {
  render() {
    return(
      <div id={this.props.id}>
        <h2>{this.props.name}</h2>
        <h2>{this.props.lastName}</h2>
        <h2>{this.props.age}</h2>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div id="App">
        <Heading title="Hello World"/>
        <Filter/>
      </div>
    );
  }
}

export default App;
