import React, { Component } from 'react';
import GameComponent from './GameComponent';

class InitialMaps extends Component {
    handleClick(index) {
        console.log(index, this.state.maps[index]);
    }
    
    componentWillMount() {
        this.setState({
            maps:["Go", "Go", "Go", "Chess", "Chess", "Chess", "Checkers", "Checkers", "Checkers"]
        })
    }
    render() {
        let maps;
        if(this.state.maps) {
            maps = this.state.maps.map((map, index) => {
                return (
                    <GameComponent key={index} game={map} clickable={true} handleClick={this.handleClick.bind(this, index)} />
                )
            });
        }
        console.log(maps);

        return (
            <div className="InitialMaps">
                Initial Maps Component
                {maps}
            </div>
        );
    }
}

export default InitialMaps;