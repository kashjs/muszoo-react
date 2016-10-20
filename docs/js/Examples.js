import React from 'react';
import {MZButton} from 'muszoo-react/Button';
import {MZNavbar, MZNavbarGroup, MZNavbarBrand, MZNavbarItem} from 'muszoo-react/Navbar';
import {MZSidebar} from 'muszoo-react/Sidebar';

export class Examples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebarDark: false,
            showSidebarLight: false
        };
    };

    handleSidebarToggleDark() {
        this.setState({showSidebarDark: !this.state.showSidebarDark})
    };
    handleSidebarToggleLight() {
        this.setState({showSidebarLight: !this.state.showSidebarLight})
    };

    render() {
        var self = this;
        return <div>
            <h2>Buttons</h2>
            <MZButton className="mz-default">.mz-default</MZButton>
            <MZButton className="mz-prime">.mz-prime</MZButton>
            <MZButton className="mz-success">.mz-success</MZButton>
            <MZButton className="mz-info">.mz-info</MZButton>
            <MZButton className="mz-warning">.mz-warning</MZButton>
            <MZButton className="mz-danger">.mz-danger</MZButton>

            <p>.mz-transparent</p>
            <MZButton className="mz-transparent mz-default">.mz-default</MZButton>
            <MZButton className="mz-transparent mz-prime">.mz-prime</MZButton>
            <MZButton className="mz-transparent mz-success">.mz-success</MZButton>
            <MZButton className="mz-transparent mz-info">.mz-info</MZButton>
            <MZButton className="mz-transparent mz-warning">.mz-warning</MZButton>
            <MZButton className="mz-transparent mz-danger">.mz-danger</MZButton>


            <h2>Navbar</h2>
            <p>.mz-dark</p>
            <MZNavbar className="mz-flex mz-dark mz-flex-align-stretch">
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
            <p>.mz-light</p>
            <MZNavbar className="mz-light mz-flex mz-flex-align-stretch">
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

            <h2>Sidenav</h2>
            <MZButton onClick={this.handleSidebarToggleDark.bind(self)}>.mz-dark</MZButton>
            <MZSidebar className="mz-fixed-right mz-dark"
                       active={this.state.showSidebarDark}>
                <MZNavbar className="mz-flex mz-dark mz-flex-align-stretch">
                    <MZNavbarGroup className="mz-flex-group-left">
                        <MZNavbarItem onClick={this.handleSidebarToggleDark.bind(self)}><i className="fa fa-angle-right"></i></MZNavbarItem>
                    </MZNavbarGroup>
                    <MZNavbarGroup>
                        Sidebar Title
                    </MZNavbarGroup>
                    <MZNavbarGroup className="mz-flex-group-right"></MZNavbarGroup>
                </MZNavbar>
            </MZSidebar>

            <MZButton onClick={this.handleSidebarToggleLight.bind(self)}>.mz-light</MZButton>
            <MZSidebar className="mz-fixed-right mz-light"
                       active={this.state.showSidebarLight}>
                <MZNavbar className="mz-flex mz-light mz-flex-align-stretch">
                    <MZNavbarGroup className="mz-flex-group-left">
                        <MZNavbarItem onClick={this.handleSidebarToggleLight.bind(self)}><i className="fa fa-angle-right"></i></MZNavbarItem>
                    </MZNavbarGroup>
                    <MZNavbarGroup>
                        Sidebar Title
                    </MZNavbarGroup>
                    <MZNavbarGroup className="mz-flex-group-right"></MZNavbarGroup>
                </MZNavbar>
            </MZSidebar>
        </div>
    }
}
