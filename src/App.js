// Imports
import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

// Styles
let appStyle = {
  display:'grid',
  gridTemplateColumns: '20% auto 20%',
  gridTemplateRows: '1fr 30px auto',
  gridTemplateAreas: '". title .""filter filter filter"',
  justifyItems: 'center'
}
let headingStyle = {
  gridArea: 'title'
}
let filterStyle = {
  gridArea: 'filter',
  justifySelf: 'stretch'
}
let itemStyle = {
  gridArea: '3/3'
}
// Components
class Heading extends Component {
  render() {
    return(
      <h1 style={headingStyle}>{this.props.title}</h1>
    );
  }
}
class Filter extends Component {
  render() {
    return(
      <input type="text" style={filterStyle}/>
    );
  }
}
class Item extends Component {
  render() {
    return(
      <div style={itemStyle}>
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
      <div id="App" style={appStyle}>
        <Heading title="Hello World"/>
        <Filter/>
        <Item name="John" lastName="Smith" age="2000"/>
        <Item name="River" lastName="Song" age="200"/>
      </div>
    );
  }
}

export default App;
