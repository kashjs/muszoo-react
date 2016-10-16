import React from 'react';
import {Examples} from './Examples';
import {MZNavbar, MZNavbarGroup, MZNavbarBrand, MZNavbarItem} from 'muszoo-react/Navbar';

export class App extends React.Component {
    render() {
        return <div>
            <MZNavbar className="mz-fixed-top mz-flex mz-flex-align-stretch">
                <MZNavbarGroup className="mz-flex-group-left">
                    <MZNavbarBrand>MusZoo React</MZNavbarBrand>
                </MZNavbarGroup>
                <MZNavbarGroup className="mz-flex-group-right">
                    <MZNavbarItem href="https://github.com/kashjs/muszoo-react">Source</MZNavbarItem>
                </MZNavbarGroup>
            </MZNavbar>
            <Examples></Examples>

            <p><em>NOTE: This project is under development.</em></p>
        </div>
    }
}