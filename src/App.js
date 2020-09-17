import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 1,
          name: 'Miya'
        },
        {
          id: 2,
          name: 'Layla'
        },
        {
          id: 3,
          name: 'Bruno'
        },
        {
          id: 4,
          name: 'Moskov'
        },
        {
          id: 5,
          name: 'Clint'
        }
      ],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    
    return (
      <div className='App' style={{marginBottom:20}}>
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox 
          placeholder = 'Search monsters'
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters} />       
      </div>
    );
  }
}

export default App;
