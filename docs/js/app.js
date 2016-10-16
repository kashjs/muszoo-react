import React from 'react';
import {Examples} from './Examples';
import {MZNavbar, MZNavbarGroup, MZNavbarBrand, MZNavbarItem} from 'muszoo-react/Navbar';

export class App extends React.Component {
    render() {
        return <div>
            <MZNavbar type="fixed">
                <MZNavbarGroup type="shift-left">
                    <MZNavbarBrand>MusZoo React</MZNavbarBrand>
                </MZNavbarGroup>
                <MZNavbarGroup type="auto-fluid">
                    <MZNavbarItem>Docs</MZNavbarItem>
                </MZNavbarGroup>
                <MZNavbarGroup type="shift-right">
                    <MZNavbarItem>
                        Login
                    </MZNavbarItem>
                </MZNavbarGroup>
            </MZNavbar>
            <Examples></Examples>

            <p><em>NOTE: This project is under development.</em></p>
        </div>
    }
}