import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './component/Filter'
import BasketballTeam from './component/BasketballTeam'


class App extends React.Component {
  constructor(){
    super()
    this.state ={
        team: 0,
        players: []
    }
}

onChange = (id) => {
  this.setState({
    team: parseInt(id,10)
  })
}

onSubmit =(event)=> {
  event.preventDefault()
  let x = []
  for (let i = 1; i<34; i++){
    fetch(`https://www.balldontlie.io/api/v1/players?per_page=100&page=${i}`)
    .then(resp=>resp.json())
    .then(players => {
      players.data.forEach(player => {
        if(player.team.id === this.state.team){
          x.push(player)
        }
      })
    })
  }
  setTimeout(() => this.setState({players: x}), 7000)
}

  render(){
    console.log(this.state.players)
    return (
      <div>
        <h1>Basketball Teams</h1>
        <div>
          <Filter team={this.onChange} submit={this.onSubmit}/>

        </div>
        <div>
          <BasketballTeam players={this.state.players}/>
        </div>
      </div>
    )
  };

}

export default App;
