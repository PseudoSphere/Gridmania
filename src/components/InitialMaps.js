import React, { Component } from 'react';
import GameComponent from './GameComponent';

class InitialMaps extends Component {
    render() {
        return (
            <div className="InitialMaps">
                Initial Maps Component
                <GameComponent />
            </div>
        );
    }
}

export default InitialMaps;