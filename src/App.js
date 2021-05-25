import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';
import Go from './views/Go';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      name: 'Felix Lopez',
      age: 27,
      racers: []
    }
    // console.log('Component is constructed')
  }

  updateName = () => {
    this.setState(
      {name: 'Michael Jordan'}
    )
  }

  componentDidMount(){
    // console.log('Component did mount');
    fetch('https://ergast.com/api/f1/2020/1/driverStandings.json')
      .then(res => res.json())
      .then(data => {
        this.setState(
          {racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings}
        )
      })

  }



  render() {
    console.log(this.state)
    return (
      <div>
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path='/'>
              <Home kevinName={this.state.name} kevinAge={this.state.age} updateName={this.updateName} racers={this.state.racers}/>
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/go'>
              <Go />
            </Route>
          </Switch>
          <h1>"This is the tale of Captain Jack Sparrow..." {this.state.name}, 2021</h1>
        </main>
      </div>
    )
  }
}