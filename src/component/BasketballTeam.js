import React, { Component } from 'react'
import BasketballPlayer from './BasketballPlayer'

class BasketballTeam extends Component{
    render(){
        return(
            <div>
                {this.props.players.map(player => player.position && player.height_feet && player.weight_pounds ? <BasketballPlayer player={player}/> : null)}
            </div>
        )
    }
}

export default BasketballTeam