import React, { Component } from 'react'

class BasketballPlayer extends Component{

    render(){
        let player = this.props.player
        return(
            <div>
                <h2>Name: {`${player.first_name} ${player.last_name}`}</h2>
                <p>Position: {player.position }</p>
                {player.height_feet ? (<p>Height: {`${player.height_feet}' ${player.height_inches}"`}</p>): null}
                {player.weight_pounds ? (<p>Weight: {player.weight_pounds}lb</p>): null } 
            </div>
        )
    }
}

export default BasketballPlayer