import React, { Component } from 'react'

class Filter extends Component {

    

    render(){
        return(
            <div>
                <form onSubmit={(event) => this.props.submit(event)}>
                    <select name="team" onChange={(e) => this.props.team(e.target.value)}>
                        <option selected disabled>Select Team</option>
                        <option value="1">Atlanta Hawks</option>
                        <option value="2">Boston Celtics</option>
                        <option value="3">Brooklyn Nets</option>
                        <option value="4">Charlotte Hornets</option>
                        <option value="5">Chicago Bulls</option>
                        <option value="6">Cleveland Cavaliers</option>
                    </select>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

export default Filter