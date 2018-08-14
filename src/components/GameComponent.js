import React, { Component } from 'react';
import './GameComponent.css'

class GameComponent extends Component {
    update() {

    }

    render() {
        let game = "default";
        if(this.props.game) {
            game = this.props.game;
        }

        return(
            // this.props.handlClick defined in InitialMaps only
            <div className="GameComponent" onClick={this.props.handleClick}>
                {game}
            </div>
        ); 
    }
}

export default GameComponent;