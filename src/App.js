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
      <input type="text" style={filterStyle} onKeyUp={event => this.props.onTextChnage(event.target.value)}/>
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
    this.state = {people: [],filterString: ''}
  }
  componentDidMount() {
    this.setState({people: peopleData})
  }
  render() {
    return (
      <div id="App" style={appStyle}>
        <Heading title="Hello World"/>
        <Filter onTextChnage={text => this.setState({filterString: text})}/>
        <div style={{textAlign:'center'}}>
          {
            this.state.people[0]
              ?
                this.state.people.filter(person =>
                    person.name.first.toLowerCase().includes(
                      this.state.filterString.toLowerCase()
                    )
                  ||
                    person.name.last.toLowerCase().includes(
                      this.state.filterString.toLowerCase()
                    )
                  ||
                    person.age.toString().includes(
                      this.state.filterString.toLowerCase()
                    )
                ).map(person =>
                    <Item person={person} id={person.id}></Item>)
              :
                <h2>No Items</h2>
          }
        </div>
      </div>
    );
  }
}

export default App;
