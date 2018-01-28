// Imports
import React, { Component } from 'react';
import logo from './logo.svg';
import peopleData from './peopleData.js';
// import './App.css';

// Styles
let appStyle = {
  display:'grid',
  gridTemplateColumns: '80%',
  gridTemplateRows: '1fr 30px auto',
  gridTemplateAreas: '"title""filter" "item"',
  justifyItems: 'center',
  justifyContent: 'center'
}
let headingStyle = {
  gridArea: 'title'
}
let filterStyle = {
  gridArea: 'filter',
  justifySelf: 'stretch'
}
let itemStyle = {
  // gridArea: 'item',
  // display: 'grid',
  // gridTemplateRows: 'auto',
  // gridTemplateColumns: 'auto',
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
      <div style={{display:'inline-block', padding:'20px'}}>
        <h2>{this.props.person.name.first}</h2>
        <h2>{this.props.person.name.last}</h2>
        <h2>{this.props.person.age}</h2>
      </div>
    );
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {people: []}
  }
  componentDidMount() {
    this.setState({people: peopleData})
  }
  render() {
    return (
      <div id="App" style={appStyle}>
        <Heading title="Hello World"/>
        <Filter/>
        <div style={{textAlign:'center'}}>
          {
            this.state.people[0]
              ?
                this.state.people.map(person => <Item person={person} id={person.id}></Item>)
              :
                <h2>No Items</h2>
          }
        </div>
      </div>
    );
  }
}

export default App;
