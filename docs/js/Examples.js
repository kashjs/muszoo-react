import React from 'react';
import {MZButton} from 'muszoo-react/Button';
import {MZNavbar, MZNavbarGroup, MZNavbarBrand, MZNavbarItem} from 'muszoo-react/Navbar';

export class Examples extends React.Component {
    render() {
        return <div>
            <h2>Buttons</h2>
            <p>regular</p>
            <MZButton>Default</MZButton>
            <MZButton className="mz-prime">Prime</MZButton>
            <MZButton className="mz-success">Success</MZButton>
            <MZButton className="mz-info">Info</MZButton>
            <MZButton className="mz-warning">Warning</MZButton>
            <MZButton className="mz-danger">Danger</MZButton>

            <p>transparent</p>
            <MZButton className="mz-transparent">Default</MZButton>
            <MZButton className="mz-prime mz-transparent">Prime</MZButton>
            <MZButton className="mz-success mz-transparent">Success</MZButton>
            <MZButton className="mz-info mz-transparent">Info</MZButton>
            <MZButton className="mz-warning mz-transparent">Warning</MZButton>
            <MZButton className="mz-danger mz-transparent">Danger</MZButton>


            <h2>Navbar</h2>
            <MZNavbar className="mz-flex mz-flex-align-stretch">
                <MZNavbarGroup className="mz-flex-group-left">
                    <MZNavbarBrand>MusZoo React</MZNavbarBrand>
                </MZNavbarGroup>
                <MZNavbarGroup className="mz-flex-fluid">
                    <MZNavbarItem href="#">Source</MZNavbarItem>
                    <MZNavbarItem href="#">Docs</MZNavbarItem>
                </MZNavbarGroup>
                <MZNavbarGroup className="mz-flex-group-right">
                    <MZNavbarItem href="#">
                        Signup
                    </MZNavbarItem>
                </MZNavbarGroup>
            </MZNavbar>
        </div>
    }
}
