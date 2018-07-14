import React, { Component } from 'react';
import GameComponent from './GameComponent';

class Picks extends Component {
    render() {
        return (
            <div className="Picks">
                Picks Component
                <GameComponent />
            </div>
        )
    }
}

export default Picks;