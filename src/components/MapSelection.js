import React, { Component } from 'react';
import InitialMaps from './InitialMaps';
import Bans from './Bans';
import Picks from './Picks';

class MapSelection extends Component {
    render() {
        return (
            <div className="MapSelection">
                <InitialMaps />
                <br/>
                <Bans />
                <br/>
                <Picks />
            </div>
        );
    }
}

export default MapSelection;