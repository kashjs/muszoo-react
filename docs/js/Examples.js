import React from 'react';
import {MZButton} from 'muszoo-react/Button';
import {MZNavbar, MZNavbarGroup, MZNavbarBrand, MZNavbarItem} from 'muszoo-react/Navbar';

export class Examples extends React.Component {
    render() {
        return <div>
            <h2>Buttons</h2>
            <p>regular</p>
            <MZButton>Default</MZButton>
            <MZButton type="prime">Prime</MZButton>
            <MZButton type="success">Success</MZButton>
            <MZButton type="warning">Warning</MZButton>
            <MZButton type="danger">Danger</MZButton>

            <p>transparent</p>
            <MZButton type="transparent">Default</MZButton>
            <MZButton type="prime transparent">Prime</MZButton>
            <MZButton type="success transparent">Success</MZButton>
            <MZButton type="warning transparent">Warning</MZButton>
            <MZButton type="danger transparent">Danger</MZButton>

            
            <h2>Navbar</h2>
            <MZNavbar>
                <MZNavbarGroup type="shift-left">
                    <MZNavbarBrand>MusZoo React</MZNavbarBrand>
                </MZNavbarGroup>
                <MZNavbarGroup type="auto-fluid">
                    <MZNavbarItem>Source</MZNavbarItem>
                    <MZNavbarItem>Docs</MZNavbarItem>
                </MZNavbarGroup>
                <MZNavbarGroup type="shift-right">
                    <MZNavbarItem href="http://yahoo.com">
                        Signup
                    </MZNavbarItem>
                </MZNavbarGroup>
            </MZNavbar>
        </div>
    }
}
