import React from 'react';
import {Examples} from './Examples';
import {MZNavbar} from 'muszoo-react/Navbar';

export class App extends React.Component {
    render() {
        return <div>
            <MZNavbar navType="fixed">MusZoo React</MZNavbar>
            <Examples></Examples>
        </div>
    }
}