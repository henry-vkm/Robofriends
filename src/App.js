import React, { Component, Fragment } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }

  render() {
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !filteredRobots ?
        <h1>Loading...</h1> :
        (
          <Fragment>
            <h1 className='tc'>Robofriends</h1>
            <SearchBox onSearchChange={this.onSearchChange} />
            <CardList robots={filteredRobots} />
          </Fragment>
        )
  }

}

export default App;
