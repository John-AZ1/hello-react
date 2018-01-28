// Imports
import React, { Component } from 'react';
import logo from './logo.svg';
import peopleData from './peopleData.js';
// import './App.css';

let itemsGrid = 'item0'
// Styles
let style = {
  text: {
    color: '#fff'
  },
  app: {
    display:'grid',
    gridTemplateColumns: '80%',
    gridTemplateRows: '1fr 30px auto',
    gridTemplateAreas: '"title""filter""item"',
    justifyItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    gridArea: 'title'
  },
  filter: {
    gridArea: 'filter',
    justifySelf: 'center',
    color: '#808fa1'
  },
  item: {
    // gridArea: 'item',
    border: '1px #808fa1 solid',
    display:'inline-block',
    padding:'20px',
    width: '130px',
    height: '180px',
    borderRadius: '10px',
    margin: '10px'
  }
}



// Components
class Heading extends Component {
  render() {
    return(
      <h1 style={{...style.text,...style.heading}}>{this.props.title}</h1>
    );
  }
}
class Filter extends Component {
  render() {
    return(
      <input type="text" style={style.filter} onKeyUp={event => this.props.onTextChnage(event.target.value)}/>
    );
  }
}
class Item extends Component {
  render() {
    return(
      <div style={{...style.text,...style.item}}>
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
      <div id="App" style={style.app}>
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
                ).map((person,val) => {
                    return <Item person={person} id={person.id}></Item>
                  })

              :
                <h2>No Items</h2>
          }
        </div>
      </div>
    );
  }
}

export default App;
